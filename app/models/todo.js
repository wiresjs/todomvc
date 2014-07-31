var Wires = Wires || {};
var app = app || {};
(function() {
	'use strict';
	app.ToDo = Wires.Model.extend({
		_settings : {
			json : '/todo.json'
		}
	
	});
})();