<template><div>
    <l-map ref="map" v-bind="map" style="width:100vw; height:100vh;"
        @update:bounds="eventMapUpdateBounds($event)"
    >
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
        <l-marker :lat-lng="[m.lat, m.lng]" v-for="m in markers" :key="m.id">
            <l-icon v-if="m.category_photo">
                <img :src="m.category_photo" alt="" style="width:35px; height:35px; animation-duration:200ms;" class="animate__animated animate__flipInX">
            </l-icon>
            <l-popup class="bg-white animate__animated animate__flipInX" style="width:300px; border-radius:5px; overflow:hidden;">
                <div class="row no-gutters align-items-center">
                    <div class="col-6">
                        <div class="p-2 font-weight-bold text-uppercase">{{ m.name }}</div>
                        <div class="px-2 pb-2 text-muted" style="max-height:120px; overflow:auto;">{{ m.description }}</div>
                    </div>
                    <div class="col-6 p-2">
                        <img :src="m.category_photo" alt="" style="width:100%;" class="">
                    </div>
                </div>
                <nuxt-link :to="`/business/${m.id}`" class="btn btn-primary btn-block btn-sm m-0 mt-2" @click.native="business=m">
                    Detalhes
                </nuxt-link>
            </l-popup>
        </l-marker>
    </l-map>

    <div class="bg-white shadow-sm p-2" style="position:fixed; bottom:0px; left:0px; width:100%; max-height:40vh; overflow:auto; z-index:9999!important">
        <div v-if="$route.params.id">
            <nuxt-child keep-alive v-model="business"></nuxt-child>
        </div>
    </div>
</div></template>

<script>
let eventMapUpdateBoundsTimeout;
export default {
    data() {
        let data = {};
        data.loading = false;
        data.map = {zoom:16, center:[0, 0]};
        data.productTypes = this.modelDefault('productTypes');
        data.productCategories = this.modelDefault('productCategories');
        data.markers = [];
        data.business = {};
        return data;
    },

    methods: {
        eventMapUpdateBounds(bounds) {
            this.loading = true;
            if (eventMapUpdateBoundsTimeout) clearTimeout(eventMapUpdateBoundsTimeout);
            eventMapUpdateBoundsTimeout = setTimeout(() => {
                let params = {
                    latMin: bounds._southWest.lat,
                    latMax: bounds._northEast.lat,
                    lngMin: bounds._southWest.lng,
                    lngMax: bounds._northEast.lng,
                };
                this.$axios.get('/api/products/business-search', {params:params}).then((resp) => {
                    this.markers = resp.data;
                    this.loading = false;
                });
            }, 1000);
        },
    },

    mounted() {
        this.$geolocation().then((resp) => {
            this.map.center = [resp.lat, resp.lng];
        });
    },
};</script>

<style>
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