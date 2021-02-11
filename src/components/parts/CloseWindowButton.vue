<template>
  <button
    v-on:mouseenter="onMouseEnter"
    @click="closeWindow"
    class="move-window"
  >
    close window
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
const { app } = window.require("electron");

/**
 * Electronの画面を閉じるボタンを提供するコンポーネント。
 */
@Component({
  components: {},
})
export default class CloseWindowButton extends Vue {
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
