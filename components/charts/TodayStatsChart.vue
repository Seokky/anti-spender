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
    Сегодня
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
