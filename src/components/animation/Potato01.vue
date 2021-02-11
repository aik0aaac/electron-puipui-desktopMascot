<template>
  <div class="animation-wrapper">
    <div class="animation-move-wrapper">
      <div class="animation"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Potato01 extends Vue {}
</script>

<style scoped lang="scss">
/* アニメーション出力部分ラッパーのCSS */
.animation-wrapper {
  width: 100%;
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

/* アニメーション出力部分(移動用)ラッパーのCSS */
.animation-move-wrapper {
  animation: moveImage ease-in 7s infinite;
}
@keyframes moveImage {
  0% {
    transform: translateX(70%) scale(0.6);
  }
  50% {
    transform: translateX(-80%) scale(0.6);
  }
  51% {
    transform: translateX(-80%) scale(-0.6, 0.6);
  }
  to {
    transform: translateX(70%) scale(-0.6, 0.6);
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
