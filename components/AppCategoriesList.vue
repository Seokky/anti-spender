<template>
  <div :class="$style.list">
    <li
      v-for="category in categories"
      :key="category.color"
      :class="[$style.list__item, $style['list-item']]"
    >
      <span
        :class="$style['list-item__color']"
        :style="{ background: category.color }"
      />

      <span
        :class="$style['list-item__name']"
        v-text="category.name"
      />
    </li>
  </div>
</template>

<script>
import { categories } from '~/constants'

export default {
  data: () => ({
    categories
  })
}
</script>

<style lang="scss" module>
.list {
  max-height: 350px;
  overflow-y: auto;
  list-style: none;
  padding-right: 15px;

  &__item {
    margin: 4px 0;
  }

  &-item {
    &__color {
      --size: 14px;

      display: inline-block;
      height: var(--size);
      width: var(--size);
      margin-right: 4px;
      border-radius: 2px;
    }

    &__name {
      font-size: 16px;
    }
  }
}
</style>