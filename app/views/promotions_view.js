var View     = require('./view'),
	template = require('./templates/promotions'),
	data 	 = require('./data/promotions');

var afterRender = function() {
	console.log("RENDERED PROMOTIONS VIEW");
	Application.updateBreadcrumb('promotions');
};

var getRenderData = function() {
	return data;
};

module.exports = View.extend({
    className 		: 'promotions-view',
    template 		: template,
    getRenderData 	: getRenderData,
    afterRender 	: afterRender
});
