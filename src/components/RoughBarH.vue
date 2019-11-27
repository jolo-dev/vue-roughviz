<template>
  <div id="barH"></div>
</template>

<script>
import { BarH } from "rough-viz";
import { putAttrsToObj } from "../mixins/putAttrsToObj";

export default {
  name: "RoughBarH",
  mixins: [putAttrsToObj],
  mounted() {
    let barHAttr = this.putAttrsToObj;
    barHAttr.element = "#barH";
    const barH = new BarH(barHAttr);
    return barH;
  }
};
</script>
