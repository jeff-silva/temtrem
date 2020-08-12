import Eloquent from '@/models/Eloquent';

export default class User extends Eloquent
{
    id = '';
    name = '';
    email = '';
    password = '';

    constructor()
    {
        super();
    }

    me() {
        return this.$axios.post('/api/auth/me');
    }

    login() {
        return new Promise((resolve, reject) => {
            this.$axios.post('/api/auth/login', {email:this.email, password:this.password})
                .then((resp) => {
                    if (resp.data.access_token) {
                        localStorage.setItem('access_token', resp.data.access_token);
                        resolve(resp);
                    }
                })
                .catch((a, b, c, d) => {
                    reject(a, b, c, d);
                });
        });
    }

    logout() {
        localStorage.removeItem('access_token');
    }

    register() {
        // 
    }

    password() {
        // 
    }
}