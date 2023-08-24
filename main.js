/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/counter/Counter.js":
/*!*******************************************!*\
  !*** ./src/components/counter/Counter.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Counter; }
/* harmony export */ });
class Counter {
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


/***/ }),

/***/ "./src/components/goblin/Goblin.js":
/*!*****************************************!*\
  !*** ./src/components/goblin/Goblin.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Goblin; }
/* harmony export */ });
class Goblin {
  constructor(element) {
    this.element = element;
  }

  appear() {
    this.element.classList.add('goblin');
    this.element.src = 'https://github.com/netology-code/ahj-homeworks/blob/AHJ-50/dom/pic/goblin.png?raw=true';
    return this.element;
  }
}


/***/ }),

/***/ "./src/components/table-rendering/Table.js":
/*!*************************************************!*\
  !*** ./src/components/table-rendering/Table.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Table; }
/* harmony export */ });
/* harmony import */ var _counter_Counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../counter/Counter */ "./src/components/counter/Counter.js");
/* harmony import */ var _goblin_Goblin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../goblin/Goblin */ "./src/components/goblin/Goblin.js");



class Table {
  constructor(element) {
    this.element = element;
    this.interval = null;
    this.failsCount = 0;

    this.cells = [...this.element.querySelectorAll('.cell')];
    this.reminder = document.querySelector('.reminder');
    this.scoreCounter = new _counter_Counter__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector('.counter'));

    this.onCellClick = this.onCellClick.bind(this);
    this.element.addEventListener('click', this.onCellClick);
    this.reminder = document.querySelector('.reminder');

    this.reminder.onclick = () => {
      this.scoreCounter.reset();
      this.startGame();
    };
  }

  static createGoblinElement() {
    const goblinElement = new _goblin_Goblin__WEBPACK_IMPORTED_MODULE_1__["default"](document.createElement('img'));
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
      this.reminder.classList.remove('hidden');
    }
  }

  startGame() {
    this.reminder.classList.add('hidden');
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_table_rendering_Table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/table-rendering/Table */ "./src/components/table-rendering/Table.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");



const table = new _components_table_rendering_Table__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector('.table'));
table.startGame();

}();
/******/ })()
;
//# sourceMappingURL=main.js.map