<template><div>
    <div class="row no-gutters">
        <div class="col-3 d-none d-md-block p-0 bg-white shadow">
            <div v-if="$auth.user">
                Bem vindo {{ $auth.user.name }}. <br>
                <div><nuxt-link to="/admin">Admin</nuxt-link></div>
                <ui-auth-logout>Sair</ui-auth-logout>
            </div>
            <div v-else>
                <ui-auth-login></ui-auth-login>
            </div>
        </div>
        <div class="col-12 col-md-9 p-0">
            <temtrem-map></temtrem-map>
        </div>
    </div>
</div></template>

<script>
export default {
    layout: 'default',
};
</script>