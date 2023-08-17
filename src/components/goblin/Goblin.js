export default class Goblin {
  constructor(element) {
    this.element = element;
  }

  appear() {
    this.element.classList.add('goblin');
    this.element.src = 'https://github.com/netology-code/ahj-homeworks/blob/AHJ-50/dom/pic/goblin.png?raw=true';
    return this.element;
  }
}
