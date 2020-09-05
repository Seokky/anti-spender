<template>
  <v-btn
    depressed
    icon
    @click="toggleTheme"
  >
    <v-icon>{{ $icons.theme }}</v-icon>
  </v-btn>
</template>


<script>
export default {
  mounted() {
    this.setThemeFromStorage()
  },

  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      this.saveThemeToStorage()
    },
    saveThemeToStorage() {
      localStorage.setItem('anti-spender:dark', Number(this.$vuetify.theme.dark))
    },
    setThemeFromStorage() {
      const storedValue = localStorage.getItem('anti-spender:dark')
      this.$vuetify.theme.dark = Boolean(Number(storedValue))
    }
  }
}
</script>