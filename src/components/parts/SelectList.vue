<template>
  <div>
    <select v-model="selectModel" v-on:mouseenter="onMouseEnter">
      <option v-for="(data, index) in datas" :key="index">{{ data }}</option>
    </select>
  </div>
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
 * 汎用セレクトリストコンポーネント。
 */
@Component({
  components: {},
})
export default class SelectList extends Vue {
  private onMouseEnter() {
    // 要素にマウスポインタが乗っている間、マウスイベントの無視をやめる
    electron.remote.getCurrentWindow().setIgnoreMouseEvents(false);
  }

  /**
   * セレクトリストの選択データリスト。
   */
  @Prop({ default: [] })
  private datas!: Array<string>;

  /**
   * セレクトリストの初期設定値。
   */
  @Prop({ default: "" })
  private defaultData!: string;

  /**
   * セレクトリストModel。
   */
  private selectModel: string = "";
  @Watch("selectModel")
  private onSelectModelChanged(newValue: string, oldValue: string) {
    this.$emit("onChange", newValue);
  }

  mounted() {
    this.selectModel = this.defaultData;
  }
}
</script>

<style scoped lang="scss"></style>
