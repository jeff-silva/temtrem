<template><div>
  <div class="d-flex align-items-center bg-white shadow-sm" style="position:fixed; top:0px; left:0px; width:100%; z-index:9999;">
    <div>
      <a href="javascript:;" class="btn" v-if="$auth.user" @click="drawer=true">
        <i class="fas fa-bars"></i>
      </a>

      <el-drawer
        title=""
        direction="ltr"
        :visible.sync="drawer"
        :with-header="false">
        <div>
          <ui-nav :value="panelNavItems"></ui-nav>
        </div>
    </el-drawer>
    </div>

    <div v-if="$auth.user">
      Olá {{ $auth.user.name }}.
    </div>

    <div class="flex-grow-1">
      <!--  -->
    </div>

    <div v-if="!$auth.user">
      <a href="javascript:;" class="btn" @click="loginModal=true">
        Login
      </a>
    </div>

    <div v-if="!$auth.user">
      <a href="javascript:;" class="btn" @click="registerModal=true">
        Cadastre-se
      </a>
      <ui-modal ref="register" v-model="registerModal">
        <template #header>Cadastre-se</template>
        <template #body>
          <ui-auth-register
            @success="registerModal=false"
            v-bind="{showBtnRegister:false}"
          ></ui-auth-register>
        </template>
        <template #footer>
          <a href="javascript:;" class="btn float-left">Cancelar</a>
          <a href="javascript:;" class="btn btn-primary" @click="$refs.register.submit()">Cadastrar</a>
        </template>
      </ui-modal>
    </div>

    <div v-if="$auth.user">
      <nuxt-link to="/admin" class="btn">Admin</nuxt-link>
    </div>

    <div v-if="$auth.user">
      <ui-auth-logout class="btn">Sair</ui-auth-logout>
    </div>
  </div>
  <nuxt />

  <ui-modal ref="login" v-model="loginModal">
    <template #header>Login</template>
    <template #body>
      <ui-auth-login
        @success="loginSuccessHandler"
        v-bind="{showBtnLogin:false}"
      ></ui-auth-login>
    </template>
    <template #footer>
      <a href="javascript:;" class="btn float-left">Cancelar</a>
      <a href="javascript:;" class="btn btn-primary" @click="$refs.login.submit()">Login</a>
    </template>
  </ui-modal>
  
</div></template>

<script>
export default {
  data() {
    return {
      drawer: false,
      loginModal: false,
      registerModal: false,
      panelNavItems: [],
    };
  },

  methods: {
    loginSuccessHandler() {
      this.loginModal = false;
      this.refreshData();
    },

    refreshData() {
      this.loadPanelNavItems();
    },

    loadPanelNavItems() {
      this.$axios.get('/api/app/panel-nav').then(resp => {
        this.panelNavItems = resp.data;
      });
    },
  },

  mounted() {
    this.refreshData();
  },
}
</script>
