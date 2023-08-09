export default class Counter {
  constructor(element) {
    try {
      this.element = element;
    } catch (error) {
      console.log(error);
    }
    this.count = this.element.querySelector('.count').textContent;
    this.score = 0;
    this.failsCount = 0;
  }

  increaseCount() {
    this.score += 1;
    this.count = this.score;
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
