<template><div>
    <transition name="custom-unique-name" enter-active-class="animate__animated animate__fadeInRight" leave-active-class="animate__animated animate__fadeOutRight">
        <div v-if="$route.params.slug && business" style="position:fixed; top:0px; left:0px; width:100%; height:100%; background:#00000022; z-index:9999; animation-duration:200ms;"
            @click.self="$router.push('/business')">
            <div class="bg-white shadow-sm" style="position:absolute; top:0px; right:0px; width:50%; height:100vh; min-width:400px;">
                <img :src="business.cover.url" alt="" v-if="business.cover.url" style="width:100%; height:150px; object-fit:cover;">
                <div class="p-3">
                    <h1>{{ business.name }}</h1>
                    <div v-html="business.description"></div>
                    <small class="text-muted d-block">
                        <i class="fas fa-map-marker"></i> &nbsp;
                        {{ business.route }} {{ business.number }}, {{ business.district }},
                        {{ business.city }} {{ business.state }},
                    </small>
                </div>
            </div>
        </div>
    </transition>
</div></template>

<script>
export default {
    layout: 'default',

    watch: {
        $route: {handler() {
            this.businessFind();
        }},
    },

    methods: {
        businessFind() {
            this.business = false;
            if (!this.$route.params.slug) return;
            this.$axios.get(`/api/temtrem-business/find/${this.$route.params.slug}`).then(resp => {
                this.business = resp.data;
            });
        },
    },

    data() {
        return {
            business: false,
        };
    },

    mounted() {
        this.businessFind();
    },
};
</script>