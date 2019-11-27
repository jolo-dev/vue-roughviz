<template>
  <div id="scatter"></div>
</template>

<script>
import { Scatter } from "rough-viz";
import { putAttrsToObj } from "../mixins/putAttrsToObj";

export default {
  name: "RoughScatter",
  mixins: [putAttrsToObj],
  mounted() {
    let scatterAttr = this.putAttrsToObj;
    scatterAttr.element = "#scatter";
    const scatter = new Scatter(scatterAttr);
    return scatter;
  }
};
</script>
