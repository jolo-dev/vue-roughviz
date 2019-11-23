<template>
  <div id="app">
    <h1>Rough-Viz Vue Wrapper</h1>
    <h3>Bar</h3>
    <Bar
      data="https://raw.githubusercontent.com/jwilber/random_data/master/flavors.csv"
      labels="flavor"
      values="price"
    />
    <h3>Donut</h3>
    <Donut
      :data="{ 
        labels: ['North', 'South', 'East', 'West'], 
        values: [10, 5, 8, 3] 
      }" 
      title=Regions
      roughness="8"
      :colors="['red', 'orange', 'blue', 'skyblue']"
      stroke=black
      strokeWidth="3"
      fillStyle="cross-hatch"
      fillWeight="3.5"
    />

    <h3>Pie</h3>
    <Pie
      :data="{
        labels: ['North', 'South', 'East', 'West'],
        values: [10, 5, 8, 3]
      }"
      title=Regions
      :colors="['red', 'orange', 'blue', 'skyblue']"
      roughness="8"
    />
  </div>
</template>

<script>
import Bar from "./components/Bar.vue";
import Donut from "./components/Donut.vue";
import Pie from "./components/Pie.vue";

export default {
  name: "app",
  components: {
    Bar,
    Donut,
    Pie
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
