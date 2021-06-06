<template><div>
    <ui-table v-bind="search.results">
        <template #header>
            <th>Nome</th>
            <th>Preço</th>
        </template>

        <template #item="{item}">
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
        </template>

        <template #actions="{item}">
            <nuxt-link class="btn btn-primary" :to="`/admin/temtrem/business/${$route.params.id}/product/${item.id}`">
                <i class="fas fa-edit"></i>
            </nuxt-link>
        </template>
    </ui-table>

    <ui-actions>
        <nuxt-link class="btn" :to="`/admin/temtrem/business/${$route.params.id}/`">
            Negócio
        </nuxt-link>

        <nuxt-link class="btn btn-primary" :to="`/admin/temtrem/business/${$route.params.id}/product/0`">
            Novo produto
        </nuxt-link>
    </ui-actions>
</div></template>

<script>
export default {
    middleware: 'auth',
    layout: 'admin',

    data() {
        return {
            search: {
                loading: false,
                params: {
                    q: '',
                    business_id: this.$route.params.id,
                },
                results: {data:[]},
            },
        };
    },

    methods: {
        loadResults() {
            this.search.loading = true;
            let params = this.search.params;
            this.$axios.get('/api/temtrem-product/search', {params}).then(resp => {
                this.search.loading = false;
                this.search.results = resp.data;
            });
        },
    },

    mounted() {
        this.loadResults();
    },
}
</script>