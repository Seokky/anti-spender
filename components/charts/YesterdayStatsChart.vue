<template>
  <vc-donut
    class="yesterday-donut"
    :size="200"
    :thickness="50"
    :total="total"
    :sections="stats"
  >
    <span
      class="small-donut__legend"
      v-text="'Вчера'"
    />
    <span
      class="small-donut__total"
      v-text="total"
    />
  </vc-donut>
</template>

<script>
export default {
  name: 'YesterdayStatsChart',

  props: {
    stats: { type: Array, required: true },
    total: { type: Number, required: true },
  },
}
</script>
