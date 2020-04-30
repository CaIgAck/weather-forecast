<template>
  <v-app>
    <v-tabs dark style="max-height: 70px;">
      <div>
        <h2 class="pt-2 pl-4">Прогноз погоды</h2>
      </div>
      <v-spacer></v-spacer>
      <v-tab
        ><router-link to="/" class="btn white--text">Home</router-link></v-tab
      >
      <v-tab
        ><router-link to="/about" class="btn white--text">about</router-link></v-tab
      >
    </v-tabs>
    <router-view> </router-view>
  </v-app>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss">
.btn {
  text-decoration: none;
  color: white;
}
</style>
