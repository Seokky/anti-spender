<template>
  <v-app-bar
    fixed
    app
  >
    <v-toolbar-title>Anti Spender</v-toolbar-title>

    <v-spacer />

    <div :class="$style.actions">
      <set-the-outlay-dialog />
      <set-the-income-dialog />

      <app-auth-button />
    </div>
  </v-app-bar>
</template>

<style lang="scss" module>
.actions {
  button:first-of-type {
    margin-right: 6px;
  }
}
</style>