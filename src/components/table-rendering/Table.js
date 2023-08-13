import Counter from '../game-logic/Counter';
import Goblin from '../goblin/Goblin';

export default class Table {
  constructor(element) {
    try {
      this.element = element;
    } catch (error) {
      console.log(error);
    }
    this.findProperIndex = this.findProperIndex.bind(this);
    this.rotate = this.rotate.bind(this);
    this.onCellClick = this.onCellClick.bind(this);
    this.goblinElement = Table.createGoblinElement();

    this.scoreCounter = new Counter(document.querySelector('.counter'));
    this.cells = [...this.element.querySelectorAll('.cell')];

    this.element.addEventListener('click', this.onCellClick);
  }

  static createGoblinElement() {
    const goblinElement = new Goblin(document.createElement('img'));
    return goblinElement;
  }

  findProperIndex() {
    const activeCell = this.cells.find((el) => el.classList.contains('active'));
    const activeCellIndex = this.cells.indexOf(activeCell);
    const index = Math.floor(Math.random() * 16);

    if (activeCellIndex === index) {
      this.findProperIndex();
    }
    return index;
  }

  rotate() {
    const interval = setInterval(() => {
      if (this.element.querySelector('.goblin')) {
        this.scoreCounter.increaseFailsCount();
      }
      const previousIndex = this.cells.findIndex((el) => el.classList.contains('active'));
      const index = this.findProperIndex();
      this.cells[previousIndex].classList.remove('active');
      this.cells[index].classList.add('active');
      this.cells[index].appendChild(this.goblinElement);
    }, 1000);
    if (this.scoreCounter.failsCount > 5) {
      clearInterval(interval);
    }
  }

  startGame() {
    if (this.scoreCounter.failsCount === 0) {
      this.scoreCounter.count = 0;
      this.rotate();
    }
  }

  onCellClick(e) {
    const targetCell = e.target.closest('.cell');
    if (targetCell.querySelector('.goblin')) {
      this.scoreCounter.increaseCount();
      targetCell.querySelector('.goblin').remove();
    }
  }
}
