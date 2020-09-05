<template>
  <vc-donut
    class="month-donut"
    :size="200"
    :thickness="50"
    :total="total"
    :sections="stats"
  >
    <span
      class="small-donut__legend"
      v-text="'Месяц'"
    />
    <span
      class="small-donut__total"
      v-text="total"
    />
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