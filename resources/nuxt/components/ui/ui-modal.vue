<template><div class="ui-modal">
    <transition name="custom-unique-name"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
    >
        <div class="modal fade show" tabindex="-1" aria-labelledby="exampleModalLiveLabel"
            style="display:block; background:#00000044; animation-duration:200ms; z-index:9999;"
            v-if="props.value" @click.self="toggle()"
            aria-modal="true" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" v-if="$slots.header && $scopedSlots.header">
                            <slot name="header"></slot>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="toggle()">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="modal-body">
                        <slot name="body"></slot>
                    </div>
                    <div class="modal-footer" v-if="$slots.footer && $scopedSlots.footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</div></template>

<script>export default {
    props: {
        value: {default: false},
        tag: {default: 'div'},
    },

    watch: {
        $props: {deep: true, handler(value) {
            this.props = Object.assign({}, value);
        }},
    },

    methods: {
        emit() {
            this.$emit('input', this.props.value);
            this.$emit('value', this.props.value);
            this.$emit('change', this.props.value);
        },

        toggle() {
            this.props.value = !this.props.value;
            this.emit();
        },
    },

    data() {
        return {
            props: Object.assign({}, this.$props),
        };
    },
};</script>

<style>
.ui-modal .modal-header {border-bottom:none; background:var(--bs-light);}
.ui-modal .modal-footer {border-top:none;}
</style>