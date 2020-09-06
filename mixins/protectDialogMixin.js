export default {
  watch: {
    dialog(value) {
      if (value && !this.$auth.loggedIn) {
        this.$nextTick(this.close)
        this.$snackbarsManager.show('needAuth')
      }
    }
  },
}