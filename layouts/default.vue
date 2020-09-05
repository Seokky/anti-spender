<template>
  <v-app>
    <v-app-bar
      fixed
      app
    >
      <v-toolbar-title>Anti Spender</v-toolbar-title>
      <v-spacer />
      <div :class="$style.actions">
        <set-the-outlay-dialog />
        <set-the-income-dialog />
      </div>
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <app-footer />
  </v-app>
</template>

<style lang="scss">
@import '~/assets/styles/vuetify-reassign';
</style>

<style lang="scss" module>
.actions {
  button:first-of-type {
    margin-right: 6px;
  }
}
</style>