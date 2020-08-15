import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _de834f00 = () => interopDefault(import('..\\resources\\nuxt\\pages\\auth\\index.vue' /* webpackChunkName: "pages/auth/index" */))
const _73761a2c = () => interopDefault(import('..\\resources\\nuxt\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _b254b22a = () => interopDefault(import('..\\resources\\nuxt\\pages\\store\\index.vue' /* webpackChunkName: "pages/store/index" */))
const _222c3fac = () => interopDefault(import('..\\resources\\nuxt\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _256a267d = () => interopDefault(import('..\\resources\\nuxt\\pages\\user\\index.vue' /* webpackChunkName: "pages/user/index" */))
const _07c0b1dd = () => interopDefault(import('..\\resources\\nuxt\\pages\\auth\\password.vue' /* webpackChunkName: "pages/auth/password" */))
const _ffac3c36 = () => interopDefault(import('..\\resources\\nuxt\\pages\\auth\\register.vue' /* webpackChunkName: "pages/auth/register" */))
const _34b25c4a = () => interopDefault(import('..\\resources\\nuxt\\pages\\store\\products.vue' /* webpackChunkName: "pages/store/products" */))
const _700775cc = () => interopDefault(import('..\\resources\\nuxt\\pages\\store\\settings.vue' /* webpackChunkName: "pages/store/settings" */))
const _41f5b8e9 = () => interopDefault(import('..\\resources\\nuxt\\pages\\store\\stores.vue' /* webpackChunkName: "pages/store/stores" */))
const _1eb5d493 = () => interopDefault(import('..\\resources\\nuxt\\pages\\user\\notifications.vue' /* webpackChunkName: "pages/user/notifications" */))
const _0ae5c448 = () => interopDefault(import('..\\resources\\nuxt\\pages\\user\\settings.vue' /* webpackChunkName: "pages/user/settings" */))
const _3c317128 = () => interopDefault(import('..\\resources\\nuxt\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/auth",
    component: _de834f00,
    name: "auth"
  }, {
    path: "/dashboard",
    component: _73761a2c,
    name: "dashboard"
  }, {
    path: "/store",
    component: _b254b22a,
    name: "store"
  }, {
    path: "/test",
    component: _222c3fac,
    name: "test"
  }, {
    path: "/user",
    component: _256a267d,
    name: "user"
  }, {
    path: "/auth/password",
    component: _07c0b1dd,
    name: "auth-password"
  }, {
    path: "/auth/register",
    component: _ffac3c36,
    name: "auth-register"
  }, {
    path: "/store/products",
    component: _34b25c4a,
    name: "store-products"
  }, {
    path: "/store/settings",
    component: _700775cc,
    name: "store-settings"
  }, {
    path: "/store/stores",
    component: _41f5b8e9,
    name: "store-stores"
  }, {
    path: "/user/notifications",
    component: _1eb5d493,
    name: "user-notifications"
  }, {
    path: "/user/settings",
    component: _0ae5c448,
    name: "user-settings"
  }, {
    path: "/",
    component: _3c317128,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
