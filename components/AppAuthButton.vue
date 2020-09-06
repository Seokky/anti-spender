<template>
  <div :class="$style.wrapper">
    <v-menu
      v-if="$auth.loggedIn"
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
            <img :src="$auth.user.picture">
          </div>
          <span v-text="$auth.user.name" />
        </v-btn>
      </template>

      <v-list>
        <v-list-item class="dropdown-item">
          <v-list-item-avatar :size="20">
            <v-icon v-text="$icons.signout" />
          </v-list-item-avatar>
          <v-list-item-title @click="signout">
            Выйти
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-btn
      v-else
      large
      text
      @click="signin"
    >
      <div :class="$style.picture" />
      Войти
    </v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    signin() {
      this.$auth.loginWith('google')
    },
    async signout() {
      await this.$auth.logout()
      window.location.reload()
    }
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