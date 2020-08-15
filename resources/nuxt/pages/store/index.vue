<template><div>
    <div class="row">
        <div class="col-6">
            <ui-product-categories></ui-product-categories>
        </div>
        <div class="col-6">
            <ui-product-categories value="gardner"></ui-product-categories>
        </div>
    </div>

    <!--
    <button type="button" class="btn btn-primary" @click="listCategories()">Listar</button>
    <div class="row mt-3">
        <div class="col-12 col-sm-6 col-md-4" v-for="c in categories" :key="c.slug">
            <div class="row no-gutters align-items-center bg-white mb-3 shadow-sm">
                <div class="col-4 p-2">
                    <div :style="`height:85px; background:url(${c.photo}) center center no-repeat; background-size:cover;`"></div>
                </div>
                <div class="col-8 px-3">
                    <div><strong>{{ c.name }}</strong></div>
                    <div><small class="text-muted" style="line-height:-5px!important;">{{ c.description }}</small></div>
                </div>
            </div>
        </div>
    </div>
    -->
</div></template>

<script>export default {
    layout: 'admin',
    middleware: 'auth',

    methods: {
        listCategories() {
            this.$axios.get('/api/product/categories').then((resp) => {
                this.categories = resp.data;
            });
        },
    },

    data() {
        return {
            categories: [],
        };
    },

    mounted() {
        // this.listCategories();
        // if (this.listCategoriesInterval) clearInterval(this.listCategoriesInterval);
        // this.listCategoriesInterval = setInterval(this.listCategories, 60000);
    },
};</script>