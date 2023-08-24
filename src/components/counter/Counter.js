export default class Counter {
  constructor(element) {
    this.element = element;

    this.failsCount = 0;
    this.count = this.element.querySelector('.count');
  }

  set failsCount(number) {
    this._failsCount = number;
  }

  get failsCount() {
    return this._failsCount;
  }

  increaseCount() {
    this.count.textContent = Number(this.count.textContent) + 1;
  }

  increaseFailsCount() {
    this.failsCount += 1;
  }

  reset() {
    this.count.textContent = 0;
    this.failsCount = 0;
  }
}
