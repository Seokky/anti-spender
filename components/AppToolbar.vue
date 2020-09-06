<template>
  <v-app-bar
    fixed
    app
  >
    <app-auth-button />

    <v-spacer />

    <div :class="$style.actions">
      <set-the-outlay-dialog />
      <set-the-income-dialog />
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