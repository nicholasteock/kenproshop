var View     = require('./view'),
	template = require('./templates/products_shoes'),
	data 	 = require('./data/products_shoes');

var afterRender = function() {
	Application.updateBreadcrumb('products-shoes');
};

var getRenderData = function() {
	return data;
};

module.exports = View.extend({
    className 		: 'products-shoes-view',
    template 		: template,
    getRenderData 	: getRenderData,
    afterRender 	: afterRender
});
