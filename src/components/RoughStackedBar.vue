<template>
  <div id="stacked-bar"></div>
</template>

<script>
import { StackedBar } from "rough-viz";
import { putAttrsToObj } from "../mixins/putAttrsToObj";

export default {
  name: "RoughStackedBar",
  mixins: [putAttrsToObj],
  mounted() {
    let stackedBarAttr = this.putAttrsToObj;
    stackedBarAttr.element = "#stacked-bar";
    const stackedBar = new StackedBar(stackedBarAttr);
    return stackedBar;
  }
};
</script>
