<template><div class="temtrem-map" style="position:relative; height:100vh; z-index:0;">
    <l-map ref="map" v-bind="{zoom:13, center:[-19.9830486, -44.0079828]}"
        @update:bounds="updateBoundsHandler($event)"
        @ready="mapReadyHandler"
        style="width:100%; height:100%;">
        <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <l-marker :lat-lng="[parseFloat(s.lat), parseFloat(s.lng)]"
            v-for="s in search.results.data" :key="s.id">
            <l-popup :options="{offset:[0, -10]}">
                <div class="p-2" style="width:250px;">
                    <h3 class="m-0 p-0">{{ s.name }}</h3>
                    <div v-html="s.description"></div>
                </div>
                <nuxt-link class="btn btn-primary d-block border-0 text-white" :to="`/business/${s.slug}`">Ver detalhes</nuxt-link>
            </l-popup>
        </l-marker>
    </l-map>
</div></template>

<script>
export default {
    data() {
        return {
            search: {
                loading: false,
                params: {
                    q: "",
                    latMin: 0,
                    latMax: 0,
                    lngMin: 0,
                    lngMax: 0,
                },
                results: {data:[]},
            },
        };
    },

    methods: {
        businessSearch() {
            if (this._businessSearchTimeout) clearTimeout(this._businessSearchTimeout);
            this.search.loading = true;
            this._businessSearchTimeout = setTimeout(() => {
                let params = this.search.params;
                this.$axios.get('/api/temtrem-business/search', {params}).then(resp => {
                    this.search.results = resp.data;
                    this.search.loading = false;
                });
            }, 1000);
        },

        businessGoto(business) {
            this.$router.push(`/business/${business.slug}`);
        },

        updateBoundsHandler(ev) {
            this.search.params.latMin = ev._southWest.lat;
            this.search.params.latMax = ev._northEast.lat;
            this.search.params.lngMin = ev._southWest.lng;
            this.search.params.lngMax = ev._northEast.lng;
            this.businessSearch();
        },

        mapReadyHandler(ev) {
            let bounds = this.$refs.map.mapObject.getBounds();
            this.search.params.latMin = bounds._southWest.lat;
            this.search.params.latMax = bounds._northEast.lat;
            this.search.params.lngMin = bounds._southWest.lng;
            this.search.params.lngMax = bounds._northEast.lng;
            this.businessSearch();
        },

        getGeoposition() {
            if (!navigator.geolocation) return;
            navigator.geolocation.getCurrentPosition(pos => {
                console.log(pos);
            });
        },
    },

    mounted() {
        this.getGeoposition();
    },
}
</script>

<style>
.temtrem-map .leaflet-popup-content-wrapper {border-radius:0px;}
.temtrem-map .leaflet-popup-content {margin:0px !important;}
.temtrem-map .leaflet-popup-content p {margin:0px; padding:0px;}
</style>