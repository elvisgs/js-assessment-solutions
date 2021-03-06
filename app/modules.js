if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
	var Module = function(greeting, name) {
		this.greeting = greeting;
		this.name = name;
	};

	Module.prototype = {
		sayIt: function() {
			return this.greeting + ', ' + this.name;
		}
	};
    	
  return {
    createModule : function(str1, str2) {
    	return new Module(str1, str2);
    }
  };
});

