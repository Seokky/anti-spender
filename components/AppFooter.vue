<template>
  <v-footer
    fixed
    app
    dark
  >
    <v-btn
      depressed
      icon
      @click="changeTheme"
    >
      <v-icon>{{ $icons.theme }}</v-icon>
    </v-btn>

    <v-spacer />

    <a
      target="_blank"
      href="https://github.com/Seokky/anti-spender"
      :class="$style.link"
    >
      <v-icon>{{ $icons.github }}</v-icon>
      <span :class="$style['link__text']">GitHub</span>
    </a>
  </v-footer>
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

<style lang="scss" module>
.link {
  text-decoration: none;
  color: white !important;
  display: flex;
  justify-content: center;
  overflow: hidden;

  :global(.v-icon) {
    margin-right: 4px;
  }

  &__text {
    position: relative;
    top: 1px;
  }
}
</style>