<template><div>
    <ui-form method="post" action="/api/temtrem-product/save" v-model="model"
        #default="{error, success, loading}"
        @success="successHandler($event)"
    >
        <div class="row">
            <div class="col-12 col-md-8">
                <ui-field label="Nome" :error="error.name">
                    <input type="text" class="form-control" v-model="model.name">
                </ui-field>

                <ui-field label="Preço" :error="error.price">
                    <ui-money v-model="model.price"></ui-money>
                </ui-field>

                <ui-field label="Imagem" :error="error.cover">
                    <ui-file v-model="model.cover"></ui-file>
                </ui-field>

                <ui-actions>
                    <nuxt-link class="btn" :to="`/admin/temtrem/business/${$route.params.id}/`">
                        Negócio
                    </nuxt-link>

                    <nuxt-link class="btn" :to="`/admin/temtrem/business/${$route.params.id}/product/`">
                        Produtos
                    </nuxt-link>

                    <button type="submit" class="btn btn-primary">
                        <i class="fas fa-save"></i> Salvar
                    </button>
                </ui-actions>
            </div>

            <div class="col-12 col-md-4">
                <temtrem-business-profile ref="businessProfile"
                    v-model="business" class="bg-white shadow-sm"
                ></temtrem-business-profile>
            </div>
        </div>
    </ui-form>
</div></template>

<script>
export default {
    middleware: 'auth',
    layout: 'admin',

    data() {
        return {
            model: {},
            business: {},
        };
    },

    methods: {
        successHandler(prod) {
            this.$swal('', 'Produto salvo', 'success');
            this.$router.push(`/admin/temtrem/business/${this.$route.params.id}/product/${prod.id}`);
            this.$refs.businessProfile.loadProducts();
        },

        loadProduct() {
            if (!+this.$route.params.productId) return;
            this.$axios.get(`/api/temtrem-product/find/${this.$route.params.productId}`).then(resp => {
                this.model = resp.data;
            });

            this.$axios.get(`/api/temtrem-business/find/${this.$route.params.id}`).then(resp => {
                this.business = resp.data;
            });
        },
    },

    mounted() {
        this.model.business_id = this.$route.params.id;
        this.loadProduct();
    },
}
</script>