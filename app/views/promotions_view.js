var View     = require('./view'),
	template = require('./templates/promotions');

var afterRender = function() {
	console.log("RENDERED PROMOTIONS VIEW");
	Application.updateBreadcrumb('promotions');
};

var getRenderData = function() {
	return {
			"result" : "success",
			"data" : {
				"promotions": [
					{
						"image" 			: "img/promotions/offerset.gif",
						"title" 			: "Offer Set Promotion",
						"descriptionTitle" 	: "Offer Set promotion for beginner/advance bowlers",
						"description" 		: "<p>Columbia 300 bowling ball + bowling shoes + single ball bag + ball polisher @ S$175</p><p>Ebonite bowling ball + bowling shoes + single ball bag + ball polisher @ S$255</p>"
					},
				]
			}
		}.data;
};

module.exports = View.extend({
    className 		: 'promotions-view',
    template 		: template,
    getRenderData 	: getRenderData,
    afterRender 	: afterRender
});
