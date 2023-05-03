<template>
  <div>Chat now</div>
  <p v-for="(item, index) in msg" :key="index">{{ item }}</p>
  <input v-model="inputValue" type="text" />
  <button @click="sendData">send chat</button>
</template>
<script setup>
import io from "socket.io-client";
const inputValue = ref("");
const msg = reactive([]);
let socket = null;

// 送出訊息
function sendData() {
  socket.emit("newMessage", inputValue.value);
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
    console.log(res);
    msg.push(res);
  });
});
</script>
<style>
input,
button {
  border: 1px solid black;
}
</style>
