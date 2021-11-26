import Vue from "vue";
import VueRouter from 'vue-router';
import App from "./App.vue";
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import listadoReservas from "./components/listadoReservas/listadoReservas.vue";

Vue.use(VueRouter);
Vue.use(BootstrapVue)

const myRoutes = [
  {path: "/", component: listadoReservas},
]

const router = new VueRouter({
  routes: myRoutes
})

new Vue({
  el: "#app",
  router: router,
  render: h => h(App)
})