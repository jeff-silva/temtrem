<template><div>
    <ui-form action="/api/temtrem-business/save" method="post" v-model="model"
        @success="successHandler($event)"
        #default="{loading, error}"
    >
        <ui-field label="Nome" :error="error.name">
            <input type="text" class="form-control" v-model="model.name">
        </ui-field>

        <ui-field label="Proprietário" :error="error.user_id">
            <ui-user v-model="model.user_id"></ui-user>
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