<template><div>
    <ui-form action="/api/temtrem-business/save" method="post" v-model="model"
        @success="successHandler($event)"
        #default="{loading, error}"
    >

        <div class="row">
            <div class="col-12 col-md-8">
                <el-tabs value="primary" type="border-card">
                    <el-tab-pane label="Dados do negócio" name="primary">
                        <ui-field label="Nome" :error="error.name">
                            <input type="text" class="form-control" v-model="model.name">
                        </ui-field>
                        
                        <ui-field label="Proprietário" :error="error.user_id" v-if="$auth.user.type=='admin'">
                            <ui-user v-model="model.user_id"></ui-user>
                        </ui-field>

                        <ui-field label="Categoria" :error="error.category_id">
                            <ui-temtrem-category v-model="model.category_id"></ui-temtrem-category>
                        </ui-field>

                        <ui-field label="Descrição" :error="error.description">
                            <ui-html v-model="model.description"></ui-html>
                        </ui-field>

                        <ui-field label="Capa" :error="error.cover">
                            <ui-file v-model="model.cover"></ui-file>
                        </ui-field>
                    </el-tab-pane>

                    <el-tab-pane label="Endereço" name="second">
                        <ui-field label="Endereço">
                            <el-switch v-model="model.nomadic"
                                class="mb-3"
                                :active-value="1" :inactive-value="0"
                                active-text="Comério itinerante"
                            ></el-switch>

                            <div v-if="model.nomadic==1">
                                Este comércio é itinerante. Sua localização será atualizada constantemente <br>
                                de acordo com a localização do dispositivo.
                            </div>

                            <ui-address v-model="model" v-if="model.nomadic!=1"></ui-address>
                        </ui-field>
                    </el-tab-pane>
                </el-tabs>
            </div>

            <div class="col-12 col-md-4">
                <temtrem-business-profile v-model="model" class="bg-white shadow-sm"></temtrem-business-profile>
            </div>
        </div>



        <ui-actions class="mt-5">
            <nuxt-link :to="`/admin/temtrem/business/${model.id}/product`" class="btn" v-if="model.id">
                Produtos
            </nuxt-link>

            <button type="submit" class="btn btn-primary">
                <span v-if="loading" v-html="loading"></span>
                <i v-else class="fas fa-fw fa-save"></i> Salvar
            </button>
        </ui-actions>
    </ui-form>
</div></template>

<script>
export default {
    middleware: 'auth',
    layout: 'admin',

    data() {
        return {
            model: {},
        };
    },

    methods: {
        successHandler(model) {
            this.$swal('', 'Negócio salva', 'success');
            this.$router.push(`/admin/temtrem/business/${model.id}`);
        },

        modelLoad() {
            if (! +this.$route.params.id) return;
            this.$axios.get(`/api/temtrem-business/find/${this.$route.params.id}`).then(resp => {
                this.model = resp.data;
            });
        },
    },

    mounted() {
        this.modelLoad();
    },
}
</script>