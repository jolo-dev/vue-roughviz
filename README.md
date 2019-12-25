# vue-roughviz

It's a Vue-wrapper for [roughViz.js](https://github.com/jwilber/roughViz). See examples in the `App.vue`.

## Installation
```
npm install vue-roughviz
```
## Components
* RoughBar,
* RoughDonut,
* RoughPie,
* RoughLine,
* RoughScatter,
* RoughStackedBar,
* RoughBarH

## Usage
Example for using the Donut-Chart.
```
<template>
   <div>
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
  </div>
</template>

<script>
import { RoughDonut } from "vue-roughviz";
Vue.component(RoughDonut)
</script>
```

## Development
```
npm i
npm run serve
```
In case it is not working,
this repo uses the [Vue-Cli](https://cli.vuejs.org).

### Lints and fixes files
```
npm run lint
```

## Declaration and Style

The components are following the [Vue Style Guide](https://vuejs.org/v2/style-guide/).
That means components are called in [Kebab-Style](https://vuejs.org/v2/style-guide/#Self-closing-components-strongly-recommended):
```
<rough-donut></rough-donut>
```

For each attribute, a line in a component and also in Kebab-Style is [recommended](https://vuejs.org/v2/style-guide/#Multi-attribute-elements-strongly-recommended). However,
both is possible.

```
fill-weight="0.35" // better than fillWeight
stroke-width="0.5" // better than strokeWidth
fill-style="cross-hatch" // better than fillStyle
```

By passing an object, Vue needs to [bind](https://vuejs.org/v2/guide/class-and-style.html) it.

```
<rough-pie>
:data="[
    { month: 'Jan', A: 20, B: 5, C: 10 },
    { month: 'Feb', A: 25, B: 10, C: 20 },
    { month: 'March', A: 30, B: 50, C: 10 }
]"
</rough-pie>
```