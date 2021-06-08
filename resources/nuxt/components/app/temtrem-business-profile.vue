<template><div style="overflow:auto;">
    <img :src="value.cover.url" alt="" v-if="value.cover && value.cover.url" style="width:100%; height:150px; object-fit:cover;">
    <div class="p-3">
        <h1>{{ value.name }}</h1>
        <div v-html="value.description"></div>
        <small class="text-muted d-block" v-if="value.route && value.district && value.city && value.state">
            <i class="fas fa-map-marker"></i> &nbsp;
            {{ value.route }} {{ value.number }}, {{ value.district }},
            {{ value.city }} {{ value.state }}
        </small>
        
        <div class="mb-4"></div>

        <div class="mb-4" v-for="g in groupsProducts">
            <template v-if="g.products.length>0">
                <div><small class="font-weight-bold">{{ g.name }}</small></div>
                <div class="mb-2" v-for="p in g.products">
                    <div class="d-flex align-items-center bg-white shadow-sm mb-2">
                        <div class="p-1" v-if="p.cover && p.cover.url">
                            <img :src="p.cover.url" alt="" style="width:50px; height:50px; object-fit:cover;">
                        </div>
                        <div class="flex-grow-2 p-3">
                            <div class="font-weight-bold">{{ p.name }}</div>
                            <small class="text-muted">{{ p.price }} {{ p.unity||'Unidade' }}</small>
                        </div>
                    </div>
                </div>
            </template>
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
                    business_id: this.value.id,
                    perpage: 99,
                },
                results: {data:[]},
            },
        };
    },

    computed: {
        groupsProducts() {
            let products = JSON.parse(JSON.stringify(this.products.results.data));
            let groups = JSON.parse(JSON.stringify(this.value.groups));

            groups = groups.map(group => {
                group.products = products.filter(prod => {
                    return group.products.indexOf(prod.id)>=0;
                });
                return group;
            });

            if (groups.length==0) {
                groups.push({
                    id: "all",
                    name: "Todos",
                    products: products,
                });
            }

            return groups;
        },
    },

    methods: {
        refresh() {
            this.loadProducts();
        },

        loadProducts() {
            this.products.loading = true;

            let params = this.products.params;
            params.business_id = this.value.id;
            this.$axios.get(`/api/temtrem-product/search`, {params}).then(resp => {
                this.products.loading = false;
                this.products.results = resp.data;
            });
        },
    },

    mounted() {
        this.refresh();
    },
}
</script>