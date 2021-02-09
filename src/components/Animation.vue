<template>
  <div class="wrapper">
    <potato-01 />
    <shiromo-01 />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Potato01 from "@/components/animation/Potato01.vue";
import Shiromo01 from "@/components/animation/Shiromo01.vue";

@Options({
  components: {
    Potato01,
    Shiromo01,
  },
  props: {},
})
export default class Animation extends Vue {}
</script>

<style scoped lang="scss">
.wrapper {
  overflow: hidden;
  -webkit-mask-image: linear-gradient(
    0.25turn,
    transparent,
    #000 var(--blur-width),
    #000 calc(100% - var(--blur-width)),
    transparent
  );
  mask-image: linear-gradient(
    0.25turn,
    transparent,
    #000 var(--blur-width),
    #000 calc(100% - var(--blur-width)),
    transparent
  );
}
</style>
