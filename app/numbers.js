if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      var value = num.toString(2).split('').reverse().join('')[bit - 1];
      return parseInt(value, 10);
    },

    base10: function(str) {
      return parseInt(str, 2);
    },

    convertToBinary: function(num) {
      var bin = num.toString(2);

      while (bin.length < 8) {
        bin = '0' + bin;
      }

      return bin;
    },

    multiply: function(a, b) {
      return +(a * b).toFixed(4);
    }
  };
});

