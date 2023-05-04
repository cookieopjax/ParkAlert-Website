<template>
  <!-- <div>Chat now</div>
  <p v-for="(item, index) in msg" :key="index">{{ item }}</p>
  <input v-model="inputValue" type="text" />
  <button @click="sendData">send chat</button> -->
  <div>
    <v-card class="chat-wrapper">
      <v-banner class="chat-header text-h6 font-weight-regular" sticky>
        <v-icon size="22" icon="mdi-keyboard-backspace" @click="goBackToMatch"></v-icon>
        {{ $route.query.email }}
      </v-banner>

      <v-card-text>
        <div v-for="(item, index) in msg" :key="index">{{ item }}</div>
      </v-card-text>
      <div class="input-group">
        <input v-model="inputValue" type="text" placeholder="輸入訊息" />
        <span @click="sendData">發送</span>
      </div>
    </v-card>
  </div>
</template>
<script setup>
import io from "socket.io-client";
const inputValue = ref("");
const msg = ref([]);
const router = useRouter();
let socket = null;

// 送出訊息
function sendData() {
  socket.emit("newMessage", inputValue.value);
  inputValue.value = "";
}

// 返回 match 頁面
function goBackToMatch() {
  router.go(-1);
}

onMounted(() => {
  socket = io("https://parkalert.onrender.com", {
    extraHeaders: {
      Authorization: "Bearer " + localStorage.getItem("token")
    }
  });
  // 連接上聊天室
  socket.on("connect", () => {
    console.log("Connected to Socket.io server");
  });

  socket.on("disconnect", () => {
    console.log("已斷連");
    navigateTo("/login");
  });

  // 連結失敗
  socket.on("connect_error", (error) => {
    console.log("Connection error:", error);
  });

  // 接收訊息
  socket.on("onMessage", (res) => {
    msg.value = res;
  });
});
</script>
<style lang="scss">
// input,
// button {
//   border: 1px solid black;
// }

body {
  background-color: rgb(var(--v-theme-primary));
  margin: 0;
  padding: 0;
}

.v-application {
  background-color: rgb(var(--v-theme-primary));
}

.chat-wrapper {
  position: absolute;
  top: 54%;
  left: 50%;
  width: calc(100% - 20px);
  height: calc(100% - 94px);
  // margin-top: 64px;
  background: rgb(var(--v-theme-white));
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 0;
  .chat-header {
    display: flex;
    justify-content: center;
    align-items: center;
    .v-icon {
      position: fixed;
      left: 20px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .v-card-text {
    overflow: auto;
    height: calc(100% - 110px);
  }
  .input-group {
    width: 100%;
    // background-color: red;
    position: absolute;
    bottom: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      background-color: #d7d7d7;
      height: 34px;
      width: calc(100% - 20px);
      border: none;
      outline: none;
      box-sizing: border-box;
      padding: 10px 60px 10px 20px;
      border-radius: 16px;
    }
    span {
      position: fixed;
      right: 25px;
      font-weight: 600;
      color: rgb(var(--v-theme-secondary));
      &:hover {
        cursor: pointer;
        color: rgb(var(--v-theme-secondaryVariant));
      }
    }
  }
}
</style>
