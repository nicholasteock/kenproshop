var View     = require('./view'),
	template = require('./templates/hall_of_fame');

var afterRender = function() {
	console.log("RENDERED HALL OF FAME VIEW");
	Application.updateBreadcrumb('hall-of-fame');
};

var getRenderData = function() {
	return {
			"result" : "success",
			"data" : {
				"hallOfFame": [
					{	
						"year" 				: "2013",
						"items" 			: [
							{
								"image" 			: "img/gallery/bowlexpochris.gif",
								"descriptionTitle" 	: "Ramsey Lim",
								"description" 		: "Singapore<br>28th July 2013 - PBC July Medal 2013<br>Jurong Superbowl<br>Hammer First Blood",
							},
							{
								"image" 			: "img/gallery/bowlexpobilloneil.gif",
								"descriptionTitle"	: "Ramsey Lim",
								"description" 		: "Singapore<br>28th July 2013 - PBC July Medal 2013<br>Jurong Superbowl<br>Hammer First Blood",
							}
						]
					},
					{	
						"year" 				: "2012",
						"items" 			: [
							{
								"image" 			: "img/gallery/bowlexpochris.gif",
								"descriptionTitle" 	: "Ramsey Lim",
								"description" 		: "Singapore<br>28th July 2012 - PBC July Medal 2013<br>Jurong Superbowl<br>Hammer First Blood",
							},
							{
								"image" 			: "img/gallery/bowlexpobilloneil.gif",
								"descriptionTitle"	: "Ramsey Lim",
								"description" 		: "Singapore<br>28th July 2012 - PBC July Medal 2013<br>Jurong Superbowl<br>Hammer First Blood",
							}
						]
					},
				]
			}
		}.data;
};

module.exports = View.extend({
    className 		: 'hall-of-fame-view',
    template 		: template,
    getRenderData 	: getRenderData,
    afterRender 	: afterRender
});
