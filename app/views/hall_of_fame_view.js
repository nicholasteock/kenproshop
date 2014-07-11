var View     = require('./view'),
	template = require('./templates/hall_of_fame');

var afterRender = function() {
	console.log("RENDERED HALL OF FAME VIEW");
	Application.updateBreadcrumb('hall-of-fame');
};

module.exports = View.extend({
    className: 'hall-of-fame-view',
    template: template,

    afterRender: afterRender
});
