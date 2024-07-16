export default class SimpleLock {
  private _active: boolean = false;

  public get active() {
    return this._active;
  }

  public acquire(): void {
    this._active = true;
  }

  public release(): void {
    this._active = false;
  }
}
