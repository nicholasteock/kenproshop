var View     = require('./view'),
	template = require('./templates/hall_of_fame'),
	data 	 = require('./data/hall_of_fame');

var afterRender = function() {
	Application.updateBreadcrumb('hall-of-fame');
};

var getRenderData = function() {
	return data;
};

module.exports = View.extend({
    className 		: 'container hall-of-fame-view',
    template 		: template,
    getRenderData 	: getRenderData,
    afterRender 	: afterRender
});
