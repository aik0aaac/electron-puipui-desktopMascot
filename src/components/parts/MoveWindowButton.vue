<template>
  <button
    v-if="isDisplayMoveButton"
    v-on:mouseenter="onMouseEnter"
    v-on:mouseleave="onMouseLeave"
    class="move-window"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";

declare global {
  interface Window {
    require: any;
  }
}
const electron = window.require("electron");

/**
 * Electronの画面を動かせるボタンを提供するコンポーネント。
 */
@Component({
  components: {},
})
export default class ModeWindowButton extends Vue {
  private onMouseEnter() {
    // 要素にマウスポインタが乗っている間、マウスイベントの無視をやめる
    electron.remote.getCurrentWindow().setIgnoreMouseEvents(false);
  }
  private onMouseLeave() {
    // 要素からマウスが離れたら、マウスイベントを無視する
    electron.remote
      .getCurrentWindow()
      .setIgnoreMouseEvents(true, { forward: true });
  }

  /**
   * ウィンドウ移動ボタンを表示させるかどうか。
   * Windowsでは`-webkit-app-region: drag;`を使用したウィンドウ移動が出来なかった。
   * 暫定対応として、本ボタンはWindows環境では表示させないようにする。
   */
  private get isDisplayMoveButton(){
    return window.navigator.userAgent.toLowerCase().indexOf("windows nt") === -1;
  }
}
</script>

<style scoped lang="scss">
.move-window {
  -webkit-app-region: drag;
  cursor: move;

  display: inline-block;
  position: relative;
  width: var(--button-width);
  height: var(--button-height);
  background: none;
  border: none;
  appearance: none;
  transition: all 0.4s;
  box-sizing: border-box;
  opacity: calc(var(--control-parts-opacity) * 1.2);

  span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #fff;
    border-radius: 3px;

    &:nth-of-type(1) {
      top: 0;
    }
    &:nth-of-type(2) {
      top: 8px;
    }
    &:nth-of-type(3) {
      bottom: 0;
    }
  }
}
</style>
