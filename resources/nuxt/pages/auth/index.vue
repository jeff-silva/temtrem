<template><div>
    <form action="" style="max-width:400px; margin:0 auto;" @submit.prevent="user.login().then(loginThen).catch(loginCatch)">
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
import User from '@/models/User';

export default {
    data() {
        return {
            user: new User(),
        };
    },

    methods: {
        loginThen(resp) {
            location.reload();
        },
        loginCatch(error) {
            console.log(error);
        },
    },

    mounted() {
        this.user.me().then((resp) => {
            console.log(resp);
        });
    },
};</script>