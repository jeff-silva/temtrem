<template><input class="form-control"
    v-model="props.value" v-bind="props"
    @input="$emit('input', props.value)"
    @keyup="$emit('keyup', props.value)"
    @change="$emit('change', props.value)"
></template>

<script>
export default {
    props: {
        value: String,
        id: String,
        name: String,
        placeholder: String,
        title: String,
    },
    
    watch: {
        $props: {deep:true, handler(value) {
            this.props = Object.assign({}, this.$props);
        }},
    },

    data() {
        return {
            props: Object.assign({}, this.props),
        };
    },
}
</script>