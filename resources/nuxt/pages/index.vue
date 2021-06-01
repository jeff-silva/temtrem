<template><div>
    <div class="row no-gutters">
        <div class="col-3 d-none d-md-block p-0 bg-white shadow">
            <a href="" class="btn btn-primary">Refresh</a>
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