var View     = require('./view'),
	template = require('./templates/services'),
	data 	 = require('./data/services');

var afterRender = function() {
	Application.updateBreadcrumb('services');
};

var getRenderData = function() {
	return data;
};

module.exports = View.extend({
    className 		: 'container services-view',
    template 		: template,
    getRenderData 	: getRenderData,
    afterRender 	: afterRender
});
