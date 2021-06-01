<template><div>
  <el-drawer
    title="Menu"
    :visible.sync="drawer"
    size="250px"
    direction="ltr">
    <div style="height:85vh; overflow:auto;">
      <div class="input-group bg-secondary">
        <input type="text" class="form-control bg-transparent border-0 p-3" placeholder="Filtrar" v-model="filter">
        <div class="input-group-append"><div class="input-group-text bg-transparent border-0">
          <i class="fas fa-search"></i>
        </div></div>
      </div>
      
      <el-menu default-active="2" class="el-menu-vertical-demo" :unique-opened="true">
        <el-submenu :index="i.toString()" v-for="(n, i) in computedItems" :key="i">
          <template slot="title">
            <div v-html="n.title"></div>
          </template>

          <el-menu-item-group>
            <el-menu-item v-for="(nn, ii) in n.items" :key="ii">
              <nuxt-link :to="nn.to" @click.native="drawer=false">{{ nn.title }}</nuxt-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
  </el-drawer>

  <div class="row no-gutters">
    <div class="col-12 col-md-2 bg-white shadow d-none d-lg-flex" style="height:100vh; overflow:auto;">
      <div class="flex-grow-1">
        <!-- <ui-nav v-model="navs" type="vertical"></ui-nav> -->

        <div class="input-group bg-light">
          <input type="text" class="form-control bg-transparent border-0 p-3" placeholder="Filtrar" v-model="filter">

          <div class="input-group-append">
            <div class="input-group-btn" v-if="filter">
              <button type="button" class="btn p-3" @click="filter=''">
                <i class="fas fa-fw fa-times"></i>
              </button>
            </div>
            <div class="input-group-text bg-transparent border-0" v-else>
              <i class="fas fa-fw fa-search"></i>
            </div>
          </div>
        </div>

        <el-menu default-active="2" class="el-menu-vertical-demo" :unique-opened="true">
          <template v-for="(n, i) in computedItems">
            <el-submenu :index="i.toString()" v-if="n.items && Array.isArray(n.items)">
              <template slot="title">
                <div v-html="n.title"></div>
              </template>

              <el-menu-item-group>
                <el-menu-item v-for="(nn, ii) in n.items" :key="ii">
                  <nuxt-link :to="nn.to">{{ nn.title }}</nuxt-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-menu-item v-else>
              <nuxt-link :to="n.to">{{ n.title }}</nuxt-link>
            </el-menu-item>
          </template>
        </el-menu>
      </div>

    </div>

    <div class="col-12 col-md-10 bg-light" style="height:100vh; overflow:auto;">
      <div class="p-2"><nuxt /></div>
    </div>
  </div>

  <ui-actions class="d-lg-none">
    <button type="button" class="btn" @click="drawer=true">
      <i class="fas fa-bars"></i>
    </button>
  </ui-actions>
</div></template>

<script>
export default {
  methods: {
    getMenu() {
      this.$axios.get('/api/app/navigation').then(resp => {
        this.navItems = resp.data;
      });
    },
  },

  data() {
    return {
      filter: '',
      drawer: false,
      navItems: [],
    };
  },

  computed: {
    computedItems() {
      let filter = this.filter.toLowerCase();

      if (filter) {
        let resultados = [];

        this.navItems.forEach(item => {
          item.items.forEach(iitem => {
            if (JSON.stringify(iitem).includes(filter)) {
              resultados.push(iitem);
            }
          });
        });
        
        return [{
          title: "Resultados",
          items: resultados,
        }];
      }

      return this.navItems;
    },
  },

  mounted() {
    this.getMenu();
  },
}
</script>
