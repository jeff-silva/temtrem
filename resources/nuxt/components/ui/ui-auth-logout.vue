<template><a href="javascript:;" @click="clickHandler()">
    <slot></slot>
</a></template>

<script>
export default {
    props: {
        redirect: {default:false},
    },

    methods: {
        clickHandler() {
            this.$auth.logout().then(resp => {
                this.$emit('success');
                if (this.redirect) {
                    this.$router.push(this.redirect);
                }
            });
        },
    },
}
</script>