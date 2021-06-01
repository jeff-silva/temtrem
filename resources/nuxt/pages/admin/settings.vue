<template><div>
    <div class="row no-gutters">
        <div class="col-12 col-md-3 bg-white shadow-sm mb-3 mb-md-0">
            <div class="list-group list-group-flush">
                <nuxt-link :to="n.to" class="list-group-item" v-for="n in navs" :key="n.id">{{ n.title }}</nuxt-link>
            </div>
        </div>
        <div class="col-12 col-md-9 pl-md-3">
            <template v-for="n in navs" v-if="n.id==routeId">
                <div class="bg-light p-2">{{ n.subtitle }}</div>
                <nuxt-child class="bg-white p-2 pt-3 shadow-sm"></nuxt-child>
            </template>
            <div class="bg-white p-3 shadow-sm" v-if="!routeId">Selecione uma opção</div>
        </div>
    </div>
</div></template>

<script>
export default {
    middleware: 'auth',
    layout: 'admin',

    computed: {
        routeId() {
            let routes = this.$route.path.split('/').filter(item=>item);
            return routes[2]||false;
        }
    },

    data() {
        return {
            navs: [
                {
                    id: "general",
                    title: "Geral",
                    subtitle: "Configurações gerais",
                    to: "/admin/settings/general",
                },
                {
                    id: "email",
                    title: "E-mail",
                    subtitle: "Configurações de e-mail",
                    to: "/admin/settings/email",
                },
                // {
                //     id: "email-templates",
                //     title: "Templates",
                //     subtitle: "Templates de e-mail",
                //     to: "/admin/settings/email-templates",
                // },
                // {
                //     id: "email-sent",
                //     title: "E-mails enviados",
                //     subtitle: "Lista de e-mails enviados pelo sistema",
                //     to: "/admin/settings/email-sent",
                // },
            ],
        };
    },
}
</script>