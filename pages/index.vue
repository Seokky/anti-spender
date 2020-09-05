<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-card>
      <v-card-actions :class="$style.actions">
        <set-the-outlay-dialog />
        <set-the-income-dialog />
      </v-card-actions>
    </v-card>

    <v-flex :class="$style.stats">
      <v-card :class="$style.stats__row">
        <v-card-text>
          <app-categories-list />

          <div :class="$style['today-donut-wrapper']">
            <stats-charts-factory
              name="today"
              :stats="stats.today"
            />
          </div>
        </v-card-text>
      </v-card>

      <v-card :class="$style.stats__row">
        <v-card-text>
          <v-row
            justify="center"
            align="start"
          >
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

            <stats-charts-factory
              name="month"
              :stats="stats.month"
              :class="$style.donut"
            />
          </v-row>
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

.donut {
  :global(.donut-aside-stats) {
    margin-top: 20px;
    padding-left: 0;
  }

  &:nth-of-type(2) {
    margin: 0 50px;
  }
}

.stats {
  &__row {
    margin-top: 20px;

    &:first-of-type {
      :global(.v-card__text) {
        display: flex;
      }
    }
  }
}

.today-donut-wrapper {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  margin-left: 30px;
}
</style>