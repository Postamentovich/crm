import Vue from "vue";
import Vuelidate from "vuelidate";
import Firebase from "firebase/app";
import Paginate from "vuejs-paginate";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import dateFilter from "./filters/date.filter";
import currencyFilter from "./filters/currency.filter";
import messagePlugin from "@/utils/message.plugin";
import Loader from "@/components/app/Loader";
import tooltipDerective from "@/directives/tooltip.directive";
import "firebase/auth";
import "firebase/database";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

Vue.config.productionTip = false;

Vue.filter("date", dateFilter);

Vue.filter("currency", currencyFilter);

Vue.use(Vuelidate);

Vue.use(messagePlugin);

Vue.directive("tooltip", tooltipDerective);

Vue.component("Loader", Loader);

Vue.component("Paginate", Paginate);

const firebaseConfig = {
  apiKey: "AIzaSyDPLCmRqh932PVcQMMmCr0g_GOqWUvTtZY",
  authDomain: "vue-crm-train.firebaseapp.com",
  databaseURL: "https://vue-crm-train.firebaseio.com",
  projectId: "vue-crm-train",
  storageBucket: "vue-crm-train.appspot.com",
  messagingSenderId: "875940046695",
  appId: "1:875940046695:web:2361f642b16a5c93ae71c2",
  measurementId: "G-Y7RKFRP7JN"
};

Firebase.initializeApp(firebaseConfig);

let app;

Firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
