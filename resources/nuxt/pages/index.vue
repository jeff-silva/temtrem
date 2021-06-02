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
            <l-map v-bind="{zoom:13, center:[-19.9830486, -44.0079828]}" style="width:100%; height:100vh;">
                <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                <l-marker :lat-lng="[-19.9830486, -44.0079828]">
                    <l-popup>Teste</l-popup>
                </l-marker>
            </l-map>
        </div>
    </div>
</div></template>

<script>
export default {
    layout: 'default',
};
</script>