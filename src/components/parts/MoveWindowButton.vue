<template>
  <button v-on:mouseenter="onMouseEnter" class="move-window">
    move window
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
}
</script>

<style scoped lang="scss">
.move-window {
  -webkit-app-region: drag;
}
</style>
