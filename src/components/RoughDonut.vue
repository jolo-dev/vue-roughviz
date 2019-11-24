<template>
  <div id="donut"></div>
</template>

<script>
import { Donut } from "rough-viz";
import { putAttrsToObj } from "../mixins/putAttrsToObj";

export default {
  name: "RoughDonut",
  mixins: [putAttrsToObj],
  mounted() {
    let donutAttr = this.putAttrsToObj;
    donutAttr.element = "#donut";
    const donut = new Donut(donutAttr);
    return donut;
  }
};
</script>
