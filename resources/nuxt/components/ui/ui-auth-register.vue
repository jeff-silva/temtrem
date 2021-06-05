<template><div>
    <ui-form method="post" action="/api/user/save/" v-model="props.value" ref="form">
        <template #success="{response}">Olá {{ response.name }}. Seu cadastro foi concluído, agora é só <nuxt-link to="/auth">fazer login</nuxt-link>.</template>
        <template #default="{loading, error}">
            <slot name="content">
                <div class="mb-3">
                    <input type="text" class="form-control" v-model="props.value.name" placeholder="Nome">
                    <small class="text-danger" v-if="error.name" v-html="error.name"></small>
                </div>
    
                <div class="mb-3">
                    <input type="text" class="form-control" v-model="props.value.email" placeholder="E-mail">
                    <small class="text-danger" v-if="error.email" v-html="error.email"></small>
                </div>
    
                <div class="mb-3">
                    <ui-password v-model="props.value.password" placeholder="Senha"></ui-password>
                    <small class="text-danger" v-if="error.password" v-html="error.password"></small>
                </div>
    
                <div class="mb-3">
                    <ui-password v-model="props.value.password_confirmation" :meter="false" placeholder="Repita senha"></ui-password>
                    <small class="text-danger" v-if="error.password_confirmation" v-html="error.password_confirmation"></small>
                </div>
    
                <div class="mb-3 text-right" :style="{display:(showBtnRegister? 'block': 'none')}">
                    <button type="submit" class="btn btn-primary btn-block">
                        Cadastrar <span v-html="loading"></span>
                    </button>
                </div>
            </slot>
        </template>
    </ui-form>
</div></template>

<script>
export default {
    name: 'ui-auth-register',

    props: {
        value: {default:() => ({})},
        showBtnRegister: {default:true},
    },

    watch: {
        $props: {deep: true, handler(value) {
            this.props = Object.assign({}, value);
        }},
    },

    data() {
        return {
            props: Object.assign({}, this.$props),
        };
    },

    methods: {
        submit() {
            this.$refs.form.submit();
        },
    },
};
</script>