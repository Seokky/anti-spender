<template>
  <v-btn
    depressed
    icon
    @click="changeTheme"
  >
    <v-icon>{{ $icons.theme }}</v-icon>
  </v-btn>
</template>


<script>
export default {
  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>