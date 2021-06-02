<template><div>
    <div class="row no-gutters">
        <div class="col-3 d-none d-md-block p-0 bg-white shadow">
            <a href="" class="btn btn-primary d-block rounded-0">Refresh</a>
            <a href="" class="btn btn-secondary d-block rounded-0">secondary</a>
            <a href="" class="btn btn-warning d-block rounded-0">warning</a>
            <a href="" class="btn btn-bitbucket d-block rounded-0">bitbucket</a>
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