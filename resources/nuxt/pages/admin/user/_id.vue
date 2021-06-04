<template><div>
    <ui-form action="/api/user/save" method="post"
        v-model="model" v-loading="loading"
        @success="successHandler($event)"
        #default="{loading, error}"
    >
        <ui-field label="Nome" :error="error.name">
            <input type="text" class="form-control" v-model="model.name">
        </ui-field>

        <ui-field label="E-mail" :error="error.email">
            <input type="text" class="form-control" v-model="model.email">
        </ui-field>

        <ui-field label="Senha" :error="error.password">
            <div class="row">
                <div class="col-6">
                    <ui-password v-model="model.password"></ui-password>
                </div>
                <div class="col-6">
                    <ui-password v-model="model.password_confirmation" :meter="false"></ui-password>
                </div>
            </div>
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
            loading: false,
            model: {},
        };
    },

    methods: {
        successHandler(model) {
            this.$swal('', 'Negócio salva', 'success');
            this.$router.push(`/admin/user/${model.id}`);
        },

        modelLoad() {
            if (! +this.$route.params.id) return;
            this.loading= true;
            this.$axios.get(`/api/user/find/${this.$route.params.id}`).then(resp => {
                delete resp.data.password;
                this.model = resp.data;
                this.loading= false;
            });
        },
    },

    mounted() {
        this.modelLoad();
    },
}
</script>