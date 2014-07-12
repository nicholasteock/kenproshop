var View     = require('./view'),
	template = require('./templates/home');

var afterRender = function() {
	console.log("RENDERED HOME VIEW");
	Application.updateBreadcrumb('home');
};

module.exports = View.extend({
    className: 'home-view',
    template: template,

    afterRender: afterRender
});
