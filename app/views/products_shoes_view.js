var View     = require('./view'),
	template = require('./templates/products_shoes');

var afterRender = function() {
	console.log("RENDERED PRODUCTS SHOES VIEW");
	Application.updateBreadcrumb('products-shoes');
};

module.exports = View.extend({
    className: 'products-shoes-view',
    template: template,

    afterRender: afterRender
});
