<template><div>
    <div v-if="$auth.user">
        <div class="d-flex p-2 bg-white shadow-sm mb-3">
            <div class="flex-grow-1">Olá {{ $auth.user.name }}</div>
            <div><a href="javascript:;" @click="$auth.logout()">Sair</a></div>
        </div>
        <slot></slot>
    </div>

    <div v-else>
        <div class="alert alert-info">
            Para utilizar esta ferramenta, é necessário fazer login no sistema. <br>
            Faça login ou cadastre-se.
        </div>
        
        <div class="row mt-4">
            <div class="col-12 col-lg-6">
                <ui-auth-login></ui-auth-login>
            </div>
            <div class="col-12 col-lg-6">
                <ui-auth-register></ui-auth-register>
            </div>
        </div>
    </div>
</div></template>