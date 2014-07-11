var View     = require('./view'),
	template = require('./templates/contact');

var afterRender = function() {
	console.log("RENDERED CONTACT VIEW");
	Application.updateBreadcrumb('contact');
};

var getRenderData = function() {
	return {
			"result" : "success",
			"data" : {
				"contactDetails": {
					"address" 			: [
						"Leisure Park Kallang",
						"5 Stadium Walk #02-23",
						"Singapore 397693"
					],
					"operatingHours"	: [
						"Mon - Sat: 1330hrs - 2200hrs",
						"Sun & PH: 1330hrs - 2100hrs"
					],
					"contact" 	: [
						"Phone : (+65) 6346-1811",
						"Mobile : (+65) 9615-6988",
						"Email&nbsp;&nbsp; : ken@kenproshop.com"
					]
				},
			}
		}.data;
};

module.exports = View.extend({
    className 		: 'contact-view',
    template 		: template,
    getRenderData 	: getRenderData,
    afterRender 	: afterRender
});
