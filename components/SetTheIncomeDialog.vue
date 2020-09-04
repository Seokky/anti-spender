<template>
  <v-dialog
    v-model="dialog"
    width="500"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="green"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>{{ $icons.plus }}</v-icon>
        Прибыль
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="headline">
        Регистрация прибыли
      </v-card-title>

      <v-card-text>
        <v-form
          ref="form"
          v-model="isFormValid"
        >
          <v-text-field
            v-model="amount"
            label="Сумма"
            outlined
            required
            :rules="[isAmountValueValid]"
          />
        </v-form>
      </v-card-text>

      <v-divider />

      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          text
          :disabled="!isFormValid"
          @click="accept"
        >
          Подтвердить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      isFormValid: false,
      amount: 0,
    }),

    methods: {
      accept() {
        this.close()
        this.reset()
      },

      reset() {
         this.$refs.form.reset()
         this.$refs.form.resetValidation()
      },

      close() {
        this.dialog = false
      },

      isAmountValueValid: (value) => !!Number(value) && !/[^0-9]/.test(value),
    }
  }
</script>