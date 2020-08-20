<template><div v-if="$route.params.id">
    <div class="container py-3">
        <h2 class="h4">{{ props.value.name }}</h2>

        <div class="mb-2 text-muted h6">
            <span v-if="props.value.route">{{ props.value.route }}</span>
            <span v-if="props.value.number">, Nº {{ props.value.number }}</span>
            <span v-if="props.value.district">, bairro {{ props.value.district }}</span>
            <span v-if="props.value.city"><br>{{ props.value.city }}</span>
            <span v-if="props.value.city">/{{ props.value.state }}</span>
        </div>

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