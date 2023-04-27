<template>
  <div>
    <!-- <Header /> -->
    <div class="login-form">
      <v-sheet class="mx-auto">
        <v-form @submit.prevent="submit">
          <v-text-field
            v-model="account.email"
            clearable
            class="text-input"
            label="電子郵件"
            :rules="emailRules"
            variant="underlined"
          />
          <v-text-field
            v-model="account.password"
            clearable
            class="text-input"
            label="密碼"
            variant="underlined"
            :rules="passwordRules"
            type="password"
          />
          <v-btn type="submit" block class="mt-2">登入</v-btn>
          <div class="separate-line"></div>
          <p>尚未擁有帳號?<NuxtLink to="/registration">立即註冊</NuxtLink></p>
          <div class="social-media">
            <v-btn icon="mdi-google" size="small" color="indigo-darken-2"></v-btn>
          </div>
        </v-form>
      </v-sheet>
    </div>
  </div>
</template>

<script lang="ts" setup>
const account = reactive({
  email: "",
  password: ""
});

const emailRules = ref([
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

const submit = () => {
  console.log(JSON.stringify(account));
};
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
