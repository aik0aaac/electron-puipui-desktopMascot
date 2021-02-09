<template>
  <animation />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Animation from "@/components/Animation.vue";

@Options({
  components: {
    Animation,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss"></style>
