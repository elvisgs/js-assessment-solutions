if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
    	var current = start;

    	var timer = setInterval(function() {
    		console.log(current);
    		current++

    		if (current > end) {
    			clearInterval(timer);
    		}
    	}, 100);

    	return {
    		cancel: function() {
    			clearInterval(timer);
    		}
    	}
    }
  };
});