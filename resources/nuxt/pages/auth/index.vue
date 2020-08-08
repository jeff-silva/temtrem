<template><div>
    <form action="" style="max-width:400px; margin:0 auto;" @submit.prevent="submitLogin()">
        <label class="row">
            <div class="col-3 p-2">Login</div>
            <div class="col-9"><input type="text" class="form-control" v-model="login.email"></div>
        </label>

        <label class="row">
            <div class="col-3 p-2">Senha</div>
            <div class="col-9"><input type="password" class="form-control" v-model="login.password"></div>
        </label>

        <div class="text-right">
            <button type="submit" class="btn btn-primary">
                Login
            </button>
        </div>
    </form>

    <pre>$data: {{ $data }}</pre>
</div></template>

<script>export default {
    data() {
        return {
            login: {
                email: '',
                password: '',
            },
        };
    },

    methods: {
        submitLogin() {
            this.$axios.post('/api/auth/login', this.login).then((resp) => {
                console.log(resp);
            });
        },
    },
};</script>