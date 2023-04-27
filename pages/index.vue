<template>
  <div>
    <div>官網</div>
    <v-container id="topicImg">
      <v-row no-gutters>
        <v-col>
          <v-sheet class="ma-2 pa-2"> One of three columns </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts" setup>
import { apiIsAuth } from "../composables/api";
const data = ref();

async function isAuth() {
  try {
    const res = await apiIsAuth();
    // use res.data to do something
    data.value = res;
  } catch (e) {
    // error handling
    console.log(e);
  }
}

onMounted(() => {
  isAuth();
});
</script>
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
