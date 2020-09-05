<template>
  <component
    :is="component"
    :stats="items"
    :total="total || 100"
  />
</template>

<script>
import { categories } from '~/constants'
import TodayStatsChart from './TodayStatsChart'
import YesterdayStatsChart from './YesterdayStatsChart'
import WeekStatsChart from './WeekStatsChart'
import MonthStatsChart from './MonthStatsChart'

export default {
  components: {
    TodayStatsChart, YesterdayStatsChart, WeekStatsChart, MonthStatsChart
  },

  props: {
    stats: { type: Array, required: true },
    name: { type: String, required: true }
  },

  data: () => ({
    categories,
  }),

  computed: {
    component() {
      switch (this.name) {
        case 'today':
          return 'TodayStatsChart';
        case 'yesterday':
          return 'YesterdayStatsChart';
        case 'week':
          return 'WeekStatsChart';
        default:
          return 'MonthStatsChart';
      }
    },
    topCategory() {
      const { stats } = this
      return stats.sort((a, b) => b.value - a.value)[0].category
    },
    total() {
      return this.stats.reduce((acc, { value }) => acc + value, 0)
    },
    items() {
      return this.stats.map(({ category, value }) => ({
        label: category,
        color: categories.find((c) => c.name === category).color,
        value,
      }))
    }
  },

  mounted() {
    /* fix the donut's artifact https://github.com/dumptyd/vue-css-donut-chart/issues/32 */
    const donut = document.querySelector(`.${this.name}-donut .cdc`)
    const topCategoryColor = categories.find((c) => c.name === this.topCategory).color

    donut.style.backgroundColor = topCategoryColor
  },
}
</script>

<style lang="scss">
.v-application.theme--light .cdc-text {
  color: rgba(black, 0.9);
}

.v-application.theme--dark {
  .cdc-overlay {
    background-color: rgb(30, 30, 30) !important;
  }

  .cdc-text {
    color: white;
  }
}
</style>