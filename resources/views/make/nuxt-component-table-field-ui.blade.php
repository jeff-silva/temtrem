<template><el-select v-model="props.value"
    @change="$emit('change', props.value)"
    @input="$emit('input', props.value)"
>
    <el-option value="">Nenhum</el-option>
    @foreach($col->InputOptions as $value=>$label) 
    <el-option value="{{ $value }}" label="{{ $label }}">{{ $label }}</el-option>
    @endforeach 
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