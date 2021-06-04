<template><div style="position:relative; height:100vh;">
    <l-map ref="map" v-bind="{zoom:13, center:[-19.9830486, -44.0079828]}"
        @update:bounds="updateBoundsHandler($event)"
        style="width:100%; height:100%;">
        <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <l-marker :lat-lng="[parseFloat(s.lat), parseFloat(s.lng)]" v-for="s in search.results.data" :key="s.id">
            <!-- <l-popup>Teste</l-popup> -->
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
            this.search.loading = true;
            let params = this.search.params;
            this.$axios.get('/api/temtrem-business/search', {params}).then(resp => {
                this.search.results = resp.data;
                this.search.loading = false;
            });
        },

        updateBoundsHandler(ev) {
            this.search.params.latMin = ev._southWest.lat;
            this.search.params.latMax = ev._northEast.lat;
            this.search.params.lngMin = ev._southWest.lng;
            this.search.params.lngMax = ev._northEast.lng;
            this.businessSearch();
        },
    },

    mounted() {
        // this.map.center = this.$refs.map.center;
    },
}
</script>