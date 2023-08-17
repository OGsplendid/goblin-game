export default class Counter {
  constructor(element) {
    this.element = element;
    this.reminder = this.element.closest('.bottom-container').querySelector('.reminder');

    this.failsCount = 0;
  }

  increaseCount() {
    this.count = this.element.querySelector('.count');
    this.count.textContent = Number(this.count.textContent) + 1;
  }

  increaseFailsCount() {
    this.failsCount += 1;
    if (this.failsCount > 5) {
      this.reminder.classList.remove('hidden');
      this.reminder.textContent = 'You failed! Click here to start over';
    }
  }

  reset() {
    this.count = this.element.querySelector('.count');
    this.count.textContent = 0;
    this.failsCount = 0;
    this.reminder.classList.add('hidden');
  }
}
