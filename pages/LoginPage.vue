<template>
  <div>
    <Header />
    <div class="login-form">
      <v-sheet class="mx-auto">
        <v-form @submit.prevent>
          <v-text-field
            v-model="userName"
            clearable
            class="text-input"
            label="帳號"
            :rules="usernameRules"
            variant="underlined"
          />
          <v-text-field
            v-model="password"
            clearable
            class="text-input"
            label="密碼"
            variant="underlined"
            :rules="passwordRules"
            type="password"
          />
          <v-btn type="submit" block class="mt-2">登入</v-btn>
          <div class="separate-line"></div>
          <p>尚未擁有帳號?<a href="#">立即註冊</a></p>
        </v-form>
      </v-sheet>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from "~/components/Header.vue";

const userName = ref("");
const password = ref("");

const usernameRules = ref([
  (value: any) => {
    if (value) return true;
    return "You must have enter an username.";
  }
]);

const passwordRules = ref([
  (value: any) => {
    if (value) return true;
    return "You must have enter password.";
  }
]);
</script>

<style lang="scss">
$primary-yellow: #f5b700;
$primary-blue: #235789;
$light-blue: #2a86de;
$white: #ffffff;
$gray: #c5c2c2;
$black: #000000;

body {
  background: $primary-yellow;
  margin: 0;
  padding: 0;
}
.login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 340px;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  background: $white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 40px;
  .text-input {
    .v-label {
      font-weight: 600;
      color: $primary-blue;
    }
  }
  .mt-2 {
    color: $white;
    font-size: 16px;
    font-weight: 600;
    background: $light-blue;
  }
  .separate-line {
    margin: 20px 90px 20px 90px;
    background-color: $gray;
    height: 2px;
  }
  p {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color: $black;
    a {
      color: $light-blue;
      margin-left: 10px;
    }
    a:hover {
      color: $primary-blue;
    }
  }
}
</style>
