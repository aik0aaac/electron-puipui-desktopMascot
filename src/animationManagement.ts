/**
 * アニメーション関連の管理をする関数。
 */
export class AnimationManagement {
  /**
   * アニメーションリスト。
   */
  public get animationList() {
    return this._animationList;
  }
  private _animationList: IAnimationItem[] = [
    {
      componentName: "Shiromo01",
      label: "もしゃもしゃシロモ",
    },
    {
      componentName: "Potato01",
      label: "だばだばポテト",
    },
  ];

  /**
   * 表示中のアニメーション。
   */
  public get currentDisplayAnimation(): IAnimationItem {
    return this._currentDisplayAnimation;
  }
  private _currentDisplayAnimation: IAnimationItem = this._animationList[0];
  /**
   * 表示中のアニメーションコンポーネント名をセット。
   * @param animation {string} 指定したいアニメーション
   */
  public setcurrentDisplayAnimation(animation: IAnimationItem) {
    this._currentDisplayAnimation = animation;
  }
}

/**
 * アニメーションアイテムInterface。
 */
export interface IAnimationItem {
  /**
   * コンポーネント名。
   */
  componentName: string;
  /**
   * ラベル名。
   */
  label: string;
}
