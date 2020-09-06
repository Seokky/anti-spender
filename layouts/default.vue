<template>
  <v-app>
    <app-toolbar />

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <app-footer />

    <app-need-auth-snackbar />
  </v-app>
</template>

<style lang="scss">
@import '~/assets/styles/vuetify-reassign';
</style>