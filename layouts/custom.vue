<template>
  <div class="bg-rose-100 py-2">
    <p class="px-6 py-4 text-2xl text-gray-700">
      使用 <span class="font-bold text-rose-500">Custom</span> 布局
    </p>
    <slot />
  </div>
</template>

<style lang="scss">
$main-color: #f7f5e6;
body {
  background-color: $main-color;
}
#topicImg {
  background-color: white;
  height: 30rem;
}
</style>
