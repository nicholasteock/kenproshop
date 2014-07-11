var View     = require('./view'),
	template = require('./templates/contact');

var afterRender = function() {
	console.log("RENDERED CONTACT VIEW");
	Application.updateBreadcrumb('contact');
};

module.exports = View.extend({
    className: 'contact-view',
    template: template,

    afterRender: afterRender
});
