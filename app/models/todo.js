var Wires = Wires || {};
var app = app || {};
(function() {
	'use strict';
	app.ToDo = Wires.Model.extend({
		_settings : {
			json : '/todo.json'
		},
		onCompletedChanged : function(value)
		{
			if ( this._collection ) {
				var collection = this._collection
				collection.refresh();
				
				collection.todoLeft = _.where(collection.db, { completed : false }).length;
			}
		}
	});
})();