if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
	function list(data) {
		var files = [];

		data.files && data.files.forEach(function(file) {
			if (typeof file === 'string') {
				files.push(file);
			} else {
				files = files.concat(list(file));
			}
		});

		return files;
	}
  
  return {
    listFiles: function(data, dirName) {
			if (!data.files) return [];

			dirName = dirName || data.dir;	

			if (data.dir === dirName) {
				return list(data);
			}
			else {
				for (var i = 0; i < data.files.length; i++) {
					var file = data.files[i];
					if (typeof file === 'object') {
						return this.listFiles(file, dirName);
					}
				}
			}
	  },

    permute: function(arr) {

    }
  };
});
