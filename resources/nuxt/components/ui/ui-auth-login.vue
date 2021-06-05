<template><div>
    <form @submit.prevent="submit()">
        <div class="alert alert-danger" v-if="error" v-html="error"></div>

        <slot name="content">
            <div class="mb-3">
                <input type="text" class="form-control" v-model="post.email" placeholder="Seu e-mail">
            </div>

            <div class="mb-3">
                <ui-password v-model="post.password" placeholder="Senha" :meter="false"></ui-password>
            </div>

            <div class="mb-3 text-right" :style="{display:(showBtnLogin? 'block': 'none')}">
                <button type="submit" class="btn btn-primary btn-block">
                    <span v-if="loading"><i class="fas fa-spinner fa-spin"></i></span>
                    <span v-else>Login</span>
                </button>
            </div>
        </slot>
    </form>
</div></template>

<script>
export default {
    props: {
        redirect: {default:false},
        showBtnLogin: {default:true},
    },

    methods: {
        submit() {
            this.error = false;
            this.loading = true;
            this.$auth.loginWith('jwt', {data:this.post}).then((resp) => {
                this.loading = false;
                this.$emit('success', resp.data);
                if (this.redirect) {
                    this.$router.push(this.redirect);
                }
            }).catch(err => {
                this.error = err.response.data.message;
                this.loading = false;
            });
        },
    },

    data() {
        return {
            loading: false,
            error: false,
            post: {
                email: '',
                password: '',
            },
        };
    },
}
</script>