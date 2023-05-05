<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Park Alert",
  meta: [{ name: "description", content: "你的臨停小助手" }]
});
</script>
