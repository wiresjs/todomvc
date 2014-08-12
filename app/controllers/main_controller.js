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
			var self = this;

			// This is a bit ugly, need to think
			this.todos = new app.ToDo().fetchAll();
			
		},
		// Index ******************************
		index : function(params, render) {
			this.path = 'index';
			// Reseting all collection filters
			this.todos.reset();
			
			// Update bottom stats
			this.updateStats();
			this.todos.on('statusChanged', this.updateStats.bind(this));
			render();
		},

		// Filter actions *********************
		active : function(params, render) {
			this.path = 'active';
			this.todos.where({
				completed : false
			});
			render()
		},
		
		// Filter by completed
		completed : function(params, render) {
			this.path = 'completed';
			this.todos.where({
				completed : true
			})
			render()
		},

		// Removing ****************************
		remove : function(scope) {

			scope.todo.remove();
			this.updateStats();
		},
		// Clear completed tasks
		clearCompleted : function() {
			this.todos.removeWhere({
				completed : true
			})
			this.updateStats();
			this.todos.refresh();
		},
		// Adding todo ************************
		addToDo : function() {
			if (!this.userText)
				return;
	
			var newToDo = new app.ToDo({
				title : this.userText,
				completed : false
			})
			this.todos.add(newToDo)
			console.log(this.todos.db)
			// Trigger stats
			this.updateStats();

			// Reset variable
			this.userText = '';
		},

		// Update stats *********************
		updateStats : function() {
			this.todoLeft = _.where(this.todos.db, {
				completed : false
			}).length;
			this.todoCompleted = _.where(this.todos.db, {
				completed : true
			}).length;
		},

	});
})();