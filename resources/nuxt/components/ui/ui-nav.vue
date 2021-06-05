<template><div class="ui-nav">
    <el-menu
        :collapse="false"
        background-color="transparent"
        text-color="#444"
        class="border-0"
    >
        <template v-for="(i, index) in navItems">

            <!-- Single -->
            <template v-if="i.children.length==0">
                <el-menu-item :index="i.id">
                    <nuxt-link :to="i.to" class="d-block" @click.native="clickHandle(i, $event)">
                        <i v-if="i.icon" :class="i.icon" class="app-nav-item-icon"></i>
                        <span>{{ i.label }}</span>
                    </nuxt-link>
                </el-menu-item>
            </template>

            <!-- Submenu -->
            <el-submenu :index="i.id" v-else>
                <template slot="title">
                    <i v-if="i.icon" :class="i.icon" class="app-nav-item-icon"></i>
                    <span>{{ i.label }}</span>
                </template>

                <template v-for="(ii, iindex) in i.children">
                    <el-menu-item :index="ii.id">
                        <nuxt-link :to="ii.to" class="d-block" @click.native="clickHandle(ii, $event)">
                            <i v-if="ii.icon" :class="ii.icon" class="app-nav-item-icon"></i>
                            <span>{{ ii.label }}</span>
                        </nuxt-link>
                    </el-menu-item>
                </template>
            </el-submenu>
        </template>
    </el-menu>
</div></template>


<script>
export default {
    props: {
        value: Array,
    },

    methods: {
        clickHandle(item, ev) {
            if (item.click && typeof item.click=='function') {
                item.click(item, ev);
            }
        },

        deepMerge(items, level=0) {
            if (!Array.isArray(items)) return [];
            return items.map((item, index) => {
                item.children = this.deepMerge(item.children||[], level+1);
                return Object.assign({
                    id: (level+'-'+index),
                    label: "",
                    to: "",
                    icons: "",
                    children: item.children,
                }, item);
            });
        },
    },

    computed: {
        navItems() {
            return this.deepMerge(this.value);
        },
    },
}
</script>

<style>
.ui-nav a {text-decoration:none!important; color:var(--bs-dark); display:block;}
.ui-nav .app-nav-item-icon {margin:-2px 10px 0px 4px;}
</style>