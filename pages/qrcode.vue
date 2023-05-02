<template>
  <div>
    <div class="qrcode-card">
      <div ref="qrcode" class="qrcode-svg"></div>
      <div class="btn-wrapper">
        <v-btn class="mt-2">匯出PDF</v-btn>
        <v-btn class="mt-2">匯出PNG</v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount, onMounted } from "vue";
import QRCode from "qrcode-generator";

const qrcode: Ref<HTMLElement | null> = ref(null);
const qrcodeId = ref("");

onBeforeMount(() => {
  qrcodeId.value = "parkAlert";
  console.log("onBeforeMount - QRCode ID = " + qrcodeId.value);
});

onMounted(() => {
  console.log("onMounted");
  const qr = QRCode(0, "M");
  qr.addData(qrcodeId.value);
  qr.make();
  if (qrcode.value) {
    qrcode.value.innerHTML = qr.createSvgTag({ cellSize: 10 });
  }
});
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

.qrcode-card {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 340px;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  background: rgb(var(--v-theme-white));
  box-shadow: 0px 4px 4px (rgba(0, 0, 0, 0.25));
  border-radius: 20px;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .btn-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    .mt-2 {
      color: rgb(var(--v-theme-white));
      background: rgb(var(--v-theme-secondaryVariant));
      border-radius: 10px;
      width: 158px;
      height: 40px;
      font-size: 16px;
      font-weight: 600;
      margin: 10px 0;
    }
  }
}
</style>
