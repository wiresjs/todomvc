var Wires = Wires || {};
var app = app || {};
(function() {
	'use strict';
	app.ToDo = Wires.Model.extend({
		_settings : {
			json : '/todo.json'
		},
		/*updateToDoLeft : function()
		{
			if ( this._collection ) {
				var collection = this._collection
				collection.todoLeft = _.where(collection.db, { completed : false }).length;
				collection.todoCompleted = _.where(collection.db, { completed : true }).length;
			}
		},*/
		onCompletedChanged : function(value)
		{
			
			if ( this._collection ) {
				this._collection.trigger('statusChanged', value)
				this._collection.refresh();
			}
		}
	});
})();