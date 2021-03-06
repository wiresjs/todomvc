var app = app || {};

$(function() {
	'use strict';

	// Setting views folder
	Wires.Config.viewsFolder = '/views/';

	// Starting routing and history
	var history = new Wires.MVC.Router();
	history.register('', app.MainController);

	history.start();
});