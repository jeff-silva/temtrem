<template><div>
    <transition name="custom-unique-name" enter-active-class="animate__animated animate__fadeInRight" leave-active-class="animate__animated animate__fadeOutRight">
        <div v-if="$route.params.slug && business" style="position:fixed; top:0px; left:0px; width:100%; height:100%; background:#00000022; z-index:9999; animation-duration:200ms;"
            @click.self="$router.push('/business')">
            <temtrem-business-profile v-model="business"
                class="bg-white shadow-sm"
                style="position:absolute; top:0px; right:0px; width:50%; height:100vh; min-width:400px;"
            ></temtrem-business-profile>
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