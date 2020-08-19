<template><div v-if="$route.params.id">
    <div class="container">
        <h2 class="h4">{{ props.value.name }}</h2>
        <div>{{ props.value.description }}</div>

        <div class="text-right">
            <nuxt-link class="btn btn-sm btn-primary" to="/business/">Voltar</nuxt-link>
        </div>
    </div>
</div></template>

<script>
export default {
    props: {
        value: {default:()=>({})},
    },

    watch: {
        $props: {
            deep: true,
            handler(value) {
                this.props = Object.assign({}, value);
            },
        },
    },

    data() {
        let data = {};
        data.props = Object.assign({}, this.$props);
        return data;
    },

    mounted() {
        // 
    },
};</script>