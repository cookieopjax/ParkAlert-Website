<template>
  <div>
    <!-- <Header /> -->
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
          <div class="social-media">
            <v-btn icon="mdi-google" size="small" color="indigo-darken-2"></v-btn>
          </div>
        </v-form>
      </v-sheet>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { apiSignin } from "../Composables/api";

const userName = ref("");
const password = ref("");

const usernameRules = ref([
  (value: any) => {
    if (value) return true;
    return "帳號輸入不可以為空!";
  }
]);

const passwordRules = ref([
  (value: any) => {
    if (value) return true;
    return "密碼輸入不可以為空!";
  }
]);

async function SignIn() {
  try {
    const res = await apiSignin({
      email: userName.value,
      password: password.value
    });
    // use res.data to do something
    return res;
  } catch (e) {
    // error handling
    console.log(e);
  }
}
</script>

<style lang="scss">
body {
  background: rgb(var(--v-theme-primary));
  margin: 0;
  padding: 0;
}

.v-application {
  background-color: rgb(var(--v-theme-primary));
}

.login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 340px;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  background: rgb(var(--v-theme-white));
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 40px;
  .text-input {
    .v-label {
      font-weight: 600;
      color: rgb(var(--v-theme-secondary));
    }
  }
  .mt-2 {
    color: rgb(var(--v-theme-white));
    font-size: 16px;
    font-weight: 600;
    background: rgb(var(--v-theme-secondaryVariant));
  }
  .separate-line {
    margin: 20px 90px 20px 90px;
    background-color: rgb(var(--v-theme-gray));
    height: 2px;
  }
  p {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color: rgb(var(--v-theme-black));
    a {
      color: rgb(var(--v-theme-secondaryVariant));
      margin-left: 10px;
    }
    a:hover {
      color: rgb(var(--v-theme-secondary));
    }
  }
  .social-media {
    display: flex;
    justify-content: center;
    margin: 20px 0 0 0;
  }
}
</style>
