import * as fb from 'firebase'
import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

Vue.use(firestorePlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  created() {
    fb.initializeApp({
      apiKey: "AIzaSyCU0sxFp-Qebu--NGunZDa9saEzVayqW_Y",
      authDomain: "vuevlad.firebaseapp.com",
      databaseURL: "https://vuevlad.firebaseio.com",
      projectId: "vuevlad",
      storageBucket: "vuevlad.appspot.com",
      messagingSenderId: "1092549475395",
      appId: "1:1092549475395:web:19577a6fb9b3ed0ee8a8f6",
      measurementId: "G-P2D3F8YS0Q"
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
    this.$store.dispatch('fetchAds')
  }
}).$mount('#app')