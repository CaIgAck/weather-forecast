<template>
  <div>
    <weaterForecast />
  </div>
</template>

<script>
// @ is an alias to /src
import weaterForecast from "../components/weaterForecast";

export default {
  name: "Home",
  components: {
    weaterForecast
  }
};
</script>
