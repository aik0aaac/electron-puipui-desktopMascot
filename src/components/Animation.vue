<template>
  <div class="wrapper">
    <!-- ウィンドウを動かせるボタン -->
    <move-window-button class="move-window-button" />
    <!-- ウィンドウを閉じるボタン -->
    <close-window-button class="close-window-button" />

    <!-- アニメーションセレクトリスト -->
    <select-list
      :datas="animationList"
      :default-data="currentDisplayAnimation"
      @onChange="changeCurrentDisplayAnimation"
      class="animation-select-list"
    />

    <!-- アニメーション表示 -->
    <div class="animation-wrapper">
      <component v-bind:is="currentDisplayAnimation"></component>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import MoveWindowButton from "@/components/parts/MoveWindowButton.vue";
import CloseWindowButton from "@/components/parts/CloseWindowButton.vue";
import SelectList from "@/components/parts/SelectList.vue";
import Potato01 from "@/components/animation/Potato01.vue";
import Shiromo01 from "@/components/animation/Shiromo01.vue";

import AnimationManagement from "@/animationManagement";
const animationManagement = new AnimationManagement();

@Component({
  components: {
    MoveWindowButton,
    CloseWindowButton,
    SelectList,
    Potato01,
    Shiromo01,
  },
})
export default class Animation extends Vue {
  /**
   * 表示中のアニメーション。
   */
  private currentDisplayAnimation = animationManagement.currentDisplayAnimation;

  /**
   * アニメーションリスト。
   */
  private animationList = animationManagement.animationList;

  /**
   * アニメーション変更時の挙動。
   */
  private changeCurrentDisplayAnimation(animation: string) {
    this.currentDisplayAnimation = animation;
  }
}
</script>

<style scoped lang="scss">
// 全体を包むラッパー
.wrapper {
  position: relative;
}

// ウィンドウを動かせるボタン
.move-window-button {
  position: absolute;
  right: 0;
}

// ウィンドウを閉じるボタン
.close-window-button {
  position: absolute;
}

// アニメーションセレクトリスト
.animation-select-list {
}

// アニメーションラッパー
.animation-wrapper {
  width: 100%;
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
