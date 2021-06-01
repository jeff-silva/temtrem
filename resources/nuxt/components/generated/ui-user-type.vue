<template><el-select v-model="props.value"
    @change="$emit('change', props.value)"
    @input="$emit('input', props.value)"
>
    <el-option value="">Nenhum</el-option>
     
    <el-option value="admin" label="Admin">Admin</el-option>
     
    <el-option value="user" label="User">User</el-option>
     
</el-select></template>

<script>
export default {
    props: {
        value: [Number, String, Array, Object],
    },

    data() {
        return {
            props: {...this.$props},
        };
    },

    watch: {
        $props: {deep:true, handler(value) {
            this.props = {...value};
        }},
    },
};
</script>