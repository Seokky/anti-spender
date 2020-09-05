<template>
  <vc-donut
    class="today-donut"
    :size="200"
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
