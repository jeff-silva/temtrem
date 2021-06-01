<template><div>
    <el-menu default-active="2" class="el-menu-vertical-demo" :unique-opened="true" :show-close="false">
        <template v-for="(n, i) in $store.state.app_nav.items">

            <!-- Single -->
            <el-menu-item v-if="n.children.length==0">
                <nuxt-link :to="n.to">{{ n.label }}</nuxt-link>
            </el-menu-item>

            <!-- Submenus -->
            <el-submenu :index="i.toString()" v-else>
                <template slot="title">
                    <i :class="n.icon" class="mr-2"></i>
                    <span>{{ n.label }}</span>
                </template>

                <el-menu-item-group>
                    <el-menu-item v-for="(nn, ii) in n.children" :key="ii">
                        <nuxt-link :to="nn.to">{{ nn.label }}</nuxt-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </template>
    </el-menu>
</div></template>