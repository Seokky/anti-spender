<template>
  <v-dialog
    v-model="dialog"
    width="500"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="error"
        large
        v-bind="attrs"
        v-on="on"
      >
        <v-icon v-text="$icons.minus" />
        Расход
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="headline">
        Регистрация расхода
      </v-card-title>

      <v-card-text>
        <v-form
          ref="form"
          v-model="isFormValid"
        >
          <v-select
            v-model="category"
            label="Категория"
            filled
            required
            :items="categories"
            :rules="[isCategoryValueValid]"
          />
          <v-text-field
            v-model.number="amount"
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
  import { categories } from '~/constants'

  export default {
    data: () => ({
      dialog: false,
      isFormValid: false,
      category: '',
      amount: 0,
      categories,
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

      isCategoryValueValid: (value) => !!value,
    }
  }
</script>