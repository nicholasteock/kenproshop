var View     = require('./view'),
	template = require('./templates/about');

var afterRender = function() {
	console.log("RENDERED ABOUT VIEW");
	Application.updateBreadcrumb('about');
};

module.exports = View.extend({
    className: 'about-view',
    template: template,

    afterRender: afterRender
});
