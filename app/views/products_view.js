var View     = require('./view'),
	template = require('./templates/products');

var afterRender = function() {
	console.log("RENDERED PRODUCTS VIEW");
	Application.updateBreadcrumb('products');
};

module.exports = View.extend({
    className: 'container products-view',
    template: template,

    afterRender: afterRender
});
