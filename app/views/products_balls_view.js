var View     = require('./view'),
	template = require('./templates/products_balls'),
	data 	 = require('./data/products_balls');

var afterRender = function() {
	Application.updateBreadcrumb('products-balls');
};

var getRenderData = function() {
	return data;
};

module.exports = View.extend({
    className 		: 'container products-balls-view',
    template 		: template,
    getRenderData 	: getRenderData,
    afterRender 	: afterRender
});
