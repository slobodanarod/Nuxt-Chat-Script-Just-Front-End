import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0d0f3735 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _cfa5128e = () => interopDefault(import('..\\pages\\blogs.vue' /* webpackChunkName: "pages/blogs" */))
const _165cf86a = () => interopDefault(import('..\\pages\\chat-rooms.vue' /* webpackChunkName: "pages/chat-rooms" */))
const _089b1248 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _23940332 = () => interopDefault(import('..\\pages\\home.vue' /* webpackChunkName: "pages/home" */))
const _3e61f899 = () => interopDefault(import('..\\pages\\last-users.vue' /* webpackChunkName: "pages/last-users" */))
const _132295de = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _759f5454 = () => interopDefault(import('..\\pages\\messages.vue' /* webpackChunkName: "pages/messages" */))
const _0af97816 = () => interopDefault(import('..\\pages\\online-users.vue' /* webpackChunkName: "pages/online-users" */))
const _5fc71db0 = () => interopDefault(import('..\\pages\\privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _5b71fe2b = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _17da06b0 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _3dd468aa = () => interopDefault(import('..\\pages\\settings.vue' /* webpackChunkName: "pages/settings" */))
const _415dea7c = () => interopDefault(import('..\\pages\\use-of-cookie.vue' /* webpackChunkName: "pages/use-of-cookie" */))
const _36a43235 = () => interopDefault(import('..\\pages\\actions\\smiles\\in.vue' /* webpackChunkName: "pages/actions/smiles/in" */))
const _2a19c624 = () => interopDefault(import('..\\pages\\actions\\smiles\\out.vue' /* webpackChunkName: "pages/actions/smiles/out" */))
const _560bc248 = () => interopDefault(import('..\\pages\\actions\\viewer\\in.vue' /* webpackChunkName: "pages/actions/viewer/in" */))
const _175ac527 = () => interopDefault(import('..\\pages\\actions\\viewer\\out.vue' /* webpackChunkName: "pages/actions/viewer/out" */))
const _02deff60 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _94b77bca = () => interopDefault(import('..\\pages\\message\\_id.vue' /* webpackChunkName: "pages/message/_id" */))
const _1335fac9 = () => interopDefault(import('..\\pages\\profile\\_slug.vue' /* webpackChunkName: "pages/profile/_slug" */))
const _700a6177 = () => interopDefault(import('..\\pages\\room\\_slug.vue' /* webpackChunkName: "pages/room/_slug" */))
const _2cc711fa = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/about",
    component: _0d0f3735,
    name: "about"
  }, {
    path: "/blogs",
    component: _cfa5128e,
    name: "blogs"
  }, {
    path: "/chat-rooms",
    component: _165cf86a,
    name: "chat-rooms"
  }, {
    path: "/contact",
    component: _089b1248,
    name: "contact"
  }, {
    path: "/home",
    component: _23940332,
    name: "home"
  }, {
    path: "/last-users",
    component: _3e61f899,
    name: "last-users"
  }, {
    path: "/login",
    component: _132295de,
    name: "login"
  }, {
    path: "/messages",
    component: _759f5454,
    name: "messages"
  }, {
    path: "/online-users",
    component: _0af97816,
    name: "online-users"
  }, {
    path: "/privacy",
    component: _5fc71db0,
    name: "privacy"
  }, {
    path: "/register",
    component: _5b71fe2b,
    name: "register"
  }, {
    path: "/search",
    component: _17da06b0,
    name: "search"
  }, {
    path: "/settings",
    component: _3dd468aa,
    name: "settings"
  }, {
    path: "/use-of-cookie",
    component: _415dea7c,
    name: "use-of-cookie"
  }, {
    path: "/actions/smiles/in",
    component: _36a43235,
    name: "actions-smiles-in"
  }, {
    path: "/actions/smiles/out",
    component: _2a19c624,
    name: "actions-smiles-out"
  }, {
    path: "/actions/viewer/in",
    component: _560bc248,
    name: "actions-viewer-in"
  }, {
    path: "/actions/viewer/out",
    component: _175ac527,
    name: "actions-viewer-out"
  }, {
    path: "/blog/:slug?",
    component: _02deff60,
    name: "blog-slug"
  }, {
    path: "/message/:id?",
    component: _94b77bca,
    name: "message-id"
  }, {
    path: "/profile/:slug?",
    component: _1335fac9,
    name: "profile-slug"
  }, {
    path: "/room/:slug?",
    component: _700a6177,
    name: "room-slug"
  }, {
    path: "/",
    component: _2cc711fa,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
