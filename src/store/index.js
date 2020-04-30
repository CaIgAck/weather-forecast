import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { GET_WEATHER } from "./mutationtypes/mutation-types";
import { WEARTER_GET } from "./actiontypes/action-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weather: {
      main: {
        temp: null
      },
      weather: [
        {
          main: null
        }
      ],
      wind: {
        speed: null
      }
    },
    loading: true,
    fail: false,
    status: 200
  },
  getters: {
    todoweather: state => state.weather
  },
  mutations: {
    [GET_WEATHER](state, result) {
      state.weather = result;
    }
  },
  actions: {
    [WEARTER_GET](context) {
      axios
        .get(
          "https://community-open-weather-map.p.rapidapi.com/weather?lat=55.47&lon=49.7&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=Kazan",
          {
            headers: {
              "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
              "x-rapidapi-key":
                "489a96d491msh54c10c1aa291386p1fc25djsnf5a3a81bae62"
            }
          }
        )
        .then(result => {
          context.commit(GET_WEATHER, result.data);
        })
        .catch(() => {
          if (this.status !== status) {
            this.fail = true;
          }
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },
  modules: {}
});
