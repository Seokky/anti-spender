<template>
  <v-snackbar
    v-model="$snackbarsManager.state.needAuth"
    right
    :timeout="2000"
    :dark="$vuetify.theme.dark"
    :light="!$vuetify.theme.dark"
  >
    Войдите в приложение, чтобы пользоваться его функциями

    <template v-slot:action="{ attrs }">
      <v-btn
        color="pink"
        text
        v-bind="attrs"
        @click="$snackbarsManager.state.needAuth = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>