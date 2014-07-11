var View     = require('./view'),
	template = require('./templates/events');

var afterRender = function() {
	console.log("RENDERED EVENTS VIEW");
	Application.updateBreadcrumb('events');
};

module.exports = View.extend({
    className: 'events-view',
    template: template,

    afterRender: afterRender
});
