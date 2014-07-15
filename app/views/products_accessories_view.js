var View     = require('./view'),
	data 	 = require('./data/products_accessories'),
	template = require('./templates/products_accessories');

var afterRender = function() {
	Application.updateBreadcrumb('products-accessories');
};

var getRenderData = function() {
	return data;
};

module.exports = View.extend({
    className 		: 'container products-accessories-view',
    template 		: template,
    getRenderData 	: getRenderData,
    afterRender 	: afterRender
});
