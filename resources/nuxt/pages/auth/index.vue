<template><div>
    <form action="" style="max-width:400px; margin:0 auto;" @submit.prevent="login()">
        <label class="row">
            <div class="col-3 p-2">Login</div>
            <div class="col-9"><input type="text" class="form-control" v-model="user.email"></div>
        </label>

        <label class="row">
            <div class="col-3 p-2">Senha</div>
            <div class="col-9"><input type="password" class="form-control" v-model="user.password"></div>
        </label>

        <div class="text-right">
            <button type="submit" class="btn btn-primary">
                Login
            </button>
        </div>
    </form>
</div></template>

<script>
// import User from '@/models/User';

export default {
    data() {
        return {
            user: {
                email: '',
                password: '',
            },
        };
    },

    methods: {
        loginThen(resp) {
            location.reload();
        },
        loginCatch(error) {
            console.log(error);
        },
        async login() {
            try {
                this.$store.dispatch('auth/login', this.user).then((resp) => {
                    this.$router.push('/dashboard');
                })
            }
            catch(err) {
                // console.log(err);
            }
        },
    },

    mounted() {
        // this.$store.dispatch('auth/me');
    },
};</script>