<template>
  <div>
    <div color="secondary" class="header-container">
      <v-icon class="car-icon" size="45" icon="mdi-car-hatchback"></v-icon>
      <div class="title">CarChat</div>
      <v-btn class="menu-icon" size="45" icon="mdi-menu" variant="plain"></v-btn>
      <!-- <v-icon class="menu-icon" size="45" icon="mdi-menu"></v-icon> -->
    </div>
  </div>
</template>
<script lang="ts">
export default {};
</script>
<style lang="scss">
$primary-blue: #235789;
$white: #ffffff;
$gray: #c5c2c2;
.header-container {
  background-color: rgb(var(--v-theme-secondary));
  position: fixed;
  width: 100%;
  height: 50px;
  left: 0px;
  top: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.25);
  .car-icon {
    size: 50px;
    color: rgb(var(--v-theme-white));
    position: fixed;
    left: 15px;
  }
  .title {
    color: rgb(var(--v-theme-white));
    font-size: 32px;
    font-weight: 600;
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .menu-icon {
    size: 50px;
    color: rgb(var(--v-theme-white));
    position: fixed;
    right: 15px;
  }
}

@media screen and (max-width: 900px) {
  .header-container {
    height: 90px;
    .title {
      font-size: 40px;
    }
  }
}
</style>
