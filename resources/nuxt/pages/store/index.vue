<template><div>
    <div class='row'>
        <div class='col-12 col-md-8'>
            <business-search v-model="products" ref="business"
            :search-inside-bounds="false"
            style="height:50vh;" >
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
                            <a href="javascript:;" class="btn btn-primary btn-block btn-sm m-0 mt-2" @click="product=marker">
                                Editar
                            </a>
                        </l-popup>
                    </l-marker>
                </template>
            </business-search>
        </div>

        <div class='col-12 col-md-4' style="max-height:50vh; overflow:auto;">
            <table class='table table-borderless table-striped table-sm'>
                <tbody>
                    <tr v-for="p in products">
                        <td><a href='javascript:;' @click="$refs.business.moveToMarker(p)">{{ p.name }}</a></td>
                        <td>
                            <div class='btn-group'>
                                <a href='javascript:;' class='btn btn-primary btn-sm' @click="product=p">
                                    <i class='fa fa-fw fa-pencil'></i>
                                </a>
                                
                                <a href='javascript:;' class='btn btn-danger btn-sm' @click="p.remove().then($refs.business.getBusiness)">
                                    <i class='fa fa-fw fa-remove'></i>
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <ui-modal v-model="product" tag="form" @submit="product.save().then(productSaved)">
        <template #header>{{ product.name || 'Novo produto' }}</template>

        <template #body>
            <ui-field type="text" v-model="product.name" label="Nome"></ui-field>
            <ui-field type="textarea" v-model="product.description" label="Descrição"></ui-field>
            <ui-field type="text" v-model="product.category" label="Categoria">
                <template #field>
                    <business-category v-model="product.category"></business-category>
                </template>
            </ui-field>
            <ui-field type="text" v-model="product.type" label="Tipo">
                <template #field>
                    <business-type v-model="product.type"></business-type>
                </template>
            </ui-field>
        </template>

        <template #footer>
            <button type='submit' class='btn btn-primary'>
                <i class='fa fa-fw fa-save'></i> Salvar
            </button>
        </template>
    </ui-modal>
</div></template>

<script>
// import Business from '@/models/Business';

let businessSaveTimeout;
export default {
    layout: 'admin',
    middleware: 'auth',

    methods: {
        businessSave(business) {
            if (businessSaveTimeout) clearTimeout(businessSaveTimeout);
            businessSaveTimeout = setTimeout(() => {
                this.$axios.post('/api/business/save', business).then((resp) => {
                    this.product = false;
                    this.$swalSuccess('Dados salvos');
                });
            }, 500);
        },

        productSaved() {
            this.product = false;
            this.$swalSuccess('Dados salvos');
            this.$refs.business.getBusiness();
        },
    },

    data() {
        return {
            product: false,
            products: [],
        };
    },
};</script>