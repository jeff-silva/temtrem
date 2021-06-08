<template><div>

    <ui-table v-bind.sync="results">
        <template #header>
            <th width="200px">Nome</th>
            <th>Proprietário</th>
            <th>Categoria</th>
            <th width="400px">Localização</th>
            <th width="300px">Alterado em</th>
        </template>

        <template #item="{item}">
            <td>{{ item.name }}</td>
            <td>{{ item.user? item.user.name: 'Ninguém' }}</td>
            <td><div v-if="item.temtrem_category" style="white-space:nowrap; overflow:hidden;">
                <div :style="`display:inline-block; width:10px; height:10px; border-radius:50%; background:${item.temtrem_category.color};`"></div>
                {{ item.temtrem_category.name }}
            </div></td>
            <td>{{ item.route }}, {{ item.district }}, {{ item.city }}</td>
            <td><ui-timeago v-model="item.updated_at"></ui-timeago></td>
        </template>

        <template #actions="{item}">
            <nuxt-link :to="`/admin/temtrem/business/${item.id}`" class="btn btn-primary">
                <i class="fa fa-edit"></i>
            </nuxt-link>
            
            <button type="button" class="btn btn-danger">
                <i class="fas fa-times"></i>
            </button>
        </template>
    </ui-table>
    
    <ui-actions>
        <nuxt-link to="/admin/temtrem/business/0" class="btn btn-primary">
            Novo negócio
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
            let params = this.params;
            this.$axios.get('/api/temtrem-business/search', {params}).then(resp => {
                this.results = resp.data;
            });
        },
    },

    mounted() {
        this.searchBusiness();
    },
}
</script>