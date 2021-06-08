<template><div class="ui-file">
    <div class="input-group form-control p-0 rounded-0">
        <div class="input-group-prepend"><div class="input-group-btn">
            <button type="button" class="btn" @click="handleFile()">
                <i class="fas fa-upload"></i>
            </button>
        </div></div>

        <input type="text" class="form-control border-0" v-model="props.value.url" @keyup="emitValue()" placeholder="URL">

        <div class="input-group-append"><div class="input-group-btn">
            <button type="button" class="btn btn-danger rounded-0 border border-danger text-white"
                v-if="props.value.url" @click="props.value=valueDefault()"
            >
                <i class="fas fa-times"></i>
            </button>
        </div></div>
    </div>

    <el-collapse-transition>
        <div v-if="focused">
            <input type="text" class="form-control rounded-0" v-model="props.value.name" @keyup="emitValue()" placeholder="Descrição">
        </div>
    </el-collapse-transition>

    <el-collapse-transition>
        <div class="border border-top-0" v-if="props.value && props.value.url">
            <img :src="props.value.url" :alt="props.value.name" style="width:100%; max-height:200px; object-fit:contain;">
        </div>
    </el-collapse-transition>
</div></template>

<script>
export default {
    props: {
        value: {default:Object},
    },

    watch: {
        $props: {deep:true, handler(value) {
            this.props = JSON.parse(JSON.stringify(value));
            this.props.value = this.valueDefault(this.props.value);
        }},
    },

    data() {
        return {
            props: JSON.parse(JSON.stringify(this.$props)),
            showModal: false,
            focused: false,
        };
    },

    methods: {
        emitValue() {
            this.$emit('input', this.props.value);
        },

        valueDefault(value={}) {
            value = JSON.parse(JSON.stringify(value||{}));
            return {
                name: "",
                filename: "",
                size: 0,
                type: "",
                url: "",
                ...value,
            };
        },

        handleFile() {
            Object.assign(document.createElement('input'), {
                type: 'file',
                onchange: (ev) => {
                    let file = ev.target.files[0];
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => {
                        this.props.value = {
                            name: file.name.split('.').slice(0, -1).join('.'),
                            filename: file.name,
                            size: file.size,
                            type: file.type,
                            url: reader.result,
                        };
                        this.emitValue();
                    };
                },
            }).click();
        },

        handleFocused(ev) {
            this.focused = this.$el.contains(ev.target);
        },
    },

    computed: {
        computedIcon() {
            let icon = 'fa-upload';

            if (this.props.value && this.props.value.type) {
                icon = this.props.value.type.split('/')[0];

                if (icon=='audio') {
                    icon = 'fa-file-audio';
                }
                else if (icon=='image') {
                    icon = 'fa-image';
                }
                else {
                    icon = 'fa-file';
                }
            }

            return icon;
        },
    },

    mounted() {
        document.addEventListener('click', this.handleFocused);
    },
}
</script>

<style>
.ui-file {position:relative;}
</style>