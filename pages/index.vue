<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex :class="$style.stats">
      <v-card :class="$style.stats__row">
        <v-card-text>
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
          <v-row>
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
        { category: 'Развлечения', value: 1000 },
        { category: 'Интернет-провайдер', value: 1000 }
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
        { category: 'Интернет-провайдер', value: 1000 }
      ],
      month: [
        { category: 'Для дома', value: 2500 },
        { category: 'Техника', value: 6000 },
        { category: 'Развлечения', value: 5000 },
        { category: 'Кварт. плата', value: 13000 },
        { category: 'Кредиты', value: 2000 },
        { category: 'Налоги', value: 7000 },
        { category: 'Интернет-провайдер', value: 1000 }
      ],
    },
  }),
};
</script>

<style lang="scss" module>
.donut {
  :global(.donut-aside-stats) {
    margin-top: 20px;
    padding-left: 0;
  }

  &:nth-of-type(2) {
    margin: 0 60px;
  }
}

.stats {
  &__row {
    margin-top: 10px;

    :global(.row) {
      justify-content: center;
      align-items: flex-start;
      margin: 0 10px 0 20px;
    }

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
  margin-left: 40px;
}
</style>