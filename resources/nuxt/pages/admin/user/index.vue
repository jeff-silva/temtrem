<template><div>

    <ui-table v-bind.sync="results">
        <template #header>
            <th>Nome</th>
            <th width="300px">Alterado em</th>
        </template>

        <template #item="{item}">
            <td>{{ item.name }}</td>
            <td><ui-timeago v-model="item.updated_at"></ui-timeago></td>
        </template>

        <template #actions="{item}">
            <nuxt-link :to="`/admin/user/${item.id}`" class="btn btn-primary">
                <i class="fa fa-edit"></i>
            </nuxt-link>

            <button type="button" class="btn btn-danger">
                <i class="fas fa-times"></i>
            </button>
        </template>
    </ui-table>
    
    <ui-actions>
        <nuxt-link to="/admin/user/0" class="btn btn-primary">
            Novo usuário
        </nuxt-link>
    </ui-actions>
</div></template>

<script>
export default {
    middleware: 'auth',
    layout: 'admin',

    data() {
        return {
            params: {q:''},
            results: {data:[]},
        };
    },

    methods: {
        searchBusiness() {
            this.$axios.get('/api/user/search').then(resp => {
                this.results = resp.data;
            });
        },
    },

    mounted() {
        this.searchBusiness();
    },
}
</script>