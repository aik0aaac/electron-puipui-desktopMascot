<template>
  <div class="animation-wrapper">
    <div class="animation"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {},
})
export default class Potato01 extends Vue {}
</script>

<style scoped lang="scss">
/* アニメーション出力部分ラッパーのCSS */
.animation-wrapper {
  animation: moveImage ease 6s infinite;
  transform: scale(0.6);
}
@keyframes moveImage {
  0% {
    transform: translateX(80%);
  }
  to {
    transform: translateX(-85%);
  }
}
/* アニメーション自体にはsteps刻みでパラパラ漫画としているため、ラッパーに移動用アニメーションを仕込む */

/* アニメーション出力部分のCSS */
.animation {
  width: 584px;
  height: 356px;
  background-image: url("/images/animations/potato01/potato01.sprite.png");
  background-repeat: no-repeat;
  animation: displaySpliteImage 0.5s steps(6) infinite;
}
@keyframes displaySpliteImage {
  to {
    background-position: -5px -2171px;
  }
}
</style>
