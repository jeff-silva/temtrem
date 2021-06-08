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
            <l-icon :icon-size="[60, 60]" :icon-anchor="[30, 60]"
                :icon-url="iconSvgUrl(s)" />
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

        iconSvgUrl(business) {
            // return '/assets/map/marker.svg';
            let color = ((business.temtrem_category? business.temtrem_category.color: '#ff0000') || '#ff0000').replace('#', '%23');
            return `data:image/svg+xml,%3Csvg viewBox='-56 0 464 464' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m352 424c0-22.089844-78.796875-40-176-40s-176 17.910156-176 40 78.796875 40 176 40 176-17.910156 176-40zm0 0' fill='%23adabac'/%3E%3Cpath d='m160 264h32v152c0 8.835938-7.164062 16-16 16s-16-7.164062-16-16zm0 0' fill='%23494342'/%3E%3Cpath d='m312 136c0 75.109375-60.890625 136-136 136s-136-60.890625-136-136 60.890625-136 136-136 136 60.890625 136 136zm0 0' fill='${color}'/%3E%3Cpath d='m144 208c-4.246094.007812-8.316406-1.679688-11.3125-4.6875l-48-48 22.625-22.625 36.6875 36.679688 100.6875-100.679688 22.625 22.625-112 112c-2.996094 3.007812-7.066406 4.695312-11.3125 4.6875zm0 0' fill='%23ffffff'/%3E%3C/svg%3E`;
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