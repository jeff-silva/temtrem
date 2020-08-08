<template><div>
    <div class="bs-component fixed-top shadow">
        <nav class="navbar navbar-expand-lg navbar-light bg-light container">
            <nuxt-link to="/" class="navbar-brand">Home</nuxt-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <nuxt-link class="nav-link" to="/auth">Login</nuxt-link>
                    </li>
                </ul>

                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search">
                    <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>
    <br><br><br><br>
    <nuxt />
</div></template>

<script>export default {
    data() {
        return {};
    },
};</script>