var View     = require('./view'),
	template = require('./templates/promotions');

var afterRender = function() {
	console.log("RENDERED PROMOTIONS VIEW");
	Application.updateBreadcrumb('promotions');
};

module.exports = View.extend({
    className: 'promotions-view',
    template: template,

    afterRender: afterRender
});
