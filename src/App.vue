<template>
  <div>
    <animation />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Animation from "@/components/Animation.vue";

@Component({
  components: {
    Animation,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
body {
}
</style>
