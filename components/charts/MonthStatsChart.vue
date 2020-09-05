<template>
  <vc-donut
    class="month-donut"
    :size="320"
    :thickness="50"
    :total="total"
    :sections="stats"
  >
    В этом месяце
  </vc-donut>
</template>

<script>
export default {
  name: 'MonthStatsChart',

  props: {
    stats: { type: Array, required: true },
    total: { type: Number, required: true },
  },
}
</script>
