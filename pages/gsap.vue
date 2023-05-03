<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
let a: any;
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  a = gsap.to(".box", { x: 400, fill: "green" });
});
onUnmounted(() => {
  a.revert(); // <- Easy Cleanup!
});
</script>

<template>
  <div class="container">
    <div ref="box" class="box"></div>
  </div>
</template>

<style>
.container {
  display: flex;
}
.box {
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  background: red;
}
</style>
