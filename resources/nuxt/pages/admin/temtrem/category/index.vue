<template><div class="admin-temtrem-category-index">

    <ui-table v-bind.sync="results">
        <template #header>
            <th width="60px"></th>
            <th>Nome</th>
            <th width="300px">Alterado em</th>
        </template>

        <template #item="{item}">
            <td :style="`border-left:solid 10px ${item.color};`"><img :src="item.icon.url" alt="" width="100%" v-if="item.icon.url"></td>
            <td>{{ item.name }}<br><small class="text-muted" v-html="item.description"></small></td>
            <td><ui-timeago v-model="item.updated_at"></ui-timeago></td>
        </template>

        <template #actions="{item}">
            <nuxt-link :to="`/admin/temtrem/category/${item.id}`" class="btn btn-primary">
                <i class="fa fa-edit"></i>
            </nuxt-link>

            <button type="button" class="btn btn-danger">
                <i class="fas fa-times"></i>
            </button>
        </template>
    </ui-table>
    
    <ui-actions>
        <nuxt-link to="/admin/temtrem/category/0" class="btn btn-primary">
            Nova categoria
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
        searchCategory() {
            this.$axios.get('/api/temtrem-category/search').then(resp => {
                this.results = resp.data;
            });
        },
    },

    mounted() {
        this.searchCategory();
    },
}
</script>

<style>
.admin-temtrem-category-index p {padding:0px!important; margin:0px!important;}
</style>