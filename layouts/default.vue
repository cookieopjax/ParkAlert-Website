<template>
  <v-app>
    <v-app-bar elevation="10" color="secondary" prominent position="relative">
      <v-btn variant="text" icon="mdi-arrow-up-bold-box-outline"></v-btn>
      <v-toolbar-title>carChat</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn variant="text" icon="mdi-magnify"></v-btn>
      <v-btn variant="text" icon="mdi-dots-vertical"></v-btn> -->
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="top" temporary>
      <v-list :items="items"></v-list>
      <v-spacer></v-spacer>
      <div v-if="windowWidth <= '600'" style="margin-left: 30%">
        <v-btn text>登入</v-btn>
        <v-btn text>註冊</v-btn>
      </div>
      <div v-else>
        <v-btn variant="text">登入</v-btn>
        <v-btn variant="text">註冊</v-btn>
      </div>
    </v-navigation-drawer>

    <v-container>
      <v-card>
        <slot />
      </v-card>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    windowWidth: 0,
    drawer: false,
    group: null,
    items: [
      {
        title: "用戶資料",
        value: "用戶資料"
      },
      {
        title: "尋找車主",
        value: "尋找車主"
      },
      {
        title: "產生條碼",
        value: "產生條碼"
      }
    ]
  }),

  watch: {
    group() {
      this.drawer = false;
    }
  },
  mounted() {
    // 取得初始視窗大小
    this.getWindowSize();

    // 監聽視窗大小的變化，並更新資料中的值
    window.addEventListener("resize", this.getWindowSize);
  },
  beforeUnMounted() {
    // 移除監聽器，避免記憶體洩漏
    window.removeEventListener("resize", this.getWindowSize);
  },
  methods: {
    getWindowSize() {
      this.windowWidth = window.innerWidth;
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
  min-height: 0vh;

  position: relative;
}
</style>
