<template><div>
    <div class="row">
        <div class="col-12 col-md-6">
            <div class="list-group">
                <a href="javascript:;" class="list-group-item" v-for="p in products" @click="product=p;">
                    {{ p.name || 'Sem nome' }}
                </a>
            </div>
            <br>
        </div>
        
        <div class="col-12 col-md-6">
            <ui-product v-model="product" @saved="productsSearch()"></ui-product>
        </div>
    </div>
</div></template>

<script>export default {
    layout: 'admin',
    middleware: 'auth',

    methods: {
        productsSearch() {
            this.$axios.get('/api/products/search').then((resp) => {
                this.products = resp.data;
            });
        },
    },

    data() {
        return {
            product: {},
            products: [],
        };
    },

    mounted() {
        this.productsSearch();
    },
};</script>