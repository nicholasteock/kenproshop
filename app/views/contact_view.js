var View     = require('./view'),
	template = require('./templates/contact'),
	data 	 = require('./data/contact_details');

var afterRender = function() {
	Application.updateBreadcrumb('contact');
};

var getRenderData = function() {
	return data;
};

module.exports = View.extend({
    className 		: 'contact-view',
    template 		: template,
    getRenderData 	: getRenderData,
    afterRender 	: afterRender
});
