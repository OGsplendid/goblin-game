import Counter from '../game-logic/Counter';
import Goblin from '../goblin/Goblin';

export default class Table {
  constructor(element) {
    this.element = element;
    this.cells = [...this.element.querySelectorAll('.cell')];
    this.interval = null;

    this.scoreCounter = new Counter(document.querySelector('.counter'));

    this.onCellClick = this.onCellClick.bind(this);
    this.element.addEventListener('click', this.onCellClick);

    document.querySelector('.reminder').onclick = () => {
      this.scoreCounter.reset();
      this.startGame();
    };
  }

  static createGoblinElement() {
    const goblinElement = new Goblin(document.createElement('img'));
    return goblinElement.appear();
  }

  findProperIndex() {
    const activeCellIndex = this.cells.findIndex((cell) => cell.classList.contains('active'));
    const index = Math.floor(1 + Math.random() * 15);

    if (activeCellIndex === index) {
      this.findProperIndex();
    }
    return index;
  }

  rotate() {
    this.interval = setInterval(() => {
      if (!this.element.querySelector('.goblin')) {
        this.goblinElement = Table.createGoblinElement();
      }
      if (!this.element.classList.contains('hit')) {
        this.scoreCounter.increaseFailsCount();
      }
      this.element.classList.remove('hit');
      const previousIndex = this.cells.findIndex((el) => el.classList.contains('active'));
      const index = this.findProperIndex();
      this.cells[previousIndex].classList.remove('active');
      this.cells[index].classList.add('active');
      this.cells[index].appendChild(this.goblinElement);
      this.checkGameStatus();
    }, 1000);
  }

  checkGameStatus() {
    if (this.scoreCounter.failsCount > 5) {
      this.endGame();
    }
  }

  startGame() {
    this.scoreCounter.reset();
    this.rotate();
  }

  endGame() {
    clearInterval(this.interval);
    document.querySelector('.goblin').remove();
  }

  onCellClick(e) {
    const targetCell = e.target.closest('.cell');
    if (targetCell.querySelector('.goblin')) {
      this.scoreCounter.increaseCount();
      this.element.classList.add('hit');
      targetCell.querySelector('.goblin').remove();
    }
  }
}
