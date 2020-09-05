<template>
  <vc-donut
    class="week-donut"
    has-legend
    legend-placement="bottom"
    :size="200"
    :thickness="50"
    :total="total"
    :sections="stats"
  >
    <span
      class="small-donut__legend"
      v-text="'Неделя'"
    />
    <span
      class="small-donut__total"
      v-text="total"
    />

    <template slot="legend">
      <donut-aside-stats :stats="stats" />
    </template>
  </vc-donut>
</template>

<script>
export default {
  name: 'WeekStatsChart',

  props: {
    stats: { type: Array, required: true },
    total: { type: Number, required: true },
  },
}
</script>
