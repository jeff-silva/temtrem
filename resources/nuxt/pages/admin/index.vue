<template><div>
    Hello
</div></template>

<script>
export default {
    middleware: 'auth',
    layout: 'admin',

    head() {
        return {
            title: "Dashboard",
        };
    },

    data() {
        return {};
    },
}
</script>