<template>
  <div class="select-wrapper">
    <select
      v-model="selectModel"
      v-on:mouseenter="onMouseEnter"
      v-on:mouseleave="onMouseLeave"
    >
      <option v-for="(item, index) in selectListItem" :key="index">{{
        item
      }}</option>
    </select>

    <label class="selectlabel">アニメーションを選択</label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";

import { IAnimationItem } from "@/animationManagement";

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
  mounted() {
    // 初期値を登録
    this.selectModel = this.defaultData.label;
    // セレクトリストアイテムを変換
    this.selectListItem = this.datas.map((e) => e.label);
  }

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
   * セレクトリストの選択データリスト。
   */
  @Prop({ default: [] })
  private datas!: IAnimationItem[];

  /**
   * セレクトリストの初期設定値。
   */
  @Prop({ default: null })
  private defaultData!: IAnimationItem;

  /**
   * セレクトリストModel。
   */
  private selectModel: string | null = null;
  @Watch("selectModel")
  private onSelectModelChanged(newValue: string, oldValue: string) {
    // ラベル名から選択されたアニメーションを特定
    const target = this.datas.find((e) => e.label === newValue);
    this.$emit("onChange", target);
  }

  /**
   * セレクトリストアイテム。
   */
  private selectListItem: string[] = [];
}
</script>

<style scoped lang="scss">
// セレクトリストのラッパー
.select-wrapper {
  position: relative;
  width: 50%;
  font-family: sans-serif;
  text-align: center;
  background-color: #fff;
  border-bottom: 3px solid #fff;
  border-radius: 5px;
  cursor: pointer;
  opacity: var(--control-parts-opacity);

  select {
    position: relative;
    width: 100%;
    padding: 2px;
    font-size: calc(var(--button-height) / 1.6);
    background-color: transparent;
    border-radius: 0;
    border: none;
  }

  .selectlabel {
    position: absolute;
    left: 0;
    bottom: calc((1rem + 4px) * -1);
    color: #fff;
    font-size: calc(var(--button-height) / 2);
    font-weight: normal;
    pointer-events: none;
    transition: 0.2s ease all;
  }
}
</style>
