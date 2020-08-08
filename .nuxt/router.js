import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _de834f00 = () => interopDefault(import('..\\resources\\nuxt\\pages\\auth\\index.vue' /* webpackChunkName: "pages/auth/index" */))
const _222c3fac = () => interopDefault(import('..\\resources\\nuxt\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _07c0b1dd = () => interopDefault(import('..\\resources\\nuxt\\pages\\auth\\password.vue' /* webpackChunkName: "pages/auth/password" */))
const _ffac3c36 = () => interopDefault(import('..\\resources\\nuxt\\pages\\auth\\register.vue' /* webpackChunkName: "pages/auth/register" */))
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
    path: "/test",
    component: _222c3fac,
    name: "test"
  }, {
    path: "/auth/password",
    component: _07c0b1dd,
    name: "auth-password"
  }, {
    path: "/auth/register",
    component: _ffac3c36,
    name: "auth-register"
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
