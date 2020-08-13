<template><div class="form-group">
    <div class="row">
        <div class="col-12 col-md-3 p-2">
            <div>{{ label }}</div>
        </div>
        <div class="col-12 col-md-9">
            <template v-if="$slots.field"><slot name="field"></slot></template>

            <template v-else-if="type=='select'">
                Select
            </template>

            <template v-else-if="type=='photo'">
                <label class="d-flex align-items-center">
                    <div class="bg-white shadow-sm">
                        <div style="display:inline-block; min-width:70px; height:70px;">
                            <img :src="props.value" alt="" style="height:100%;">
                        </div>
                        <input type="file" class="form-control" style="display:none;" @change="getInputPhoto($event)">
                    </div>
                    <div class="flex-grow-1 pl-3">
                        <div class="list-inline">
                            <a href="javascript:;" class="list-inline-item" @click="props.value=''; emit();" v-if="props.value">Remover</a>
                        </div>
                    </div>
                </label>
            </template>

            <template v-else>
                <input :type="type" class="form-control"
                    :placeholder="placeholder" v-model="props.value" @keyup="emit()" >
            </template>

            <small class="d-block text-danger" v-if="props.error" v-html="props.error"></small>
            <small class="text-muted" v-if="$slots.hint"><slot name="hint"></slot></small>
        </div>
    </div>
</div></template>

<script>export default {
    props: {
        value: {default: ''},
        label: {default: ''},
        placeholder: {default: ''},
        type: {default: 'text'},
        imgMaxWidth: {default: 800},
        imgMaxHeight: {default: 600},
        error: {default: ''},
    },

    watch: {
        $props: {
            deep: true,
            handler(value) {
                this.props = Object.assign({}, value);
            },
        },
    },

    methods: {
        emit() {
            this.$emit('input', this.props.value);
            this.$emit('value', this.props.value);
            this.$emit('change', this.props.value);
        },

        getInputPhoto(ev) {
            if (ev.target.files && ev.target.files[0]) {
                let file = ev.target.files[0];
                if ('image'!=file.type.split('/')[0]) { alert('O arquivo deve ser uma imagem.'); return; }
                let reader = new FileReader();
                reader.onload = (e) => {
                    let img = document.createElement("img");
                    img.src = e.target.result;

                    img.onload = () => {
                        let canvas = document.createElement('canvas');
                        let ctx = canvas.getContext("2d");
    
                        let MAX_WIDTH = parseFloat(this.imgMaxWidth);
                        let MAX_HEIGHT = parseFloat(this.imgMaxHeight);
                        let width = img.width;
                        let height = img.height;
    
                        if (width > height) {
                            if (width > MAX_WIDTH) {
                                height *= MAX_WIDTH / width;
                                width = MAX_WIDTH;
                            }
                        } else {
                            if (height > MAX_HEIGHT) {
                                width *= MAX_HEIGHT / height;
                                height = MAX_HEIGHT;
                            }
                        }
                        canvas.width = width;
                        canvas.height = height;
                        ctx.drawImage(img, 0, 0, width, height);
    
                        let dataurl = canvas.toDataURL("image/png");
                        this.props.value = dataurl;
                        this.emit();
                    };

                };
                reader.readAsDataURL(file);
            }
        },
    },

    data() {
        return {
            props: Object.assign({}, this.$props),
        };
    },
};</script>
