if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return arr.indexOf(item);
    },

    sum : function(arr) {
      return arr.reduce(function(a, b) {
        return a + b;
      });
    },

    remove : function(arr, item) {
      var result = [];
      arr.forEach(function(el) {
        if (el !== item) result.push(el);
      });

      return result;
    },

    removeWithoutCopy : function(arr, item) {
      var index;
      while((index = arr.indexOf(item)) >= 0) {
        arr.splice(index, 1);
      }

      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {
      arr.shift();
      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      return arr.slice(0, index).concat(item).concat(arr.slice(index));
    },

    count : function(arr, item) {
      return arr.reduce(function(p, c) {
        return p + (c === item ? 1 : 0);
      });
    },

    duplicates : function(arr) {
      var counts = arr.reduce(function(p, c) {
        p[c] = p[c] || 0;
        p[c]++;
        return p;
      }, {});

      return Object.keys(counts).reduce(function(p, c) {
        if (counts[c] > 1) p.push(c);
        return p; 
      }, []).sort();
    },

    square : function(arr) {
      return arr.map(function(item) { return item * item; });
    },

    findAllOccurrences : function(arr, target) {
      var occur = [];
      for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (item === target) occur.push(i);
      }

      return occur;
    }
  };
});
