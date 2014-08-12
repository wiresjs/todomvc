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
				this._collection.trigger('statusChanged', value)
				this._collection.refresh();
			}
		}
	});
})();