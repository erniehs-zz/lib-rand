"use strict";

class Random {

  constructor(s) {
    this.s = s;
  }

  rand() {
    var r = Math.cos(this.s++) * 15485863;
    return r - Math.floor(r);
  }

  randInt(i) {
    return Math.floor(this.rand() * i);
  }
}

module.exports.Random = Random;
