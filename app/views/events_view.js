var View     = require('./view'),
	template = require('./templates/events'),
	data 	 = require('./data/events');

var afterRender = function() {
	console.log("RENDERED EVENTS VIEW");
	Application.updateBreadcrumb('events');
};

var getRenderData = function() {
	return data;
};

module.exports = View.extend({
    className 		: 'events-view',
    template 		: template,
    getRenderData 	: getRenderData,
    afterRender 	: afterRender
});
