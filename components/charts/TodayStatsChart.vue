<template>
  <vc-donut
    class="today-donut"
    has-legend
    legend-placement="right"
    :size="320"
    :thickness="50"
    :total="total"
    :sections="stats"
  >
    <span
      :class="$style.legend"
      v-text="'Сегодня'"
    />
    <span
      :class="$style.total"
      v-text="total"
    />
  </vc-donut>
</template>

<script>
export default {
  name: 'TodayStatsChart',

  props: {
    stats: { type: Array, required: true },
    total: { type: Number, required: true },
  },
}
</script>

<style lang="scss" module>
.legend {
  display: inline-block;
  margin-bottom: 8px;
}

.total {
  font-weight: bold;
}
</style>