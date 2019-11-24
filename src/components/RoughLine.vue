<template>
  <div id="line"></div>
</template>

<script>
import { Line } from "rough-viz";
import { putAttrsToObj } from "../mixins/putAttrsToObj";

export default {
  name: "RoughLine",
  mixins: [putAttrsToObj],
  mounted() {
    let lineAttr = this.putAttrsToObj;
    lineAttr.element = "#line";
    const line = new Line(lineAttr);
    return line;
  }
};
</script>

<style lang="scss" scoped></style>
