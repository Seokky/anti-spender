<template>
  <v-btn
    icon
    :class="$style['auth-btn']"
    @click="action"
  >
    <v-icon v-text="icon" />
  </v-btn>
</template>

<script>
export default {
  computed: {
    icon() {
      return this.$auth.loggedIn ? this.$icons.signout : this.$icons.signin
    }
  },

  methods: {
    action() {
      if (this.$auth.loggedIn) {
        this.signout()
      } else {
        this.signin()
      }
    },
    signin() {
      this.$auth.loginWith('google')
    },
    async signout() {
      await this.$auth.logout()
      window.location.reload()
    }
  }
}
</script>

<style lang="scss" module>
.auth-btn {
  margin-left: 8px;
}
</style>