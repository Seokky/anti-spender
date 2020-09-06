import Vue from 'vue';
import { mdiGithub, mdiPlus, mdiMinus, mdiBrightness6, mdiLogin, mdiLogout } from '@mdi/js'

Vue.prototype.$icons = {
  github: mdiGithub,
  plus: mdiPlus,
  minus: mdiMinus,
  theme: mdiBrightness6,
  signin: mdiLogin,
  signout: mdiLogout
}