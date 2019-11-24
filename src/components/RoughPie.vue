<template>
  <div id="pie"></div>
</template>

<script>
import { Pie } from "rough-viz";
import { putAttrsToObj } from "../mixins/putAttrsToObj";

export default {
  name: "RoughPie",
  mixins: [putAttrsToObj],
  mounted() {
    let pieAttr = this.putAttrsToObj;
    pieAttr.element = "#pie";
    const pie = new Pie(pieAttr);
    return pie;
  }
};
</script>
