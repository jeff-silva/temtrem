<template><div class="ui-file">
    <div v-if="props.value">
        <!-- Edit -->
        <div class="input-group form-control p-0" v-if="props.value.url">
            <div class="input-group-btn">
                <button type="button" class="btn">
                    <i class="fas fa-fw" :class="computedIcon"></i>
                </button>
            </div>

            <input type="text" class="form-control border-0" v-model="props.value.name" placeholder="Nome do arquivo" @input="emitValue()">

            <div class="input-group-btn">
                <button type="button" class="btn btn-danger rounded-0" @click="props.value=valueDefault(); emitValue();">
                    <i class="fas fa-fw fa-times"></i>
                </button>
            </div>
        </div>

        <!-- Empty -->
        <div class="input-group form-control p-0" v-else>
            <div class="input-group-btn">
                <a href="javascript:;" class="btn" @click="handleFile()">
                    <i class="fas fa-fw fa-upload"></i>
                </a>
            </div>
            <div class="form-control border-0">
                <a href="javascript:;" @click="showModal=true">Informar URL</a>
            </div>
        </div>

        <ui-modal v-model="showModal">
            <template #body>
                <div class="form-group">
                    <label>URL</label>
                    <input type="text" class="form-control" v-model="props.value.url">
                </div>
            </template>
            <template #footer>
                <button type="button" class="btn" @click="showModal=false; emitValue()">
                    Ok
                </button>
            </template>
        </ui-modal>
    </div>
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
}
</script>