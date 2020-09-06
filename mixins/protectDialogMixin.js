export default {
  watch: {
    dialog(value) {
      if (value && !this.$store.state.auth.isAuthenticated) {
        this.$nextTick(this.close)
        this.$snackbarsManager.show('needAuth')
      }
    }
  },
}