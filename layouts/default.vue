<template>
  <v-app>
    <v-app-bar :elevation="10" color="secondary" prominent position="relative">
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>My files1</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn variant="text" icon="mdi-magnify"></v-btn>
      <v-btn variant="text" icon="mdi-filter"></v-btn>
      <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="top" temporary>
      <v-list :items="items"></v-list>
    </v-navigation-drawer>

    <v-content>
      <v-card>
        <slot />
      </v-card>
    </v-content>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: "Foo",
        value: "foo"
      },
      {
        title: "Bar",
        value: "bar"
      },
      {
        title: "Fizz",
        value: "fizz"
      },
      {
        title: "Buzz",
        value: "buzz"
      }
    ]
  }),

  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>
<style lang="scss">
.v-application__wrap {
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  max-width: 100%;
  min-height: 10vh;

  position: relative;
}
</style>
