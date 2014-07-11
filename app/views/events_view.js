var View     = require('./view'),
	template = require('./templates/events');

var afterRender = function() {
	console.log("RENDERED EVENTS VIEW");
	Application.updateBreadcrumb('events');
};

var getRenderData = function() {
	return {
			"result" : "success",
			"data" : {
				"events": [
					{
						"image" 			: "img/events/demoday.jpg",
						"title" 			: "Track / Columbia Ball Demo Day",
						"descriptionTitle" 	: "",
						"description" 		: "<p>Ken Pro Shop is bringing back the Demo Day where everyone can attend and try out the new balls from Track and Columbia 300. Anyone can sign up and join and there are no obligations to purchase any ball from us. There will be lucky draws during the event itself. Please come if any of you are interested to try out the new balls.</p>"
					},
				]
			}
		}.data;
};

module.exports = View.extend({
    className 		: 'events-view',
    template 		: template,
    getRenderData 	: getRenderData,
    afterRender 	: afterRender
});
