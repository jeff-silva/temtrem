<template><div>
    <business-search style="height:50vh;">
        <template #map="{marker, setPlace}">
            <l-marker :lat-lng="[marker.lat, marker.lng]" :draggable="true" @dragend="setPlace($event, marker).then(businessSave)">
                <l-icon v-if="marker.category_photo">
                    <img :src="marker.category_photo" alt="" style="width:35px; height:35px; animation-duration:200ms;" class="animate__animated animate__flipInX">
                </l-icon>
                <l-popup class="bg-white animate__animated animate__flipInX" style="width:300px; border-radius:5px; overflow:hidden;">
                    <div class="row no-gutters">
                        <div class="col-6 p-2">
                            <div class="mb-1 font-weight-bold text-uppercase">{{ marker.name }}</div>
                            <div class="mb-1 font-weight-bold">{{ marker.category_name }}</div>
                            <div class="mb-2 text-muted" style="max-height:120px; overflow:auto;">{{ marker.description }}</div>
                        </div>
                        <div class="col-6 p-2">
                            <img :src="marker.photo||marker.category_photo" alt="" style="width:100%;" class="">
                        </div>
                    </div>
                    <nuxt-link :to="`/business/${marker.id}`" class="btn btn-primary btn-block btn-sm m-0 mt-2">
                        Detalhes
                    </nuxt-link>
                </l-popup>
            </l-marker>
        </template>
    </business-search>

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

<script>
let businessSaveTimeout;
export default {
    layout: 'admin',
    middleware: 'auth',

    methods: {
        businessSave(business) {
            if (businessSaveTimeout) clearTimeout(businessSaveTimeout);
            businessSaveTimeout = setTimeout(() => {
                this.$axios.post('/api/business/save', business).then((resp) => {
                    console.log('businessSaved', resp);
                });
            }, 500);
        },
    },

    data() {
        return {
            product: {},
            products: [],
        };
    },

    mounted() {
        // this.productsSearch();
    },
};</script>