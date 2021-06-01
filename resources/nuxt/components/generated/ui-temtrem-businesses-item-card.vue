<template><div>
    <div class="bg-white shadow-sm text-center rounded">
        <nuxt-link :to="url" class="d-block" :style="backgroundStyle"></nuxt-link>
        <div class="py-2">
            <div class="font-weight-bold text-uppercase">{{ value.id  }} &nbsp;</div>
        </div>
    </div>
</div></template>

<script>
export default {
    props: {
        value: Object,
    },

    computed: {
        url() {
            return `/admin/temtrem-businesses-item/${this.value.id}`;
        },

        backgroundStyle() {
            return `height:150px; background:url(https://img.freepik.com/vetores-gratis/fundo-abstrato-linhas-organicas_1017-26669.jpg?size=626&ext=jpg&ga=GA1.2.1052784754.1610150400) center center no-repeat; background-size:cover;`;
        },
    },
}
</script>