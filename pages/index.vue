<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex>
      <v-card>
        <v-card-actions :class="$style.actions">
          <set-the-outlay-dialog />
          <set-the-income-dialog />
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style lang="scss" module>
.actions {
  *:first-of-type {
    margin-right: 8px;
  }
}
</style>