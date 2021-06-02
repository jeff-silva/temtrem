<template><div class="app-nav">
    <el-menu :collapse="collapse"
        background-color="transparent"
        text-color="#444"
        class="border-0"
    >
        <template v-for="(i, index) in navItems">

            <!-- Single -->
            <template v-if="i.children.length==0">
                <el-menu-item :index="''+index">
                    <nuxt-link :to="i.to" class="d-block" @click.native="clickHandle(i)">
                        <i v-if="i.icon" :class="i.icon" class="app-nav-item-icon"></i>
                        <span>{{ i.label }}</span>
                    </nuxt-link>
                </el-menu-item>
            </template>

            <!-- Submenu -->
            <el-submenu :index="''+index" v-else>
                <template slot="title">
                    <i v-if="i.icon" :class="i.icon" class="app-nav-item-icon"></i>
                    <span>{{ i.label }}</span>
                </template>

                <template v-for="(ii, iindex) in i.children">
                    <el-menu-item :index="index+'-'+iindex">
                        <nuxt-link :to="ii.to" class="d-block" @click.native="clickHandle(ii)">
                            <i v-if="ii.icon" :class="ii.icon" class="app-nav-item-icon"></i>
                            <span>{{ ii.label }}</span>
                        </nuxt-link>
                    </el-menu-item>
                </template>
            </el-submenu>
        </template>
        
        <el-menu-item :index="''+(navItems.length+1)">
            <ui-auth-logout class="d-block" redirect="/">
                <i class="fas fa-fw fa-power-off app-nav-item-icon"></i>
                <span>Sair</span>
            </ui-auth-logout>
        </el-menu-item>
    </el-menu>

</div></template>

<script>
export default {
    props: {
        collapse: {default:false},
    },

    methods: {
        clickHandle(item) {
            if (typeof item.click!='function') return;
            item.click(item);
        },
    },

    computed: {
        navItems() {
            let items = [];

            items.push({
                label: "Dashboard",
                to: "/admin",
                icon: "fas fa-fw fa-poll",
                children: [],
            });

            items.push({
                label: "Sistema",
                to: "",
                icon: "fas fa-fw fa-cog",
                children: [
                    {
                        label: "Usuários",
                        to: "/admin/users",
                        icon: false,
                        children: []
                    },
                    {
                        label: "Configurações",
                        to: "/admin/settings/",
                        icon: false,
                        children: []
                    },
                ],
            });

            items.push({
                label: "Temtrem",
                to: "",
                icon: "fas fa-fw fa-guitar",
                children: [
                    {
                        label: "Lojas",
                        to: "/admin/temtrem/businesses",
                        icon: false,
                        children: []
                    },
                    {
                        label: "Configurações",
                        to: "/admin/temtrem/settings/",
                        icon: false,
                        children: []
                    },
                ],
            });

            return items;
        },
    },
}
</script>

<style lang="scss">
.app-nav a, .app-nav .el-submenu__title {text-decoration:none; color:var(--bs-secondary)}
.app-nav-item-icon {margin:-2px 5px 0px 0px;}
</style>