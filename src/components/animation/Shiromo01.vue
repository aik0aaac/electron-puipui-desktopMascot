<template>
  <div class="animation-wrapper">
    <div class="animation"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Shiromo01 extends Vue {}
</script>

<style scoped lang="scss">
/* アニメーション出力部分ラッパーのCSS */
.animation-wrapper {
  transform: scale(0.6) translateX(-10%);
}
/* アニメーション自体にはsteps刻みでパラパラ漫画としているため、ラッパーに移動用アニメーションを仕込む */

/* アニメーション出力部分のCSS */
.animation {
  width: 598px;
  height: 433px;
  background-image: url("/images/animations/shiromo01/shiromo01.sprite.png");
  background-repeat: no-repeat;
  animation: displaySpliteImage 0.5s steps(3) infinite;
}
@keyframes displaySpliteImage {
  to {
    background-position: -5px -1319px;
  }
}
</style>
