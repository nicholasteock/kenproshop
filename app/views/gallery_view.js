var View     = require('./view'),
	template = require('./templates/gallery');

var afterRender = function() {
	console.log("RENDERED GALLERY VIEW");
	Application.updateBreadcrumb('gallery');

	
};

module.exports = View.extend({
    className: 'gallery-view',
    template: template,

    afterRender: afterRender
});