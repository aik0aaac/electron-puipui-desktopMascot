<template>
  <button
    v-on:mouseenter="onMouseEnter"
    v-on:mouseleave="onMouseLeave"
    @click="exitApp"
    class="exit-app"
  ></button>
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
 * Electronのアプリ終了ボタンを提供するコンポーネント。
 */
@Component({
  components: {},
})
export default class ExitButton extends Vue {
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
   * アプリ終了処理。
   */
  private exitApp() {
    electron.remote.getCurrentWindow().close();
  }
}
</script>

<style scoped lang="scss">
.exit-button {
  display: block;
  width: var(--button-width);
  height: var(--button-height);
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  opacity: var(--control-parts-opacity);

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: calc(14% - 8px);
    left: 14%;
    display: block;
    width: 100%; /*バツ線の長さ*/
    height: 8px; /*バツ線の太さ*/
    background: #fff;
    transform: rotate(45deg);
    transform-origin: 0% 50%;
  }
  &::after {
    transform: rotate(-45deg);
    transform-origin: 100% 50%;
    left: auto;
    right: 14%;
  }
}
</style>
