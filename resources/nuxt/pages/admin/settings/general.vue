<template><div>
    <ui-field label="Tempo de duração da autenticação">
        <div class="input-group">
            <input type="text" class="form-control" v-model="settings['jwt.ttl']">
            <div class="input-group-append"><div class="input-group-text">
                Segundos
            </div></div>
        </div>
    </ui-field>
</div></template>

<script>
export default {
    data() {
        return {
            settings: {
                'jwt.ttl': '',
            },
        };
    },

    methods: {
        loadAll() {
            this.$axios.get('/api/setting/load-all').then(resp => {
                this.settings = resp.data;
            });
        },
    },

    mounted() {
        this.loadAll();
    },
}
</script>