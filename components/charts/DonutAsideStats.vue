<template>
  <ul :class="[$style.categories, 'donut-aside-stats']">
    <li
      v-for="stat in stats"
      :key="stat.color"
      :class="[$style.categories__item, $style['categories-item']]"
    >
      <span
        :class="$style['categories-item__color']"
        :style="{ background: stat.color }"
      />

      <span
        :class="$style['categories-item__label']"
        v-text="stat.label"
      />

      <span
        :class="$style['categories-item__value']"
        v-text="stat.value"
      />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    stats: { type: Array, required: true },
  },
}
</script>

<style lang="scss" module>
.categories {
  list-style: none;

  &__item {
    margin: 6px 0;
  }

  &-item {
    font-size: 16px;

    &__color {
      --size: 14px;

      display: inline-block;
      height: var(--size);
      width: var(--size);
      margin-right: 4px;
      border-radius: 2px;
    }

    &__label {
      margin-right: 6px;
    }

    &__value {
      font-weight: bold;
    }
  }
}
</style>