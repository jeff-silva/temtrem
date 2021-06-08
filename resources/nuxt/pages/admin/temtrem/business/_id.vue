<template><div>
    <ui-form action="/api/temtrem-business/save" method="post" v-model="model"
        @success="successHandler($event)"
        #default="{loading, error}"
    >

        <div class="row">
            <div class="col-12 col-md-8">
                <el-tabs v-model="tab" type="border-card">
                    <el-tab-pane name="info" label="Dados do negócio">
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

                        <ui-field label="Whatsapp" :error="error.whatsapp">
                            <ui-phone v-model="model.whatsapp"></ui-phone>
                        </ui-field>
                    </el-tab-pane>

                    <el-tab-pane name="address" label="Endereço">
                        <el-switch v-model="model.nomadic"
                            class="mb-3"
                            :active-value="1" :inactive-value="0"
                            active-text="Comério itinerante"
                        ></el-switch>

                        <div v-if="model.nomadic==1">
                            Este comércio é itinerante. Sua localização será atualizada constantemente <br>
                            de acordo com a localização do dispositivo.
                        </div>

                        <ui-address v-model="model" v-if="model.nomadic!=1 && tab=='address'"></ui-address>
                    </el-tab-pane>

                    <el-tab-pane name="products" label="Produtos" v-if="model.id">
                        <ui-table v-bind="products.results">
                            <template #header>
                                <th>Nome</th>
                                <th>Preço</th>
                            </template>

                            <template #item="{item}">
                                <td>{{ item.name }}</td>
                                <td>{{ item.price }} {{ item.unity }}</td>
                            </template>

                            <template #actions="{item}">
                                <a href="javascript:;" class="btn btn-primary" @click="product=item">
                                    <i class="fas fa-edit"></i>
                                </a>
                            </template>
                        </ui-table>

                        <div class="text-end mt-4">
                            <button type="button" class="btn btn-primary" @click="product={business_id:$route.params.id}">
                                <i class="fas fa-plus"></i> Criar produto
                            </button>
                        </div>

                        <ui-modal v-model="product">
                            <template #header>Dados de produto</template>
                            <template #body>
                                <ui-field label="Nome">
                                    <input type="text" class="form-control" v-model="product.name">
                                </ui-field>

                                <ui-field label="Valor">
                                    <div class="input-group">
                                        <ui-money v-model="product.price"></ui-money>
                                        <input type="text" class="form-control" v-model="product.unity">
                                    </div>
                                </ui-field>

                                <ui-field label="Imagem">
                                    <ui-file v-model="product.cover"></ui-file>
                                </ui-field>
                            </template>
                            <template #footer>
                                <button type="button" class="btn" @click="product=false">
                                    <i class="fas fa-times"></i> Cancelar
                                </button>

                                <button type="button" class="btn btn-primary" @click="productSave()">
                                    <i class="fas fa-save"></i> Salvar
                                </button>
                            </template>
                        </ui-modal>
                    </el-tab-pane>

                    <el-tab-pane name="groups" label="Grupos" v-if="model.id">
                        <button type="button" class="btn btn-primary d-block" @click="businessGroupAdd()">
                            Criar grupo de produtos
                        </button>
                        <div class="mb-3"></div>

                        <ui-draggable v-model="model.groups" handle="._handle">
                            <div class="input-group form-control p-0 mb-2" v-for="g in model.groups" :key="g.id">
                                <div class="input-group-prepend _handle" style="cursor:move;">
                                    <div class="input-group-text border-0 bg-transparent">:::</div>
                                </div>

                                <input type="text" class="form-control border-0" v-model="g.name">
                                
                                <el-select class="form-control border-0" v-model="g.products" multiple filterable placeholder="Select">
                                    <el-option
                                        v-for="p in products.results.data"
                                        :key="p.id"
                                        :label="p.name"
                                        :value="p.id"
                                    >{{ p.name }}</el-option>
                                </el-select>
    
                                <div class="input-group-append"><div class="input-group-btn">
                                    <button type="button" class="btn" @click="businessGroupRemove(g)">
                                        <i class="fas fa-times text-danger"></i>
                                    </button>
                                </div></div>
                            </div>
                        </ui-draggable>


                        <div class="mt-3" v-if="ungroupedProducts.length>0">
                            <div>Os produtos abaixo não estão agrupados</div>
                            <div v-for="p in ungroupedProducts">&bullet; {{ p.name }}</div>
                        </div>
                    </el-tab-pane>
                </el-tabs>

                <ui-actions class="mt-4">
                    <button type="submit" class="btn btn-primary">
                        <span v-if="loading" v-html="loading"></span>
                        <i v-else class="fas fa-fw fa-save"></i> Salvar
                    </button>
                </ui-actions>
            </div>

            <div class="col-12 col-md-4" v-if="model.id">
                <temtrem-business-profile v-model="model" 
                    class="bg-white shadow-sm"
                    ref="business"
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
            tab: "info",
            model: {},
            product: false,
            products: {
                loading: false,
                params: {
                    q: '',
                    business_id: this.$route.params.id,
                },
                results: {data:[]},
            },
        };
    },

    computed: {
        ungroupedProducts() {
            let products = JSON.parse(JSON.stringify(this.products.results.data));

            products = products.filter(prod => {
                prod._count = prod._count||0;

                this.model.groups.forEach(group => {
                    if (group.products.indexOf(prod.id)>=0) {
                        prod._count++;
                    }
                });

                return prod._count==0;
            });

            return products;
        },
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
                this.productSearch();
                this.$refs.business.refresh();
            });
        },

        productSearch() {
            this.products.params.business_id = this.$route.params.id||false;
            this.products.loading = true;
            let params = this.products.params;
            this.$axios.get('/api/temtrem-product/search', {params}).then(resp => {
                this.products.loading = false;
                this.products.results = resp.data;
            });
        },

        productSave() {
            this.$axios.post('/api/temtrem-product/save', this.product).then(resp => {
                this.product = false;
                this.$swal('', 'Produto salvo', 'success');
                this.modelLoad();
                this.$refs.business.refresh();
            });
        },

        businessGroupAdd() {
            this.model.groups.push({
                id: (`g-${this.model.id}-`+Math.round(Math.random()*99999)),
                name: "",
                products: [],
            });
        },

        businessGroupRemove(group) {
            this.$swal('Confirmar', 'Remover esta categoria? (produtos não serão removidos)').then(resp => {
                if (!resp.isConfirmed) return;
                let index = this.model.groups.indexOf(group);
                this.model.groups.splice(index, 1);
            });
        },
    },

    mounted() {
        this.modelLoad();
    },
}
</script>