<template><money v-model="props.value"
    class="form-control"
    @change.native="$emit('input', props.value)"
    v-bind="{
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        precision: 2,
    }"
></money></template>

<script>
import { Money } from 'v-money';
export default {
    name: "ui-money",
    components: {Money},

    props: {
        value: {default: 0},
    },

    watch: {
        $props: {deep:true, handler(value) {
            this.props = this.defaultProps(value);
        }},
    },

    methods: {
        defaultProps(props) {
            props = JSON.parse(JSON.stringify(props));
            props.value = isNaN(props.value)? 0: props.value;
            props.value = props.value||0;
            return props;
        },
    },

    data() {
        return {
            props: this.defaultProps(this.$props),
        };
    },
};</script>
