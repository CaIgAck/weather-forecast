<template>
  <v-row>
    <v-card class="mx-auto" max-width="400" v-if="getWeather.fail">
      <div>извинте ошибка с соединением</div>
    </v-card>
    <v-card v-else class="mx-auto">
      <h2 v-if="getWeather.loading">loading</h2>
      <div v-else>
        <v-card-title>Погода</v-card-title>
        <v-card-text class="text--primary">
          сегодня:
          <div>
            <h1 class="py-2">
              {{ Math.floor(getWeather.main.temp - 273) }} градусов
            </h1>
            <h3 class="py-2">облачность: {{ getWeather.weather[0].main }}</h3>
            <span class="py-2"
              >скорость ветра: {{ getWeather.wind.speed }} м/c
            </span>
          </div>
        </v-card-text>
      </div>
    </v-card>
  </v-row>
</template>

<script>
import { WEARTER_GET } from "../store/actiontypes/action-types";

export default {
  name: "weaterForecast",
  mounted() {
    this.$store.dispatch(WEARTER_GET);
  },
  computed: {
    getWeather() {
      return this.$store.getters.todoWeather;
    }
  }
};
</script>

<style scoped></style>
