<template><div>
    <transition name="transition-01" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
        <div v-if="$route.params.slug" style="position:fixed; top:0px; left:0px; width:100%; height:100%; background:#00000022; z-index:9999; animation-duration:200ms;"
            @click.self="$router.push('/business')">

            <div class="bg-white shadow-sm" style="position:absolute; top:0px; right:0px; width:50%; height:100vh; min-width:400px; max-width:500px;">
                <div v-if="!business">Carregando...</div>
                <transition name="transition-02" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
                    <temtrem-business-profile v-model="business"
                        v-if="business"
                        style="position:absolute; top:0px; right:0px; width:100%; height:100vh; animation-duration:200ms;"
                    ></temtrem-business-profile>
                </transition>
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