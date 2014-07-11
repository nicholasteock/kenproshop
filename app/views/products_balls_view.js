var View     = require('./view'),
	template = require('./templates/products_balls');

var afterRender = function() {
	console.log("RENDERED PRODUCTS BALLS VIEW");
	Application.updateBreadcrumb('products-balls');
};

module.exports = View.extend({
    className: 'products-balls-view',
    template: template,

    afterRender: afterRender
});
