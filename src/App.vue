<template>
  <div id="app">
    <h1>Rough-Viz Vue Wrapper</h1>
    <h3>Bar</h3>
    <rough-bar
      data="https://raw.githubusercontent.com/jwilber/random_data/master/flavors.csv"
      labels="flavor"
      values="price"
    />
    <h3>Donut</h3>
    <rough-donut
      :data="{
        labels: ['North', 'South', 'East', 'West'],
        values: [10, 5, 8, 3]
      }"
      title="Regions"
      roughness="8"
      :colors="['red', 'orange', 'blue', 'skyblue']"
      stroke="black"
      stroke-width="3"
      fill-style="cross-hatch"
      fill-weight="3.5"
    />

    <h3>Pie</h3>
    <rough-pie
      :data="{
        labels: ['North', 'South', 'East', 'West'],
        values: [10, 5, 8, 3]
      }"
      title="Regions"
      :colors="['red', 'orange', 'blue', 'skyblue']"
      roughness="8"
    />

    <h3>Line</h3>
    <rough-line
      data="https://raw.githubusercontent.com/jwilber/random_data/master/profits.csv"
      y1="revenue"
      y2="cost"
      y3="profit"
    />

    <h3>Stacked Bar</h3>
    <rough-stacked-bar
      :data="[
        { month: 'Jan', A: 20, B: 5, C: 10 },
        { month: 'Feb', A: 25, B: 10, C: 20 },
        { month: 'March', A: 30, B: 50, C: 10 }
      ]"
      labels="month"
      title="Monthly Revenue"
      roughness="2"
      :colors="['blue', '#f996ae', 'skyblue', '#9ff4df']"
      fill-weight="0.35"
      stroke-width="0.5"
      fill-style="cross-hatch"
      stroke="black"
    />
  </div>
</template>

<script>
import RoughBar from "./components/RoughBar.vue";
import RoughDonut from "./components/RoughDonut.vue";
import RoughPie from "./components/RoughPie.vue";
import RoughLine from "./components/RoughLine.vue";
import RoughStackedBar from "./components/RoughStackedBar.vue";

export default {
  name: "App",
  components: {
    RoughBar,
    RoughDonut,
    RoughPie,
    RoughLine,
    RoughStackedBar
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
