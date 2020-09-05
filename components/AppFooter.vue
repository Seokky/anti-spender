<template>
  <v-footer
    fixed
    app
    dark
  >
    <app-theme-toggler />

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