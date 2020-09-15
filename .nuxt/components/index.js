export { default as Paginate } from '../..\\components\\Paginate.vue'
export { default as SendMessageModal } from '../..\\components\\SendMessageModal.vue'
export { default as Footer } from '../..\\components\\static\\Footer.vue'
export { default as Header } from '../..\\components\\static\\Header.vue'

export const LazyPaginate = import('../..\\components\\Paginate.vue' /* webpackChunkName: "components_Paginate" */).then(c => c.default || c)
export const LazySendMessageModal = import('../..\\components\\SendMessageModal.vue' /* webpackChunkName: "components_SendMessageModal" */).then(c => c.default || c)
export const LazyFooter = import('../..\\components\\static\\Footer.vue' /* webpackChunkName: "components_static/Footer" */).then(c => c.default || c)
export const LazyHeader = import('../..\\components\\static\\Header.vue' /* webpackChunkName: "components_static/Header" */).then(c => c.default || c)
