import Vue from 'vue'

class SnackbarsManager {
  state = Vue.observable({
    needAuth: false
  })

  show(snackbar) {
    if (snackbar in this.state) {
      this.state[snackbar] = true
    } else {
      throw new Error(`Snackbar ${snackbar} does not exist`)
    }
  }
}

Vue.prototype.$snackbarsManager = new SnackbarsManager()