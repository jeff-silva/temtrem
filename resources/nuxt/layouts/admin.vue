<template><div class="layout-admin">

    <el-drawer direction="ltr" :visible.sync="drawer" size="300px">
        <div style="height:100vh; overflow:auto;">
            <app-nav class="layout-admin-nav"></app-nav>
        </div>
    </el-drawer>

    <div class="d-flex">
        <div class="bg-white shadow d-none d-lg-block" style="position:relative; z-index:10; min-width:250px; height:100vh; overflow:auto;">
            <div class="bg-light p-3" v-if="$auth.user">
                <div class="font-weight-bold text-uppercase">{{ $store.state.auth.user.name }}</div>
                <small class="d-block text-muted">{{ $store.state.auth.user.email }}</small>
            </div>
            <app-nav class="layout-admin-nav"></app-nav>
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