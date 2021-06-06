<template><div>
    <img :src="value.cover.url" alt="" v-if="value.cover && value.cover.url" style="width:100%; height:150px; object-fit:cover;">
    <div class="p-3">
        <h1>{{ value.name }}</h1>
        <div v-html="value.description"></div>
        <small class="text-muted d-block">
            <i class="fas fa-map-marker"></i> &nbsp;
            {{ value.route }} {{ value.number }}, {{ value.district }},
            {{ value.city }} {{ value.state }},
        </small>

        <div class="mt-3">
            <div v-for="p in products.results.data">
                <div class="d-flex align-items-center bg-white shadow-sm mb-2">
                    <div class="p-1" v-if="p.cover && p.cover.url">
                        <img :src="p.cover.url" alt="" style="width:50px; height:50px; object-fit:cover;">
                    </div>
                    <div class="flex-grow-2 p-3">
                        <div class="font-weight-bold">{{ p.name }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div></template>

<script>
export default {
    props: {
        value: Object,
    },

    data() {
        return {
            products: {
                loading: false,
                params: {
                    business_id: this.value.business_id,
                    perpage: 99,
                },
                results: {data:[]},
            },
        };
    },

    methods: {
        loadProducts() {
            this.products.loading = true;
            let params = this.products.params;
            this.$axios.get(`/api/temtrem-product/search`, {params}).then(resp => {
                this.products.loading = false;
                this.products.results = resp.data;
            });
        },
    },

    mounted() {
        this.loadProducts();
    },
}
</script>