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

    <v-flex :class="$style.stats">
      <v-card :class="$style.stats__row">
        <v-card-text>
          <v-row>
            <stats-charts-factory
              name="today"
              :stats="stats.today"
              :class="$style.donut"
            />

            <stats-charts-factory
              name="yesterday"
              :stats="stats.yesterday"
              :class="$style.donut"
            />

            <stats-charts-factory
              name="week"
              :stats="stats.week"
              :class="$style.donut"
            />
          </v-row>
        </v-card-text>
      </v-card>

      <v-card :class="$style.stats__row">
        <v-card-text>
          <stats-charts-factory
            name="month"
            :stats="stats.month"
          />
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    stats: {
      today: [
        { category: 'Для дома', value: 500 },
        { category: 'Техника', value: 2000 },
        { category: 'Развлечения', value: 1000 }
      ],
      yesterday: [
        { category: 'Для дома', value: 500 },
        { category: 'Техника', value: 2000 },
        { category: 'Развлечения', value: 1000 },
        { category: 'Кварт. плата', value: 13000 },
        { category: 'Кредиты', value: 2000 },
      ],
      week: [
        { category: 'Для дома', value: 500 },
        { category: 'Техника', value: 2000 },
        { category: 'Развлечения', value: 5000 },
        { category: 'Кварт. плата', value: 13000 },
        { category: 'Кредиты', value: 2000 },
      ],
      month: [
        { category: 'Для дома', value: 2500 },
        { category: 'Техника', value: 6000 },
        { category: 'Развлечения', value: 5000 },
        { category: 'Кварт. плата', value: 13000 },
        { category: 'Кредиты', value: 2000 },
        { category: 'Налоги', value: 7000 }
      ],
    },
  }),
};
</script>

<style lang="scss" module>
.actions {
  justify-content: center;

  button:first-of-type {
    margin-right: 8px;
  }
}

.stats {
  &__row {
    margin-top: 20px;
  }
}

.donut {
  margin: 0 20px;
}
</style>