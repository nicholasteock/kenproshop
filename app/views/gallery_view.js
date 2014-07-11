var View     = require('./view'),
	template = require('./templates/gallery');

var afterRender = function() {
	console.log("RENDERED GALLERY VIEW");
	Application.updateBreadcrumb('gallery');	
};

var getRenderData = function() {
	return {
			"result" : "success",
			"data" : {
				"gallery": [
					{	
						"year" 				: "2013",
						"items" 			: [
							{
								"image" : "images/gallery/bowlexpochris.gif",
								"date" : "21 July 2013",
								"description" : "Today marks the end of the National League Master Event! Congrats to all winners and participants!",
							},
							{
								"image" : "images/gallery/bowlexpobilloneil.gif",
								"date" : "21 July 2013",
								"description" : "Today marks the end of the National League Master Event! Congrats to all winners and participants!",
							}
						]
					},
					{	
						"year" 				: "2012",
						"items" 			: [
							{
								"image" : "images/gallery/bowlexpochris.gif",
								"date" : "21 July 2012",
								"description" : "Today marks the end of the National League Master Event! Congrats to all winners and participants!",
							},
							{
								"image" : "images/gallery/bowlexpobilloneil.gif",
								"date" : "21 July 2012",
								"description" : "Today marks the end of the National League Master Event! Congrats to all winners and participants!",
							}
						]
					},
				]
			}
		}.data;
};

module.exports = View.extend({
    className 		: 'gallery-view',
    template 		: template,
    getRenderData 	: getRenderData,
    afterRender 	: afterRender
});