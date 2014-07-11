var View     = require('./view'),
	template = require('./templates/gallery'),
	data 	 = require('./data/gallery');

var afterRender = function() {
	Application.updateBreadcrumb('gallery');	
};

var getRenderData = function() {
	return data;
};

module.exports = View.extend({
    className 		: 'gallery-view',
    template 		: template,
    getRenderData 	: getRenderData,
    afterRender 	: afterRender
});