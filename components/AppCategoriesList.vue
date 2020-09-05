<template>
  <ul :class="[$style.list, 'app-categories-list']">
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
  </ul>
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
  max-height: 300px;
  overflow-y: auto;
  list-style: none;
  padding-left: 0 !important;
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

<style lang="scss" scoped>
.app-categories-list {
  &::-webkit-scrollbar {
    width: 6px;               /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: transparent;        /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c9c6c6;    /* color of the scroll thumb */
    border-radius: 25px;       /* roundness of the scroll thumb */
    border: 3px solid transparent;  /* creates padding around scroll thumb */
  }
}
</style>