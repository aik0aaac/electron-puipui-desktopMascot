<template>
  <div class="wrapper">
    <!-- アプリ終了ボタン -->
    <exit-button class="exit-button" />

    <!-- ウィンドウを動かせるボタン -->
    <move-window-button class="move-window-button" />

    <!-- アニメーションセレクトリスト -->
    <animation-select-list
      :datas="animationList"
      :default-data="currentDisplayAnimation"
      @onChange="changeCurrentDisplayAnimation"
      class="animation-select-list"
    />

    <!-- アニメーション表示 -->
    <div class="animation-wrapper">
      <component v-bind:is="currentDisplayAnimation.componentName"></component>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import MoveWindowButton from "@/components/parts/MoveWindowButton.vue";
import ExitButton from "@/components/parts/ExitButton.vue";
import AnimationSelectList from "@/components/parts/AnimationSelectList.vue";
import Potato01 from "@/components/animation/Potato01.vue";
import Shiromo01 from "@/components/animation/Shiromo01.vue";

import { AnimationManagement, IAnimationItem } from "@/animationManagement";
const animationManagement = new AnimationManagement();

@Component({
  components: {
    MoveWindowButton,
    ExitButton,
    AnimationSelectList,
    Potato01,
    Shiromo01,
  },
})
export default class Animation extends Vue {
  /**
   * 表示中のアニメーション。
   */
  private currentDisplayAnimation: IAnimationItem =
    animationManagement.currentDisplayAnimation;

  /**
   * アニメーションリスト。
   */
  private animationList: IAnimationItem[] = animationManagement.animationList;

  /**
   * アニメーション変更時の挙動。
   */
  private changeCurrentDisplayAnimation(animation: IAnimationItem) {
    this.currentDisplayAnimation = animation;
  }
}
</script>

<style scoped lang="scss">
// 全体を包むラッパー
.wrapper {
  margin-top: 24px;
  position: relative;
}

// アプリ終了ボタン
.exit-button {
  position: absolute;
  right: 0;
}

// ウィンドウを動かせるボタン
.move-window-button {
  position: absolute;
  right: calc(var(--button-width) + 16px);
}

// アニメーションセレクトリスト
.animation-select-list {
}

// アニメーションラッパー
.animation-wrapper {
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  overflow-y: hidden;
}
</style>
