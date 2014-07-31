var app = app || {};
(function() {
	'use strict';
	app.MainController = Wires.MVC.Controller.extend({
		essentials : {
			views : {
				'*' : 'main.html'
			}
		},
		// Init the app
		// Set the needed data
		initialize : function() {
			this.userText = '';
			this.todos = new app.ToDo().fetchAll();
		},
		// Filter by active
		active : function(params, render) {
			this.path = 'active';
			this.todos.where({ completed : false});
			render()
		},
		// Filter by completed
		completed : function(params, render) {
			this.path = 'completed';
			this.todos.where({ completed : true})
			render()
		},
		// Index
		index : function(params, render) {
			this.path = 'index';
			this.todos.reset();
			render();
		},
		addToDo : function() {
			if (!this.userText)
				return;

			var newToDo = new app.ToDo({
				title : this.userText,
				completed : false
			})
			this.todos.add(newToDo)
			// Reset variable
			this.userText = '';
		}
	});
})();