// HANDLEBARS HELPERS

/******************************************************************************
 Products List Helper
******************************************************************************/

Handlebars.registerHelper( 'productsList', function(productsObject, options) {
	var output = "";

	for( var i=0, iLen=productsObject.length; i<iLen; i++ ) {
		var brandHtml = '<div class="panel panel-products"><div class="panel-heading"><img class="center-block logo" src="' + productsObject[i].brandImage + '" alt="' + productsObject[i].brand + '"></div><div class="panel-body"><ul class="list-group">';


		for( var j=0, jLen=productsObject[i].items.length; j<jLen; j++ ) {
			brandHtml += "<li class='list-group-item'><img class='photo center-block' src='" + productsObject[i].items[j].image + "'><div class='text-center'>" + productsObject[i].items[j].description + "</div></li>";
		}
									
		brandHtml += '</ul></div></div>';

		output += brandHtml;
	}

	return output;
});

/******************************************************************************
 Services List Helper
******************************************************************************/

Handlebars.registerHelper( 'servicesList', function(servicesObject, options) {
	var output = "";

	for( var i=0, iLen=servicesObject.length; i<iLen; i++ ) {
		var dataToggleName = "collapseServices" + i;
		output += '<div class="panel panel-custom">\
					<div class="panel-heading">\
						<div class="title text-center">' + servicesObject[i].title + '</div>\
					</div>\
					<div class="panel-body">\
						<img class="photo" src="' + servicesObject[i].image + '">\
						<div class="' + dataToggleName + ' panel-collapse collapse">\
					        <hr>\
					        <a data-toggle="collapse" data-parent=".panel-custom" href=".' + dataToggleName + '">\
								<div class="text-center">\
									<span class="glyphicon glyphicon-chevron-up"></span>\
								</div>\
							</a>\
					        <h3>' + servicesObject[i].descriptionTitle + '</h3>' + servicesObject[i].description + '\
					    </div>\
					</div>\
					<a data-toggle="collapse" data-parent=".panel-custom" href=".' + dataToggleName + '">\
						<div class="panel-footer text-center">\
							<span class="glyphicon glyphicon-info-sign"></span>\
						</div>\
					</a>\
				</div>';
	}

	return output;
});

/******************************************************************************
 Promotions List Helper
******************************************************************************/

Handlebars.registerHelper( 'promotionsList', function(promotionsObject, options) {
	var output = "";

	for( var i=0, iLen=promotionsObject.length; i<iLen; i++ ) {
		var dataToggleName = "collapsePromotions" + i;
		output += '<div class="panel panel-custom">\
					<div class="panel-heading">\
						<div class="title text-center">' + promotionsObject[i].title + '</div>\
					</div>\
					<div class="panel-body">\
						<img class="photo" src="' + promotionsObject[i].image + '">\
						<div class="' + dataToggleName + ' panel-collapse collapse">\
					        <hr>\
					        <a data-toggle="collapse" data-parent=".panel-custom" href=".' + dataToggleName + '">\
								<div class="text-center">\
									<span class="glyphicon glyphicon-chevron-up"></span>\
								</div>\
							</a>\
					        <h3>' + promotionsObject[i].descriptionTitle + '</h3>' + promotionsObject[i].description + '\
					    </div>\
					</div>\
					<a data-toggle="collapse" data-parent=".panel-custom" href=".' + dataToggleName + '">\
						<div class="panel-footer text-center">\
							<span class="glyphicon glyphicon-info-sign"></span>\
						</div>\
					</a>\
				</div>';
	}

	return output;
});

/******************************************************************************
 Events List Helper
******************************************************************************/

Handlebars.registerHelper( 'eventsList', function(eventsObject, options) {
	var output = "";

	for( var i=0, iLen=eventsObject.length; i<iLen; i++ ) {
		var dataToggleName = "collapseEvents" + i;
		output += '<div class="panel panel-custom">\
					<div class="panel-heading">\
						<div class="title text-center">' + eventsObject[i].title + '</div>\
					</div>\
					<div class="panel-body">\
						<img class="photo" src="' + eventsObject[i].image + '">\
						<div class="' + dataToggleName + ' panel-collapse collapse">\
					        <hr>\
					        <a data-toggle="collapse" data-parent=".panel-custom" href=".' + dataToggleName + '">\
								<div class="text-center">\
									<span class="glyphicon glyphicon-chevron-up"></span>\
								</div>\
							</a>\
					        <h3>' + eventsObject[i].descriptionTitle + '</h3>' + eventsObject[i].description + '\
					    </div>\
					</div>\
					<a data-toggle="collapse" data-parent=".panel-custom" href=".' + dataToggleName + '">\
						<div class="panel-footer text-center">\
							<span class="glyphicon glyphicon-info-sign"></span>\
						</div>\
					</a>\
				</div>';
	}

	return output;
});

/******************************************************************************
// Hall Of Fame Helper
******************************************************************************/

Handlebars.registerHelper( 'hallOfFameList', function(hallOfFameObject, options) {
	var output = "";

	for( var i=0, iLen=hallOfFameObject.length; i<iLen; i++ ) {
		var yearHtml = '<div class="yearPanel clearfix"><h1 class="text-center">' + hallOfFameObject[i].year + '</h1><div class="panel"><div class="panel-body thumbnails">';

		for( var j=0, jLen=hallOfFameObject[i].items.length; j<jLen; j++ ) {
			yearHtml += '<a class="galleryThumbnail col-xs-4" href="' + hallOfFameObject[i].items[j].image + '" data-lightbox="gallery' + hallOfFameObject[i].year + '" data-title="<h3>' + hallOfFameObject[i].items[j].descriptionTitle + '</h3><hr>'+ hallOfFameObject[i].items[j].description +'">\
							<img class="photo" src="' + hallOfFameObject[i].items[j].image + '">\
						</a>';
		}
									
		yearHtml +=	'</div></div></div>';

		output += yearHtml;
	}

	return output;
});

/******************************************************************************
// Photo Gallery Helper
******************************************************************************/

Handlebars.registerHelper( 'galleryList', function(galleryObject, options) {
	var output = "";

	for( var i=0, iLen=galleryObject.length; i<iLen; i++ ) {
		var yearHtml = '<div class="yearPanel clearfix"><h1 class="text-center">' + galleryObject[i].year + '</h1><div class="panel"><div class="panel-body thumbnails">';

		for( var j=0, jLen=galleryObject[i].items.length; j<jLen; j++ ) {
			yearHtml += '<a class="galleryThumbnail col-xs-4" href="' + galleryObject[i].items[j].image + '" data-lightbox="gallery' + galleryObject[i].year + '" data-title="<h3>' + galleryObject[i].items[j].date + '</h3><hr>'+ galleryObject[i].items[j].description +'">\
							<img class="photo" src="' + galleryObject[i].items[j].image + '">\
						</a>';
		}

		yearHtml +=	'</div></div></div>';

		output += yearHtml;
	}

	return output;
});

/******************************************************************************
// Contact Details Helper
******************************************************************************/

Handlebars.registerHelper( 'contactDetails', function(contactsObject, options) {
	var output 			= "",
		address 		= contactsObject.address.join("</div><div>"),
		operatingHours 	= contactsObject.operatingHours.join("</div><div>"),
		contact 		= contactsObject.contact.join("</div><div>");

	address 		= "<div>" + address + "</div>";
	operatingHours 	= "<div>" + operatingHours + "</div>";
	contact 		= "<div>" + contact + "</div>";


	var output 	= '<div class="contactDetails top col-xs-12 col-md-4 col-md-offset-1">\
						<div class="address top">\
							<div class="title">Address</div>\
							<div class="description top">' + address + '</div>\
						</div>\
						<div class="operatingHours top">\
							<div class="title">Operating Hours</div>\
							<div class="description top">' + operatingHours + '</div>\
						</div>\
						<div class="contactNumber top">\
							<div class="title">Reach Us @</div>\
							<div class="description top">' + contact + '</div>\
						</div>\
					</div>';

	return output;
});