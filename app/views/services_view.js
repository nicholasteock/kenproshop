var View     = require('./view'),
	template = require('./templates/services');

var afterRender = function() {
	console.log("RENDERED SERVICES VIEW");
	Application.updateBreadcrumb('services');
};

module.exports = View.extend({
    className: 'services-view',
    template: template,

    afterRender: afterRender
});
