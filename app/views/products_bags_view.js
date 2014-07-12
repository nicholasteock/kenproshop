var View     = require('./view'),
	template = require('./templates/products_bags'),
	data 	 = require('./data/products_bags');

var afterRender = function() {
	Application.updateBreadcrumb('products-bags');
};

var getRenderData = function() {
	return data;
};

module.exports = View.extend({
    className 		: 'container products-bags-view',
    template 		: template,
    getRenderData 	: getRenderData,
    afterRender 	: afterRender
});
