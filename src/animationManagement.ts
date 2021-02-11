/**
 * アニメーション関連の管理をする関数。
 */
export default class AnimationManagement {
  /**
   * アニメーションリスト。
   */
  private _animationList: Array<string> = ["Shiromo01", "Potato01"];
  public get animationList() {
    return this._animationList;
  }

  /**
   * 表示中のアニメーション。
   */
  private _currentDisplayAnimation: string = this._animationList[0];
  public get currentDisplayAnimation() {
    return this._currentDisplayAnimation;
  }
  /**
   * 表示中のアニメーションコンポーネント名をセット。
   * @param animation {string} 指定したいアニメーション
   */
  public setcurrentDisplayAnimation(animation: string) {
    this._currentDisplayAnimation = animation;
  }
}
