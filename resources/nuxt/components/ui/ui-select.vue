<template><div class="ui-select" style="position:relative;">
    <div class="d-block">

        <div class="bg-white form-control" style="height:auto; cursor:pointer;">
            <div v-if="selected">
                <slot name="item" :item="selected">{{ selected[itemLabel]||i }}</slot>
            </div>

            <div v-else class="text-muted">{{ placeholder }}</div>
        </div>

        <transition name="custom-unique-name"
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut"
        >
            <div class="bg-white shadow-sm" v-if="focused" style="position:absolute; top:calc(100% + 5px); left:0px; width:100%; animation-duration:200ms; z-index:9;">
                <div class="input-group p-0 bg-white m-0" v-if="showSearch">
                    <input type="text" class="form-control border-0 bg-transparent" placeholder="Filtrar" v-model="props.term" style="box-shadow:none!important;">
                    <div class="input-group-append"><div class="input-group-text border-0 bg-transparent">
                        <i class="fa fa-fw fa-search"></i>
                    </div></div>
                </div>

                <div style="max-height:50vh; overflow:auto; border-top:solid 1px #eee;" ref="dropdown">
                    <slot name="empty">
                        <div class="p-2 text-muted" v-if="compItems.length==0">Nenhum item encontrado</div>
                    </slot>

                    <div v-for="i in compItems" @click="select(i)"
                        :ref="(props.value==getValue(i)? 'selected': null)"
                        class="ui-select-item p-2"
                        :class="{'ui-select-active':props.value==getValue(i)}"
                    >
                        <slot name="item" :item="i">{{ i[itemLabel]||i }}</slot>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</div></template>

<script>export default {
    props: {
        value: {default: false},
        items: {default: () => ([])},
        itemValue: {default: 'id'},
        itemLabel: {default: 'name'},
        term: {default: ''},
        placeholder: {default: 'Nenhum item selecionado'},
        showSearch: {default: true},
    },

    watch: {
        $props: {
            deep: true,
            handler(value) {
                this.props = Object.assign({}, value);
                this.selectByValue(this.props.value);
            },
        },
    },

    methods: {
        emit() {
            this.$emit('input', this.props.value);
            this.$emit('value', this.props.value);
            this.$emit('change', this.props.value);
        },

        selectByItem(item) {
            this.$set(this, 'selected', item);
            if (item && item[this.itemValue]) {
                this.$set(this.props, 'value', item[this.itemValue]);
            }
        },
        
        selectByValue(value) {
            if (!this.itemValue) return;
            for(var i in this.items) {
                let item = this.items[i];
                if (item[this.itemValue]==this.props.value) {
                    this.$set(this, 'selected', item);
                    this.$set(this.props, 'value', item[this.itemValue]);
                    return;
                }
            }

            this.$set(this, 'selected', false);
            this.$set(this.props, 'value', false);
        },

        select(item) {
            let value = this.itemValue? (item[this.itemValue]||item): item;
            this.$set(this, 'selected', item);
            this.$set(this, 'focused', false);
            this.$set(this.props, 'term', '');
            this.$set(this.props, 'value', value);
            this.emit();
        },

        remove() {
            this.$set(this.props, 'value', false);
            this.emit();
        },

        getValue(item) {
            return this.itemValue? (item[this.itemValue]||item): item;
        },

        documentClickHandle(ev) {
            let focused = this.focused;
            this.focused = this.$el.contains(ev.target);

            if (this.props.value && this.focused && !focused) {
                setTimeout(() => {
                    let selected = (this.$refs.selected && this.$refs.selected[0])? this.$refs.selected[0]: false;
                    if (selected) { this.$refs.dropdown.scrollTop = selected.offsetTop-40; }
                }, 10);
            }
        },
    },

    computed: {
        compItems() {
            return this.items.filter((item) => {
                let term = JSON.stringify(item).toLowerCase();
                return term.match(this.props.term.toLowerCase());
            });
        },

        compPlaceholder() {
            for(var i in this.items) {
                let item = this.items[i];
                let value = this.getValue(item);
                if (value==this.props.value) {
                    return item[this.itemLabel]||item;
                }
            }
            return this.props.placeholder;
        },

        compValue() {
            for(var i in this.items) {
                var item = this.items[i];
                let value = this.itemValue? (item[this.itemValue]||item): item;
                if (value==this.props.value) {
                    return item[this.itemValue]||false;
                }
            }
            return false;
        },
    },

    data() {
        return {
            focused: false,
            selected: false,
            props: Object.assign({}, this.$props),
        };
    },

    mounted() {
        window.addEventListener('click', this.documentClickHandle);
    },

    beforeDestroy() {
        window.removeEventListener('click', this.documentClickHandle);
    },
};</script>

<style>
.ui-select-item:hover,
.ui-select-item.ui-select-active {background:#eee;}
</style>