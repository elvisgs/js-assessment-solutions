if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
    	var dfd = $.Deferred();

    	setTimeout(function() {
    		dfd.resolve(value);
    	}, 100);
    	
    	return dfd;
    },

    manipulateRemoteData : function(url) {
    	var dfd = $.Deferred();

    	$.getJSON(url).then(function(json) {
    		var names = json.people.map(function(person) {
    			return person.name;
    		}).sort();

    		dfd.resolve(names);
    	});

    	return dfd;
    }
  };
});
