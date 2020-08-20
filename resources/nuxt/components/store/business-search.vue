<template><div class="business-search">
    <l-map ref="map" v-bind="props.map" style="position:relative; width:100%; height:100%;"
        @update:bounds="updateBounds($event)"
        @update:center="$emit('update:center', $event)"
    >
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>

        <div v-for="m in props.value" :key="m.id">
            <slot name="map" :marker="m" :setPlace="setPlace">
                <l-marker :lat-lng="[m.lat, m.lng]"></l-marker>
            </slot>
        </div>
    </l-map>
</div></template>


<script>
let updateBoundsTimeout, setPlaceTimeout;

export default {
    props: {
        map: {default:()=>({})},
        search: {default:()=>({})},
        value: {default:()=>([])},
    },

    watch: {
        $props: {
            deep: true,
            handler(value) {
                this.$set(this, 'props', Object.assign({}, value));
            }
        },
    },

    methods: {
        doSearch() {
            this.$axios.get('/api/business/search', {params:this.props.search}).then((resp) => {
                this.$set(this.props, 'value', resp.data);
            });
        },

        updateBounds(ev) {
            this.props.search.lat_min = ev._southWest.lat;
            this.props.search.lat_max = ev._northEast.lat;
            this.props.search.lng_min = ev._southWest.lng;
            this.props.search.lng_max = ev._northEast.lng;
            this.$emit('update:bounds', ev);

            if (updateBoundsTimeout) clearTimeout(updateBoundsTimeout);
            updateBoundsTimeout = setTimeout(this.doSearch, 1000);
        },

        setPlace(ev, marker) {
            return new Promise((resolve, reject) => {
                if (setPlaceTimeout) clearTimeout(setPlaceTimeout);
                setPlaceTimeout = setTimeout(() => {
                    if (ev.type=='dragend') {
                        this.$axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${ev.target._latlng.lat}&lon=${ev.target._latlng.lng}&format=json&addressdetails=1`).then((resp) => {
                            marker.route = resp.data.address.road||"";
                            marker.zipcode = resp.data.address.postcode||"";
                            marker.district = resp.data.address.road||"";
                            marker.city = resp.data.address.city||"";
                            marker.state = resp.data.address.state||"";
                            marker.st = "";
                            marker.country = resp.data.address.country||"";
                            marker.co = resp.data.address.country_code||"";
                            marker.lat = resp.data.lat||"";
                            marker.lng = resp.data.lon||"";
                            resolve(marker);
                        });
                    }
                }, 500);
            });
        },
    },

    data() {
        let data = {};
        data.props = Object.assign({}, this.$props);

        data.props.map = Object.assign({
            zoom: 16,
            center: [0, 0],
        }, data.props.map);

        data.props.search = Object.assign({
            q: '',
            user_id: '',
            type: '',
            category: '',
            lat_min: '',
            lat_max: '',
            lng_min: '',
            lng_max: '',
        }, data.props.search);

        return data;
    },

    mounted() {
        this.$geolocation().then((resp) => {
            this.$set(this.props.map, 'center', [resp.lat, resp.lng]);
            this.doSearch();
        });
    },
};</script>

<style>
.business-search {position:relative;}

.leaflet-popup-content-wrapper {
    padding: 0px !important;
    border-radius: 0px !important;
    background: none !important;
    box-shadow: none !important;
    height: auto !important;
}

.leaflet-popup-content {
	margin: 0px !important;
}

.leaflet-popup-close-button {
	color: #fff !important;
	background: #f00 !important;
	padding: 2px 0px !important;
	height: auto !important;
	border-radius: 50%;
	margin: -8px -7px 0px 0px !important;
}
</style>