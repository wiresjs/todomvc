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
		initialize : function()
		{
			this.userText = '';
			this.todos = [ {
				completed : true,
				editMode : false,
				visible : true,
				title : 'Open todomvc application'
			}, {
				completed : false,
				visible : true,
				editMode : false,
				title : 'Check the source code'
			}];
		},
		// Filter by active
		active : function(params, render)
		{
			this.path = 'active';
			_.each(this.todos, function(todo){
				todo.visible = todo.completed === false
			});
			render()
		},
		// Filter by completed
		completed : function(params, render)
		{
			this.path = 'completed';
			_.each(this.todos, function(todo){
				todo.visible = todo.completed === true
			});
			render()
		},
		// Index
		index : function(params, render) {
			this.path = 'index';
			_.each(this.todos, function(todo){
				todo.visible = true;
			})
			render();
		},
		updateStatus : function()
		{
			var left = 0;
			_.each(this.todos, function(todo){
				if ( todo.completed === false )
					left++;
			})
			this.todoLeft = left;
		},
		addToDo : function() {
			if (!this.userText)
				return;
			this.todos.push({
				completed : false,
				editMode : false,
				visible : this.path === 'index' || this.path === 'active',
				title : this.userText
			})
			// Reset variable
			this.userText = '';
		}
	});
})();