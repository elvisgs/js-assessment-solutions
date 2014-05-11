if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function(str) {
      return function(str2) {
        return str + ', ' + str2;
      }
    },

    makeClosures : function(arr, fn) {
      return arr.map(function(item) {
        return function() {
          return fn(item);
        }
      });

    },

    partial : function(fn, str1, str2) {
      return function(punctuation) {
        return fn(str1, str2, punctuation);
      }
    },

    useArguments : function() {
      var slice = Array.prototype.slice;
      return slice.call(arguments).reduce(function(p, c) {
        return p + c;
      });
    },

    callIt : function(fn) {
      var slice = Array.prototype.slice;
      var args = slice.call(arguments, 1);
      return fn.apply(null, args);
    },

    partialUsingArguments : function(fn) {
      var slice = Array.prototype.slice;
      var args = slice.call(arguments, 1);
      return function() {
        return fn.apply(null, args.concat(slice.call(arguments)));
      }
    },

    curryIt : function(fn) {
      return function(x) {
        return function(y) {
          return function(z) {
            return fn(x, y, z);
          }
        }
      }
    }
  };
});
