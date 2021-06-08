<template><div>
    <ui-form action="/api/temtrem-category/save" method="post" v-model="model"
        @success="successHandler($event)"
        #default="{loading, error}"
    >
        <ui-field label="Nome" :error="error.name">
            <input type="text" class="form-control" v-model="model.name">
        </ui-field>

        <ui-field label="Cor">
            <div class="input-group form-control p-0">
                <div class="input-group-prepend"><div class="input-group-text p-0 border-0 bg-transparent">
                    <el-color-picker v-model="model.color"></el-color-picker>
                </div></div>
                <input type="text" class="form-control border-0" v-model="model.color">
            </div>
        </ui-field>

        <ui-field label="Ícone">
            <ui-file v-model="model.icon"></ui-file>
        </ui-field>

        <ui-field label="Descrição" :error="error.description">
            <ui-html v-model="model.description"></ui-html>
        </ui-field>

        <ui-actions>
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
            this.$router.push(`/admin/temtrem/category/${model.id}`);
        },

        modelLoad() {
            if (! +this.$route.params.id) return;
            this.$axios.get(`/api/temtrem-category/find/${this.$route.params.id}`).then(resp => {
                this.model = resp.data;
            });
        },
    },

    mounted() {
        this.modelLoad();
    },
}
</script>