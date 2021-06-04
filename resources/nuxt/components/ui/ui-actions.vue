<template><div class="ui-actions">
    <div class="ui-actions-desktop d-none d-md-block">
        <slot></slot>
    </div>

    <div class="d-md-none pt-5">
        <div class="ui-actions-mobile d-flex bg-white shadow-sm">
            <slot></slot>
        </div>
    </div>
</div></template>

<style>
.ui-actions-desktop {text-align:right;}

.ui-actions-mobile {position:fixed; bottom:0px; left:0px; width:100%; z-index:9;}
.ui-actions-mobile > * {flex-grow:1;}
.ui-actions-mobile .btn {border-radius:0px !important;}
</style>