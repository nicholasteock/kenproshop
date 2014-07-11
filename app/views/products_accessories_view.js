var View     = require('./view'),
	template = require('./templates/products_accessories');

var afterRender = function() {
	console.log("RENDERED PRODUCTS ACCESSORIES VIEW");
	Application.updateBreadcrumb('products-accessories');
};

module.exports = View.extend({
    className: 'products-accessories-view',
    template: template,

    afterRender: afterRender
});
