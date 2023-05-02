<template>
  <div>
    <div class="qrcode-card">
      <div ref="qrcode" class="qrcode-svg"></div>
      <div class="btn-wrapper">
        <v-btn class="mt-2" @click="exportAsPDF">匯出PDF</v-btn>
        <v-btn class="mt-2" @click="exportAsPNG">匯出PNG</v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount, onMounted } from "vue";
import QRCode from "qrcode-generator";

const qrcode = ref<HTMLDivElement | null>(null);
const qrcodeId = ref("");

const exportAsPDF = () => {
  console.log("exportAsPDF pressed!");
};

const exportAsPNG = () => {
  console.log("exportAsPNG pressed!");
  const qr = generateQRCode(qrcodeId.value);
  const canvas = document.createElement("canvas");
  drawQRCodeCanvas(canvas, qr);

  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = "qrcode.png";
  link.click();
};

const drawQRCodeCanvas = (canvas: HTMLCanvasElement, qr: any) => {
  const context = canvas.getContext("2d");
  const size = qr.getModuleCount();
  const cellSize = 10;
  const padding = 20;

  canvas.width = size * cellSize + padding * 2;
  canvas.height = size * cellSize + padding * 2;

  if (context) {
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width + padding * 2, canvas.height + padding * 2);
    for (let row = 0; row < size; row++) {
      for (let column = 0; column < size; column++) {
        if (qr.isDark(row, column)) {
          context.fillStyle = "#000";
        } else {
          context.fillStyle = "#fff";
        }
        context.fillRect(column * cellSize + padding, row * cellSize + padding, cellSize, cellSize);
      }
    }
  }
};

const generateQRCode = (text: string) => {
  const qr = QRCode(0, "H");
  qr.addData(text);
  qr.make();
  return qr;
};

onBeforeMount(() => {
  qrcodeId.value = "parkAlert";
  console.log("onBeforeMount - QRCode ID = " + qrcodeId.value);
});

onMounted(() => {
  const qr = generateQRCode(qrcodeId.value);
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
