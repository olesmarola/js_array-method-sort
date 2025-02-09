'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (a, b) => a.toString() < b.toString() ? 0 : 1,
  ) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          const temp = this[j + 1];
          this[j + 1] = this[j];
          this[j] = temp;
        }
      }
    }
    return this;
  };
}

module.exports = applyCustomSort;
