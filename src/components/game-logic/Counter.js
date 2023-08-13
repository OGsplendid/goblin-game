export default class Counter {
  constructor(element) {
    this.element = element;

    this.count = this.element.querySelector('.count');
    this.failsCount = 0;
  }

  increaseCount() {
    this.count.textContent = parseInt(this.count.textContent) += 1;
  }

  increaseFailsCount() {
    const reminder = this.element.closest('.bottom-container').querySelector('.reminder');
    this.failsCount += 1;
    if (this.failsCount > 5) {
      reminder.classList.remove('hidden');
      reminder.textContent = 'You failed! Click on any cell to start over';
    }
    // reminder.classList.add('hidden');
  }
}
