import Vue from 'vue'
import App from './App.vue'

import "bootstrap/js/src/dropdown.js"
import "bootstrap/js/src/collapse.js"

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhoneAlt, faArrowRight, faFolder, faUsers, faPlusSquare, faTimes, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { faBandcamp, faSquarespace, faFacebookF, faTwitter, faInstagram, faYoutube, faLinkedinIn, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPhoneAlt, faArrowRight, faFolder, faBandcamp, faUsers, faSquarespace, faPlusSquare, faTimes, faCommentAlt, faFacebookF, faTwitter, faInstagram, faYoutube, faLinkedinIn, faTiktok);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
