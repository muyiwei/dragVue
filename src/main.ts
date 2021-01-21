import Vue from 'vue'
import App from './App.vue'
 import router from './router'
 import T from "./T.js"
// import store from './store'
// import './registerServiceWorker'
// import "./components/test"
// import "../../bpmvue/src/test/index.js"
Vue.config.productionTip = false
import HelloWorld from "./components/HelloWorld.vue"
//import I18n from "vue-i18n";
// Vue.use(I18n);
// const i18n = new I18n({
//   locale:"en",
//   messages: {
//     zh: {
//       test:"测试"
//     },
//     en: {
//       test:"test"
//     }
//   }
// });

console.log(App,"App")
let a:T11 = {
  name:"11",
  age:12
};
new Vue({
  router,
  el:"#app",
  render: (h, ref) => {
    console.log(ref,"ref");
    return h(App);
  },

})
