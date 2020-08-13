<template><div>
    <fieldset><legend>Endereços</legend>
        <ui-addresses reference="users" :ref-id="$store.state.auth.user.id"></ui-addresses>
    </fieldset>
</div></template>

<script>
import User from '@/models/User';

export default {
    layout: 'admin',
    middleware: 'auth',

    components: {
        "ui-addresses": () => import("@/components/ui/ui-addresses"),
    },

    methods: {
        // 
    },

    data() {
        return {
            addresses: {},
        };
    },
};</script>