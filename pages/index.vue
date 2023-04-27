<template>
  <div>
    <div>官網</div>
    <v-container id="topicImg">
      <v-row no-gutters>
        <v-col>
          <v-sheet class="ma-2 pa-2"> One of three columns21332 </v-sheet>
          <NuxtLink to="/firstPage">前往 firstPage</NuxtLink>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script></script>
<style lang="scss">
$main-color: #f7f5e6;
body {
  background-color: $main-color;
}
.v-application {
  background-color: $main-color;
}
#topicImg {
  background-color: white;
  height: 30rem;
}
</style>
