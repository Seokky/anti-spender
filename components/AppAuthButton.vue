<template>
  <div :class="$style.wrapper">
    <v-menu
      v-if="isAuthenticated"
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          large
          text
          v-bind="attrs"
          v-on="on"
        >
          <div :class="$style.picture">
            <img :src="user.picture">
          </div>
          <span v-text="user.name" />
        </v-btn>
      </template>

      <v-list>
        <v-list-item class="dropdown-item">
          <v-list-item-avatar :size="20">
            <v-icon v-text="$icons.signout" />
          </v-list-item-avatar>
          <v-list-item-title @click="logout">
            Выйти
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-btn
      v-else
      large
      text
      @click="login"
    >
      <div :class="$style.picture" />
      Войти
    </v-btn>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('auth', ['user', 'isAuthenticated'])
  },

  methods: {
    ...mapActions('auth', ['login', 'logout'])
  }
}
</script>

<style lang="scss" module>
.wrapper {
  .picture {
    height: 30px;
    width: 30px;
    margin-right: 6px;
    border-radius: 100%;
    overflow: hidden;
    background: #ccc9c9;

    img {
      width: 100%;
    }
  }
}
</style>

<style lang="scss">
.dropdown-item {
  &:hover,
  &:focus {
    cursor: pointer;
    background: rgba(black, 0.1);
  }
}
</style>