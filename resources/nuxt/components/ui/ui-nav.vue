<template><div>
    <!-- Horizontal -->
    <div v-if="type=='horizontal'" :class="`ui-nav ui-nav-horizontal ui-level-${level}`">
        <div v-for="i in menuItems" class="ui-nav-item">
            <nuxt-link :to="i.to" class="p-2 btn text-left">
                <slot name="link"><span v-html="i.title" :item="i"></span></slot>
            </nuxt-link>

            <ui-nav v-model="i.items" class="ui-nav-child" :level="level+1"></ui-nav>
        </div>
    </div>
    
    <!-- Vertical -->
    <div v-if="type=='vertical'" :class="`ui-nav ui-nav-vertical ui-level-${level}`">
        <div v-for="i in menuItems" class="ui-nav-item">
            <div class="d-flex align-items-center">
                <nuxt-link :to="i.to" class="p-2 btn text-left flex-grow-1" @click.native="i.items.length>0? toggleDropdown(i): null">
                    <slot name="link"><span v-html="i.title" :item="i"></span></slot>
                </nuxt-link>

                <div v-if="i.items.length>0">
                    <a href="javascript:void(0);" class="btn" @click="toggleDropdown(i)">
                        <i class="fas fa-caret-down"></i>
                    </a>
                </div>
            </div>

            <ui-nav v-model="i.items" class="ui-nav-child" :level="level+1" :type="type" :style="getNavVerticalItemStyle(i)"></ui-nav>
        </div>
    </div>
</div></template>

<style>
.ui-nav {}
.ui-nav * {transition: all 200ms ease;}
.ui-nav-item {}

.ui-nav-horizontal {display:flex;}
.ui-nav-horizontal > .ui-nav-item {position:relative;}
.ui-nav-horizontal > .ui-nav-item > .ui-nav-child {position:absolute; top:100%; left:0px;}
.ui-nav-horizontal.ui-level-0 > .ui-nav-item .ui-nav-child {visibility:hidden; opacity:0;}
.ui-nav-horizontal > .ui-nav-item:hover > .ui-nav-child,
.ui-nav-horizontal > .ui-nav-item:active > .ui-nav-child {visibility:visible; opacity:1;}
.ui-nav-horizontal.ui-level-0 > .ui-nav-item > .ui-nav-child {background:#fff;}
.ui-nav-horizontal.ui-level-0 > .ui-nav-item > .ui-nav-child > .ui-level-1 > .ui-nav-item {width:200px;}
.ui-nav-horizontal.ui-level-0 > .ui-nav-item > .ui-nav-child > .ui-level-1 > .ui-nav-item > .ui-nav-child {top:0px; left:100%;}
.ui-nav-horizontal.ui-level-0 > .ui-nav-item > .ui-nav-child > .ui-level-1 > .ui-nav-item > .ui-nav-child > .ui-nav-horizontal {display:block;}

.ui-nav-vertical {display:block;}
.ui-nav-vertical > .ui-nav-item {display:block;}
.ui-nav-vertical > .ui-nav-item > .ui-nav-child {}
.ui-nav-vertical .ui-nav-child {padding-left:20px;}


/* .ui-nav * {transition: all 200ms ease;}
.ui-nav {list-style-type:none; padding:0px; margin:0px;}
.ui-nav > li {position:relative;}
.ui-nav > li > a {display:block;}
.ui-nav > li ul {visibility:hidden; opacity:0; position:absolute; width:100%; min-width:150px; z-index:2;}
.ui-nav > li:hover > ul,
.ui-nav > li:active > ul {visibility:visible; opacity:1;}

.ui-nav-type-vertical > li ul {top:0; left:100%;}

.ui-nav-type-horizontal.ui-nav-level-0 {display:flex;}
.ui-nav-type-horizontal.ui-nav-level-0 > li > ul {top:100%; left:0;}
.ui-nav-type-horizontal.ui-nav-level-1 ul {top:0; left:100%;}

.ui-nav-item-active > a, .ui-nav a:hover {background:#eee;} */
</style>

<script>
export default {
    components: {
        'ui-nav': () => import('@/components/ui/ui-nav.vue'),
    },

    props: {
        value: Array,
        type: {default:'horizontal'},
        level: {default:0},
        active: Function,
    },

    watch: {
        $props: {deep:true, handler(value) {
            // this.props = Object.assign({}, value);
            this.menuItems = this.getMenuItems(value);
        }},

        $route: {deep:true, handler(value) {
            this.$forceUpdate();
        }},
    },

    methods: {
        getMenuItems(items) {
            return items.map(item => {
                return Object.assign({
                    title: '',
                    to: '',
                    showItems: false,
                    items: [],
                }, item);
            });
        },

        toggleDropdown(item) {
            this.menuItems.forEach(iitem => {
                if (iitem==item) return;
                iitem.showItems = false;
            });
            item.showItems = !item.showItems;
        },

        getNavVerticalItemStyle(item) {
            if (item.showItems) {
                return `transform:scaleY(1); transform-origin:top;`;
            }
            return `transform:scaleY(0); transform-origin:top; height:0px;`;
        },
    },

    data() {
        return {
            // props: Object.assign({}, this.$props),
            menuItems: this.getMenuItems(this.$props.value),
        };
    },
}
</script>