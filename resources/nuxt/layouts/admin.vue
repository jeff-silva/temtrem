<template><div class="layout-admin">

    <el-drawer direction="ltr" :visible.sync="drawer" size="300px">
        <div style="height:100vh; overflow:auto;">
            <ui-nav v-model="navItems"></ui-nav>
        </div>
    </el-drawer>

    <div class="d-flex">
        <div class="bg-white shadow d-none d-lg-block" style="position:relative; z-index:10; min-width:250px; height:100vh; overflow:auto;">
            <div class="bg-light p-3" v-if="$auth.user">
                <div class="font-weight-bold text-uppercase">{{ $store.state.auth.user.name }}</div>
                <small class="d-block text-muted">{{ $store.state.auth.user.email }}</small>
            </div>
            <ui-nav v-model="navItems"></ui-nav>
        </div>

        <div class="flex-grow-1 bg-light" style="height:100vh; overflow:auto;">
            <div class="p-3 bg-white shadow d-flex align-items-center">
                <div class="d-lg-none">
                    <a href="javascript:;" class="btn" @click="drawer=true">
                        <i class="fas fa-bars"></i>
                    </a>
                </div>

                <div class="flex-grow-1"></div>
                
                <div v-if="$auth.user">
                    {{ $store.state.auth.user.name }}
                </div>
            </div>

            <div class="p-3 pt-4">
                <nuxt></nuxt>
            </div>
        </div>
    </div>
</div></template>


<script>
export default {
    data() {
        return {
            drawer: false,
        };
    },

    computed: {
        navItems() {
            let user = this.$auth.user||false;
            let navItems = [];

            if (user) {
                navItems.push({
                    label: "Dashboard",
                    icon: "fas fa-poll",
                    to: "/admin",
                });
    
                // Admin
                if (user.type=='admin') {
                    navItems.push({
                        label: "Sistema",
                        icon: "fas fa-cog",
                        to: "/admin",
                        children: [
                            {
                                label: "Usuários",
                                to: "/admin/user",
                            },
                            {
                                label: "Configurações",
                                to: "/admin/settings",
                            },
                        ],
                    });

                    navItems.push({
                        label: "Temtrem",
                        icon: "fas fa-cog",
                        to: "",
                        children: [
                            {
                                label: "Lojas",
                                to: "/admin/temtrem/business/admin",
                            },
                            {
                                label: "Categorias",
                                to: "/admin/temtrem/category",
                            },
                            {
                                label: "Configurações",
                                to: "/admin/temtrem/settings",
                            },
                        ],
                    });
                }

                // Simple user
                else {
                    // 
                }

                navItems.push({
                    label: "Meus negócios",
                    icon: "fas fa-cog",
                    to: "/admin/temtrem/business",
                });
            }

            navItems.push({
                label: "Site",
                icon: "fas fa-globe",
                to: "/",
            });

            navItems.push({
                label: "Sair",
                icon: "fas fa-power-off",
                to: "",
                click: () => {
                    this.$auth.logout().then(resp => {
                        this.$router.push('/');
                    });
                },
            });

            return navItems;
        },
    },

    methods: {
        logout() {
            this.$auth.logout().then((resp) => {
                this.$router.push({path: '/auth/'});
            });
        },
    },
};</script>


<style module>
@import url('https://fonts.googleapis.com/css?family=Exo');
* {font-family: 'Exo', sans-serif;}

/* Custom scrollbar */
*::-webkit-scrollbar {width:15px; height:15px;}
*::-webkit-scrollbar-track {background:transparent;}
*::-webkit-scrollbar-thumb {background:transparent; border-radius:6px; box-shadow: inset 0 0 10px 10px var(--gray); border: solid 3px transparent;}
</style>