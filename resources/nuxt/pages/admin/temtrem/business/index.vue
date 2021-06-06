<script>
import Component from './admin';

export default {
    extends: Component,

    data() {
        return {
            params: {
                q: '',
                user_id: this.$auth.user.id,
            },
            results: {data:[]},
        };
    },
};
</script>
