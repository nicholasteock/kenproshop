var View     = require('./view'),
	template = require('./templates/products_bags');

var afterRender = function() {
	console.log("RENDERED PRODUCTS BAGS VIEW");
	Application.updateBreadcrumb('products-bags');
};

module.exports = View.extend({
    className: 'products-bags-view',
    template: template,

    afterRender: afterRender
});
