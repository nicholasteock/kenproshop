(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var require = function(name, loaderPath) {
    var path = expand(name, '.');
    if (loaderPath == null) loaderPath = '/';

    if (has(cache, path)) return cache[path].exports;
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex].exports;
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '" from '+ '"' + loaderPath + '"');
  };

  var define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  var list = function() {
    var result = [];
    for (var item in modules) {
      if (has(modules, item)) {
        result.push(item);
      }
    }
    return result;
  };

  globals.require = require;
  globals.require.define = define;
  globals.require.register = define;
  globals.require.list = list;
  globals.require.brunch = true;
})();
require.register("application", function(exports, require, module) {
// Application bootstrapper.
Application = {
    initialize: function() {
        
        var HomeView                = require('views/home_view'),
            AboutView               = require('views/about_view'),
            ProductsView            = require('views/products_view'),
            ProductsBallsView       = require('views/products_balls_view'),
            ProductsBagsView        = require('views/products_bags_view'),
            ProductsShoesView       = require('views/products_shoes_view'),
            ProductsAccessoriesView = require('views/products_accessories_view'),
        	ServicesView            = require('views/services_view'),
            PromotionsView          = require('views/promotions_view'),
            EventsView              = require('views/events_view'),
            HallOfFameView          = require('views/hall_of_fame_view'),
            GalleryView             = require('views/gallery_view'),
            ContactView             = require('views/contact_view'),
        	Router                  = require('lib/router');
        
        this.homeView               = new HomeView();
        this.aboutView              = new AboutView();
        this.productsView           = new ProductsView();
        this.productsBallsView      = new ProductsBallsView();
        this.productsBagsView       = new ProductsBagsView();
        this.productsShoesView      = new ProductsShoesView();
        this.productsAccessoriesView= new ProductsAccessoriesView();
        this.servicesView           = new ServicesView();
        this.promotionsView         = new PromotionsView();
        this.eventsView             = new EventsView();
        this.hallOfFameView         = new HallOfFameView();
        this.galleryView            = new GalleryView();
        this.contactView            = new ContactView();
        this.router                 = new Router();
        
        if (typeof Object.freeze === 'function') Object.freeze(this)
        
        $(".nav a").click( function() {
        	$(".navbar-collapse").collapse('hide');
        });

    	$(".logo").click( function() {
        	$(".navbar-collapse").collapse('hide');
    	});
    },

    updateBreadcrumb: function( param ) {
        $(window).scrollTop(0,1);
    	$breadcrumb = $(".breadcrumb");
    	$breadcrumb.find("li").addClass("hide");

    	$breadcrumb.find('.front').removeClass('hide');
    	$breadcrumb.find('.home').removeClass('hide');

    	switch(param) {
    		case 'home':
                $breadcrumb.addClass("hide");
    			break;
    		case 'about':
    			$breadcrumb.removeClass("hide");
                $breadcrumb.find('.about').removeClass('hide');
    			break;
    		case 'products':
                $breadcrumb.removeClass("hide");
    			$breadcrumb.find('.products').removeClass('hide');
    			break;
            case 'products-balls':
                $breadcrumb.removeClass("hide");
                $breadcrumb.find('.products').removeClass('hide');
                $breadcrumb.find('.products-balls').removeClass('hide');
                break;
            case 'products-bags':
                $breadcrumb.removeClass("hide");
                $breadcrumb.find('.products').removeClass('hide');
                $breadcrumb.find('.products-bags').removeClass('hide');
                break;
            case 'products-shoes':
                $breadcrumb.removeClass("hide");
                $breadcrumb.find('.products').removeClass('hide');
                $breadcrumb.find('.products-shoes').removeClass('hide');
                break;
            case 'products-accessories':
                $breadcrumb.removeClass("hide");
                $breadcrumb.find('.products').removeClass('hide');
                $breadcrumb.find('.products-accessories').removeClass('hide');
                break;
            case 'services':
                $breadcrumb.removeClass("hide");
    			$breadcrumb.find('.services').removeClass('hide');
    			break;
            case 'promotions':
                $breadcrumb.removeClass("hide");
                $breadcrumb.find('.promotions').removeClass('hide');
                break;
            case 'events':
                $breadcrumb.removeClass("hide");
                $breadcrumb.find('.events').removeClass('hide');
                break;
            case 'hall-of-fame':
                $breadcrumb.removeClass("hide");
                $breadcrumb.find('.hall-of-fame').removeClass('hide');
                break;
    		case 'gallery':
                $breadcrumb.removeClass("hide");
    			$breadcrumb.find('.gallery').removeClass('hide');
    			break;
    		case 'contact':
                $breadcrumb.removeClass("hide");
    			$breadcrumb.find('.contact').removeClass('hide');
    			break;
    	}
    },
}

module.exports = Application

});

;require.register("initialize", function(exports, require, module) {
var application = require('application')

$(function() {
    application.initialize();
    Backbone.history.start();
})

});

;require.register("lib/router", function(exports, require, module) {
var application = require('application')

module.exports = Backbone.Router.extend({
    routes: {
        '' 						: 'home',
        'about-us' 				: 'about',
        'products' 				: 'products',
        'products/balls'		: 'productsBalls',
        'products/bags'			: 'productsBags',
        'products/shoes'		: 'productsShoes',
        'products/accessories'	: 'productsAccessories',
        'services'				: 'services',
        'promotions'            : 'promotions',
        'events'                : 'events',
        'hall-of-fame' 			: 'hallOfFame',
        'gallery' 				: 'gallery',
        'contact-us' 			: 'contact'
    },
    
    home: function() {
        $('.appStage').html(application.homeView.render().el);
    },

    about: function() {
    	$('.appStage').html(application.aboutView.render().el);
    },

    products: function() {
    	$('.appStage').html(application.productsView.render().el);
    },

    productsBalls: function() {
    	$('.appStage').html(application.productsBallsView.render().el);
    },

    productsBags: function() {
    	$('.appStage').html(application.productsBagsView.render().el);
    },

    productsShoes: function() {
    	$('.appStage').html(application.productsShoesView.render().el);
    },

    productsAccessories: function() {
    	$('.appStage').html(application.productsAccessoriesView.render().el);
    },

    services: function() {
        $('.appStage').html(application.servicesView.render().el);
    },

    promotions: function() {
    	$('.appStage').html(application.promotionsView.render().el);
    },

    events: function() {
        $('.appStage').html(application.eventsView.render().el);
    },

    hallOfFame: function() {
    	$('.appStage').html(application.hallOfFameView.render().el);
    },

    gallery: function() {
    	$('.appStage').html(application.galleryView.render().el);
    },

    contact: function() {
    	$('.appStage').html(application.contactView.render().el);
    },
});

});

;require.register("lib/view_helper", function(exports, require, module) {
// HANDLEBARS HELPERS

/******************************************************************************
 Products List Helper
******************************************************************************/

Handlebars.registerHelper( 'productsList', function(productsObject, options) {
	var output = "";

	for( var i=0, iLen=productsObject.length; i<iLen; i++ ) {
		var brandHtml = '<div class="panel panel-products"><div class="panel-heading"><img class="center-block logo" src="' + productsObject[i].brandImage + '" alt="' + productsObject[i].brand + '"></div><div class="panel-body"><ul class="list-group">';


		for( var j=0, jLen=productsObject[i].items.length; j<jLen; j++ ) {
			brandHtml += "<li class='col-xs-12 col-md-4 list-group-item product'><img class='photo center-block' src='" + productsObject[i].items[j].image + "'><div class='text-center description'>" + productsObject[i].items[j].description + "</div></li>";
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
		output += '<div class="col-xs-12 col-md-4"><div class="panel panel-custom">\
					<div class="panel-heading">\
						<div class="title text-center">' + servicesObject[i].title + '</div>\
					</div>\
					<div class="panel-body">\
						<img class="center-block photo" src="' + servicesObject[i].image + '">\
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
				</div></div>';
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
		output += '<div class="col-xs-12 col-md-6"><div class="panel panel-custom">\
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
				</div></div>';
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
		output += '<div class="col-xs-12 col-md-6"><div class="panel panel-custom">\
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
				</div></div>';
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
			yearHtml += '<a class="galleryThumbnail col-xs-4 col-md-3" href="' + hallOfFameObject[i].items[j].image + '" data-lightbox="gallery' + hallOfFameObject[i].year + '" data-title="<h3>' + hallOfFameObject[i].items[j].descriptionTitle + '</h3><hr>'+ hallOfFameObject[i].items[j].description +'">\
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
			yearHtml += '<a class="galleryThumbnail col-xs-4 col-md-3" href="' + galleryObject[i].items[j].image + '" data-lightbox="gallery' + galleryObject[i].year + '" data-title="<h3>' + galleryObject[i].items[j].date + '</h3><hr>'+ galleryObject[i].items[j].description +'">\
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


	var output 	= '<div class="contactDetails col-xs-12 col-md-4 col-md-offset-1">\
						<div class="address">\
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
});

;require.register("models/collection", function(exports, require, module) {
// Base class for all collections
module.exports = Backbone.Collection.extend({
    
})

});

;require.register("models/model", function(exports, require, module) {
// Base class for all models
module.exports = Backbone.Model.extend({
    
})

});

;require.register("views/about_view", function(exports, require, module) {
var View     = require('./view'),
	template = require('./templates/about');

var afterRender = function() {
	console.log("RENDERED ABOUT VIEW");
	Application.updateBreadcrumb('about');
};

module.exports = View.extend({
    className: 'container about-view',
    template: template,

    afterRender: afterRender
});

});

;require.register("views/contact_view", function(exports, require, module) {
var View     = require('./view'),
	template = require('./templates/contact'),
	data 	 = require('./data/contact_details');

var afterRender = function() {
	Application.updateBreadcrumb('contact');
};

var getRenderData = function() {
	return data;
};

module.exports = View.extend({
    className 		: 'container contact-view',
    template 		: template,
    getRenderData 	: getRenderData,
    afterRender 	: afterRender
});

});

;require.register("views/data/contact_details", function(exports, require, module) {
/******************************************************************************
 Contact details data
 ===============================================================================

 Instructions: 
 1) Edit the relevant contents and save.

******************************************************************************/

module.exports = {

    "contactDetails": {
        "address"           : [
            "Leisure Park Kallang",
            "5 Stadium Walk #02-23",
            "Singapore 397693"
        ],
        "operatingHours"    : [
            "Mon - Sat: 1330hrs - 2200hrs",
            "Sun & PH: 1330hrs - 2100hrs"
        ],
        "contact"           : [
            "Phone : (+65) 6346-1811",
            "Mobile : (+65) 9615-6988",
            "Email&nbsp;&nbsp; : ken@kenproshop.com"
        ]
    }

};
});

;require.register("views/data/events", function(exports, require, module) {
/******************************************************************************
  Events data
===============================================================================

 Instructions for adding a new event: 
 1) Save the image of the event in the img/events folder.
 2) Copy this segment of code

        {
            "image"             : "img/events/<Event Image File Here>",
            "title"             : "<Name Of Event Here>",
            "descriptionTitle"  : "<Heading for event description>",
            "description"       : "<Description of event here>",
        },

3) Paste it in the 'events' array.

******************************************************************************/

module.exports = {

    "events": [
        {
            "image"             : "img/events/demoday.jpg",
            "title"             : "Track / Columbia Ball Demo Day",
            "descriptionTitle"  : "",
            "description"       : "<p>Ken Pro Shop is bringing back the Demo Day where everyone can attend and try out the new balls from Track and Columbia 300. Anyone can sign up and join and there are no obligations to purchase any ball from us. There will be lucky draws during the event itself. Please come if any of you are interested to try out the new balls.</p>"
        },
        // Paste new event here
    ]
    
};
});

;require.register("views/data/gallery", function(exports, require, module) {
/******************************************************************************
 Photo gallery data
===============================================================================

 Instructions for adding a new photo: 
 1) Save the image of the photo in the img/gallery folder.
 2) Copy this segment of code

        {
            "image"         : "img/gallery/<Photo Image File Here>",
            "date"          : "<Date Of Photo Here>",
            "description"   : "<Photo Caption Here>"
        },

3) Paste it in the 'items' array of the respective year.

===============================================================================

Instructions for adding a new year:
1)  Copy this segment of code

        {   
            "year"              : "<Year Here>",
            "items"             : [
                // Paste new photo for the year <Year Here> here
            ]
        },

3)  Paste it in the 'gallery' array.
4)  Follow the instructions for adding a new photo for that year as mentioned
    above.

===============================================================================

For optimal performance
1)  Store images in JPEG format

******************************************************************************/

module.exports = {

    "gallery": [
        // Paste new year here

        // Begin 2013 Gallery
        //=====================================================================
        {   
            "year"              : "2013",
            "items"             : [
                {
                    "image"         : "img/gallery/bowlexpochris.gif",
                    "date"          : "21 July 2013",
                    "description"   : "Today marks the end of the National League Master Event! Congrats to all winners and participants!",
                },
                {
                    "image"         : "img/gallery/bowlexpobilloneil.gif",
                    "date"          : "21 July 2013",
                    "description"   : "Today marks the end of the National League Master Event! Congrats to all winners and participants!",
                },
                // Paste new photo for the year 2013 here
            ]
        },
        //=====================================================================
        // End 2013 Gallery

        // Begin 2012 Gallery
        //=====================================================================
        {   
            "year"              : "2012",
            "items"             : [
                {
                    "image"         : "img/gallery/bowlexpochris.gif",
                    "date"          : "21 July 2012",
                    "description"   : "Today marks the end of the National League Master Event! Congrats to all winners and participants!",
                },
                {
                    "image"         : "img/gallery/bowlexpobilloneil.gif",
                    "date"          : "21 July 2012",
                    "description"   : "Today marks the end of the National League Master Event! Congrats to all winners and participants!",
                },
                // Paste new photo for the year 2012 here
            ]
        },
        // End 2012 Gallery
        //=====================================================================
    ]

};
});

;require.register("views/data/hall_of_fame", function(exports, require, module) {
/******************************************************************************
 Hall Of Fame data
===============================================================================

 Instructions for adding a new photo: 
 1) Save the image of the photo in the img/hall-of-fame folder.
 2) Copy this segment of code

        {
            "image"             : "img/hall-of-fame/<Hall Of Fame Image File Here>",
            "descriptionTitle"  : "<Title Of Photo Caption Here>",
            "description"       : "<Photo Caption Here>"
        },

3) Paste it in the 'items' array of the respective year.

===============================================================================

Instructions for adding a new year:
1)  Copy this segment of code

        {   
            "year"              : "<Year Here>",
            "items"             : [
                // Paste new photo for the year <Year Here> here
            ]
        },

3)  Paste it in the 'hallOfFame' array.
4)  Follow the instructions for adding a new photo for that year as mentioned
    above.

===============================================================================

For optimal performance
1)  Store images in JPEG format

******************************************************************************/

module.exports = {

    "hallOfFame": [
        {   
            "year"              : "2013",
            "items"             : [
                {
                    "image"             : "img/hall-of-fame/bowlexpochris.gif",
                    "descriptionTitle"  : "Ramsey Lim",
                    "description"       : "Singapore<br>28th July 2013 - PBC July Medal 2013<br>Jurong Superbowl<br>Hammer First Blood",
                },
                {
                    "image"             : "img/hall-of-fame/bowlexpobilloneil.gif",
                    "descriptionTitle"  : "Ramsey Lim",
                    "description"       : "Singapore<br>28th July 2013 - PBC July Medal 2013<br>Jurong Superbowl<br>Hammer First Blood",
                },
                {
                    "image"             : "img/hall-of-fame/bowlexpobilloneil.gif",
                    "descriptionTitle"  : "Ramsey Lim",
                    "description"       : "Singapore<br>28th July 2013 - PBC July Medal 2013<br>Jurong Superbowl<br>Hammer First Blood",
                },
                {
                    "image"             : "img/hall-of-fame/bowlexpochris.gif",
                    "descriptionTitle"  : "Ramsey Lim",
                    "description"       : "Singapore<br>28th July 2013 - PBC July Medal 2013<br>Jurong Superbowl<br>Hammer First Blood",
                },
                {
                    "image"             : "img/hall-of-fame/bowlexpobilloneil.gif",
                    "descriptionTitle"  : "Ramsey Lim",
                    "description"       : "Singapore<br>28th July 2013 - PBC July Medal 2013<br>Jurong Superbowl<br>Hammer First Blood",
                },
                {
                    "image"             : "img/hall-of-fame/bowlexpobilloneil.gif",
                    "descriptionTitle"  : "Ramsey Lim",
                    "description"       : "Singapore<br>28th July 2013 - PBC July Medal 2013<br>Jurong Superbowl<br>Hammer First Blood",
                },
                // Paste new photo for the year 2013 here
            ]
        },
        {   
            "year"              : "2012",
            "items"             : [
                {
                    "image"             : "img/hall-of-fame/bowlexpochris.gif",
                    "descriptionTitle"  : "Ramsey Lim",
                    "description"       : "Singapore<br>28th July 2012 - PBC July Medal 2013<br>Jurong Superbowl<br>Hammer First Blood",
                },
                {
                    "image"             : "img/hall-of-fame/bowlexpobilloneil.gif",
                    "descriptionTitle"  : "Ramsey Lim",
                    "description"       : "Singapore<br>28th July 2012 - PBC July Medal 2013<br>Jurong Superbowl<br>Hammer First Blood",
                },
                // Paste new photo for the year 2012 here
            ]
        },
    ]
    
};
});

;require.register("views/data/products_accessories", function(exports, require, module) {
/******************************************************************************
 Products - Accessories data
===============================================================================

 Instructions for adding a new accessory: 
 1) Save the image of the accessory in the img/accessories folder.
 2) Copy this segment of code

        {
            "image"         : "img/accessories/<Accessory Image File Name Here>",
            "description"   : "<Accessory Name Here>"
        },

3) Paste it in the 'items' array of the respective brand.

===============================================================================

Instructions for adding a new brand:
1)  Save the image of the brand in the img/brands folder 
2)  Copy this segment of code

        {
            "brand"             : "<Brand Name Here>",
            "brandImage"        : "img/brands/<Brand Image File Name Here>",
            "items"             : []
        },

3)  Paste it in the 'accessories' array.
4)  Follow the instructions for adding a new accessory into the brand as mentioned
    above.

===============================================================================

For optimal performance
1)  Store images in JPEG format
2)  Brand images should be edited to width 150px
3)  Accessory images should be edited to width 230px

******************************************************************************/

module.exports = {
    "accessories": [
        {   
            "brand"             : "Brunswick",
            "brandImage"        : "img/brands/brunswick.jpg",
            "items"             : [
                {
                    "image"         : "img/bags/teambrunswickslimtriple.gif",
                    "description"   : "Team Brunswick Slim Triple with shoe compartment"
                },
                {
                    "image"         : "img/bags/brunswickkoolerbag.gif",
                    "description"   : "Kooler Bag"
                },
                {
                    "image"         : "img/bags/teambrunswickslimtriple.gif",
                    "description"   : "Team Brunswick Slim Triple with shoe compartment"
                },
                {
                    "image"         : "img/bags/brunswickkoolerbag.gif",
                    "description"   : "Kooler Bag"
                },
                {
                    "image" : "img/bags/teambrunswickslimtriple.gif",
                    "description" : "Team Brunswick Slim Triple with shoe compartment"
                },
            ]
        },
        {   
            "brand"             : "Global 900",
            "brandImage"        : "img/brands/global900.jpg",
            "items"             : [
                {
                    "image"         : "img/bags/Global9003BallDeluxe.gif",
                    "description"   : "900 Global Deluxe 3 Ball Triple Roller"
                },
            ]
        },

    ]
};
});

;require.register("views/data/products_bags", function(exports, require, module) {
/******************************************************************************
 Products - Bags data
===============================================================================

 Instructions for adding a new bag: 
 1) Save the image of the bag in the img/bags folder.
 2) Copy this segment of code

        {
            "image"         : "img/bag/<Bag Image File Name Here>",
            "description"   : "<Bag Name Here>"
        },

3) Paste it in the 'items' array of the respective brand.

===============================================================================

Instructions for adding a new brand:
1)  Save the image of the brand in the img/brands folder 
2)  Copy this segment of code

        {
            "brand"             : "<Brand Name Here>",
            "brandImage"        : "img/brands/<Brand Image File Name Here>",
            "items"             : []
        },

3)  Paste it in the 'bags' array.
4)  Follow the instructions for adding a new bag into the brand as mentioned
    above.

===============================================================================

For optimal performance
1)  Store images in JPEG format
2)  Brand images should be edited to width 150px
3)  Bag images should be edited to width 230px

******************************************************************************/

module.exports = {
    "bags": [
        {   
            "brand"             : "Brunswick",
            "brandImage"        : "img/brands/brunswick.jpg",
            "items"             : [
                {
                    "image"         : "img/bags/brunswickkoolerbag.gif",
                    "description"   : "Kooler Bag"
                },
                {
                    "image"         : "img/bags/teambrunswickslimtriple.gif",
                    "description"   : "Team Brunswick Slim Triple with shoe compartment"
                },
                {
                    "image"         : "img/bags/brunswickkoolerbag.gif",
                    "description"   : "Kooler Bag"
                },
                {
                    "image"         : "img/bags/teambrunswickslimtriple.gif",
                    "description"   : "Team Brunswick Slim Triple with shoe compartment"
                },
                {
                    "image"         : "img/bags/brunswickkoolerbag.gif",
                    "description"   : "Kooler Bag"
                },
                {
                    "image"         : "img/bags/teambrunswickslimtriple.gif",
                    "description"   : "Team Brunswick Slim Triple with shoe compartment"
                },
            ]
        },
        {   
            "brand"             : "Global 900",
            "brandImage"        : "img/brands/global900.jpg",
            "items"             : [
                {
                    "image"         : "img/bags/Global9003BallDeluxe.gif",
                    "description"   : "900 Global Deluxe 3 Ball Triple Roller"
                },
            ]
        },

    ]
};
});

;require.register("views/data/products_balls", function(exports, require, module) {
/******************************************************************************
 Products - Balls data
===============================================================================

 Instructions for adding a new ball: 
 1) Save the image of the ball in the img/balls folder.
 2) Copy this segment of code

        {
            "image"         : "img/balls/<Ball Image File Name Here>",
            "description"   : "<Ball Name Here>"
        },

3) Paste it in the 'items' array of the respective brand.

===============================================================================

Instructions for adding a new brand:
1)  Save the image of the brand in the img/brands folder 
2)  Copy this segment of code

        {
            "brand"             : "<Brand Name Here>",
            "brandImage"        : "img/brands/<Brand Image File Name Here>",
            "items"             : []
        },

3)  Paste it in the 'balls' array.
4)  Follow the instructions for adding a new ball into the brand as mentioned
    above.

===============================================================================

For optimal performance
1)  Store images in JPEG format
2)  Brand images should be edited to width 150px
3)  Ball images should be edited to width 230px

******************************************************************************/

module.exports = {

    "balls": [
        {   
            "brand"             : "Ebonite",
            "brandImage"        : "img/brands/ebonite.jpg",
            "items"             : [
                {
                    "image"         : "img/balls/pivotpoint.jpg",
                    "description"   : "Pivot Point"
                },
                {
                    "image"         : "img/balls/Pivot.jpg",
                    "description"   : "Pivot"
                },
                {
                    "image"         : "img/balls/source.jpg",
                    "description"   : "Source"
                },
                {
                    "image"         : "img/balls/champion.jpg",
                    "description"   : "Champion"
                },
                {
                    "image"         : "img/balls/angryred.jpg",
                    "description"   : "Angry Bird (Red)"
                },
                {
                    "image"         : "img/balls/blackbird.jpg",
                    "description"   : "Angry Bird (Black)"
                },
                {
                    "image"         : "img/balls/greenpig.jpg",
                    "description"   : "Angry Bird (Green Pig)"
                },
                {
                    "image"         : "img/balls/maxim.jpg",
                    "description"   : "Maxim"
                },
                {
                    "image"         : "img/balls/cyclone.jpg",
                    "description"   : "Cyclone"
                },
            ]
        },
        {
            "brand"             : "Hammer",
            "brandImage"        : "img/brands/hammer.jpg",
            "items"             : [
                {
                    "image"         : "img/balls/assasin.jpg",
                    "description"   : "Black Widow Assassin"
                },
                {
                    "image"         : "img/balls/deadlyaim.jpg",
                    "description"   : "Deadly Aim"
                },
                {
                    "image"         : "img/balls/abshook.jpg",
                    "description"   : "Absolut Hook"
                },
            ]
        },
        {
            "brand"             : "Columbia 300",
            "brandImage"        : "img/brands/c300logo.jpg",
            "items"             : [
                {
                    "image"         : "img/balls/insane.jpg",
                    "description"   : "N'S@ne Antics"
                },
                {
                    "image"         : "img/balls/crazy.jpg",
                    "description"   : "Crazy Antics"
                },              
            ]
        },
        {
        
            "brand"             : "Track",
            "brandImage"        : "img/brands/tracklogo.jpg",
            "items"             : [
                {
                    "image"         : "img/balls/lx16.jpg",
                    "description"   : "Lx16"
                },
                {
                    "image"         : "img/balls/mx10.jpg",
                    "description"   : "Mx10"
                },  
                {
                    "image"         : "img/balls/hx05.jpg",
                    "description"   : "Hx05"
                },              
                {
                    "image"         : "img/balls/400ase.jpg",
                    "description"   : "400A SE"
                },              
            ]
        },
        {
        
            "brand"             : "Brunswick",
            "brandImage"        : "img/brands/brunswick.jpg",
            "items"             : [
                {
                    "image"         : "img/balls/meleecross.jpg",
                    "description"   : "Melee Cross"
                },
                {
                    "image"         : "img/balls/exile.jpg",
                    "description"   : "Fortera Exile"
                },  
                {
                    "image"         : "img/balls/melee.jpg",
                    "description"   : "Melee"
                },              
                {
                    "image"         : "img/balls/helloblk.jpg",
                    "description"   : "Hello Kitty Black"
                },
                {
                    "image"         : "img/balls/smiley.jpg",
                    "description"   : "Smiley Viz-a-Ball"
                },      
            ]
        },
        {
        
            "brand"             : "DV8",
            "brandImage"        : "img/brands/dv8.jpg",
            "items"             : [
                {
                    "image"         : "img/balls/schizo.jpg",
                    "description"   : "Ruckus Schizo"
                },
                {
                    "image"         : "img/balls/rudedude.jpg",
                    "description"   : "Rude Dude"
                },  
                {
                    "image"         : "img/balls/dude.jpg",
                    "description"   : "Dude"
                },                              
            ]
        },
        {
        
            "brand"             : "Storm",
            "brandImage"        : "img/brands/storm.jpg",
            "items"             : [
                {
                    "image"         : "img/balls/optimus.jpg",
                    "description"   : "Optimus"
                },
                {
                    "image"         : "img/balls/punchout.jpg",
                    "description"   : "Punch Out"
                },  
                {
                    "image"         : "img/balls/zero.jpg",
                    "description"   : "Zero Gravity"
                },
                {
                    "image"         : "img/balls/pitchblk.jpg",
                    "description"   : "Pitch Black"
                },  
                {
                    "image"         : "img/balls/fusion.jpg",
                    "description"   : "IQ Tour Fusion"
                },          
            ]
        },
        {
        
            "brand"             : "Roto Grip",
            "brandImage"        : "img/brands/roto.jpg",
            "items"             : [
                {
                    "image"         : "img/balls/sinister.jpg",
                    "description"   : "Sinister"
                },
                {
                    "image"         : "img/balls/hyper.jpg",
                    "description"   : "Hyper Cell"
                },  
                {
                    "image"         : "img/balls/asylum.jpg",
                    "description"   : "Asylum"
                },
                {
                    "image"         : "img/balls/uproar.jpg",
                    "description"   : "Uproar"
                },  
            ]
        },  
        {
        
            "brand"             : "OTB",
            "brandImage"        : "img/brands/otb.jpg",
            "items"             : [
                {
                    "image"         : "img/balls/belmo.jpg",
                    "description"   : "Jason Belmonte Bowling Foundation"
                },  
                {
                    "image"         : "img/balls/splitters.jpg",
                    "description"   : "PBA Silver Lake Atom Splitters"
                },
                {
                    "image"         : "img/balls/singapore.jpg",
                    "description"   : "Singapore Flag"
                },
            ]
        },
        {
        
            "brand"             : "Spinner Balls",
            "brandImage"        : "",
            "items"             : [
                {
                    "image"         : "img/balls/codered.jpg",
                    "description"   : "Code Red"
                },
                {
                    "image"         : "img/balls/champion.jpg",
                    "description"   : "Champion"
                },  
                {
                    "image"         : "img/balls/source.jpg",
                    "description"   : "Source"
                },
                {
                    "image"         : "img/balls/zero.jpg",
                    "description"   : "Zero Gravity"
                },
            ]
        }

    ]
    
};
});

;require.register("views/data/products_shoes", function(exports, require, module) {
/******************************************************************************
 Products - Shoes data
===============================================================================

 Instructions for adding a new shoe: 
 1) Save the image of the shoe in the img/shoes folder.
 2) Copy this segment of code

        {
            "image"         : "img/shoes/<Shoe Image File Name Here>",
            "description"   : "<Shoe Name Here>"
        },

3) Paste it in the 'items' array of the respective brand.

===============================================================================

Instructions for adding a new brand:
1)  Save the image of the brand in the img/brands folder 
2)  Copy this segment of code

        {
            "brand"             : "<Brand Name Here>",
            "brandImage"        : "img/brands/<Brand Image File Name Here>",
            "items"             : []
        },

3)  Paste it in the 'shoes' array.
4)  Follow the instructions for adding a new shoe into the brand as mentioned
    above.

===============================================================================

For optimal performance
1)  Store images in JPEG format
2)  Brand images should be edited to width 150px
3)  Shoe images should be edited to width 230px

******************************************************************************/

module.exports = {
    "shoes": [
        {
            "brand": "Dexter",
            "brandImage": "img/brands/dexter.jpg",
            "items": [
                {
                    "image": "img/shoes/sstblkgold.jpg",
                    "description": "Men's SST8 Black/Gold"
                },
                {
                    "image": "img/shoes/ssttank.jpg",
                    "description": "Men's SST Tank"
                },
                {
                    "image": "img/shoes/blublk.jpg",
                    "description": "SST 8 SE Black/Silver/Blue"
                },
                {
                    "image": "img/shoes/sepurp.jpg",
                    "description": "Women's SST 8 SE Black/Purple"
                },
                {
                    "image": "img/shoes/whitegold.jpg",
                    "description": "Men SST8 Black/White/Gold"
                },
                {
                    "image": "img/shoes/redwhite.jpg",
                    "description": "Ladies SST8 Black/White/Red"
                },
                {
                    "image": "img/shoes/blkred.jpg",
                    "description": "Men's SST8 Black/Red"
                },
                {
                    "image": "img/shoes/ana.jpg",
                    "description": "Women ANA Silver/Light Grey"
                },
                {
                    "image": "img/shoes/megan.jpg",
                    "description": "Women's Megan"
                }
            ]
        },
        {
            "brand": "Storm",
            "brandImage": "img/brands/Storm.jpg",
            "items": [
                {
                    "image": "img/shoes/sp900b.jpg",
                    "description": "Men's SP² 900™ - White"
                },
                {
                    "image": "img/shoes/sp900blk.jpg",
                    "description": "Men's SP² 900™ - Black"
                },
                {
                    "image": "img/shoes/602.jpg",
                    "description": "Ladies SP² 602™"
                },
                {
                    "image": "img/shoes/601.jpg",
                    "description": "Ladies StormSP² 601™"
                },
                {
                    "image": "img/shoes/lightning.jpg",
                    "description": "Men's Lightning™"
                },
                {
                    "image": "img/shoes/Electra.jpg",
                    "description": "Ladies Electra™"
                },
                {
                    "image": "img/shoes/Mariah.jpg",
                    "description": "Ladies Mariah™"
                }
            ]
        },
        {
            "brand": "Brunswick",
            "brandImage": "img/brands/Brunswick.jpg",
            "items": [
                {
                    "image": "img/shoes/curve.jpg",
                    "description": "Curve"
                }
            ]
        },
        {
            "brand": "Max",
            "brandImage": "img/brands/dexter.jpg",
            "items": [
                {
                    "image": "img/shoes/maxb.jpg",
                    "description": "Max Interchangeable Shoes Orange"
                },
                {
                    "image": "img/shoes/maxo.jpg",
                    "description": "Max Interchangeable Shoes Orange"
                }
            ]
        },
        {
            "brand": "Pro-am",
            "brandImage": "img/brands/dexter.jpg",
            "items": [
                {
                    "image": "img/shoes/s400.jpg",
                    "description": "S-400"
                }
            ]
        },
        {
            "brand": "Radical",
            "brandImage": "img/brands/dexter.jpg",
            "items": [
                {
                    "image": "img/shoes/radw.jpg",
                    "description": "Basic Shoes White/Gold"
                },
                {
                    "image": "img/shoes/radblk.jpg",
                    "description": "Basic Shoes Black/Silver"
                }
            ]
        }
    ]
};
});

;require.register("views/data/promotions", function(exports, require, module) {
/******************************************************************************
  Promotions data
===============================================================================

 Instructions for adding a new promotion: 
 1) Save the image of the service in the img/promotions folder.
 2) Copy this segment of code

        {
            "image"             : "img/promotions/<Promotion Image File Here>",
            "title"             : "<Name Of Promotion Here>",
            "descriptionTitle"  : "<Heading for promotion description>",
            "description"       : "<Description of promotion here>",
        },

3) Paste it in the 'promotions' array.

******************************************************************************/

module.exports = {

    "promotions": [
        {
            "image"             : "img/promotions/offerset.gif",
            "title"             : "Offer Set Promotion",
            "descriptionTitle"  : "Offer Set promotion for beginner/advance bowlers",
            "description"       : "<p>Columbia 300 bowling ball + bowling shoes + single ball bag + ball polisher @ S$175</p><p>Ebonite bowling ball + bowling shoes + single ball bag + ball polisher @ S$255</p>"
        },
        // Paste new promotion here
    ]

};
});

;require.register("views/data/services", function(exports, require, module) {
/******************************************************************************
  Services data
===============================================================================

 Instructions for adding a new service: 
 1) Save the image of the service in the img/services folder.
 2) Copy this segment of code

        {
            "image"             : "img/services/<Service Image File Here>",
            "title"             : "<Name Of Service Here>",
            "descriptionTitle"  : "<Heading for service description>",
            "description"       : "<Description of service here>",
        },

3) Paste it in the 'services' array.

******************************************************************************/

module.exports = {

    "services": [
        {
            "image"             : "img/services/thewave.png",
            "title"             : "The Wave by PowerHouse",
            "descriptionTitle"  : "",
            "description"       : "Please visit <a href='http://powerhousebowling.com/products/product_detail/the_wave'><strong>The Wave</strong></a> for more information."
        },
        {
            "image"             : "img/services/hookrestoration.jpg",
            "title"             : "Bowling Ball Hook Restoration",
            "descriptionTitle"  : "Ebonite PowerHouse Hook Again Treatment",
            "description"       : "<p>The first and ONLY proven formula to actually restore hook to 'dead' bowling balls!</p><p>Brings as much as 99.8% performance back.</p><p>Performance tested, safe for reactive and particle balls.</p><p>Quick Recovery - Works in 24 hours.</p>"
        },
        {
            "image"             : "img/services/resurfacing.jpg",
            "title"             : "Bowling Ball Resurfacing",
            "descriptionTitle"  : "Haus Resurfacing System",
            "description"       : "<p>After numerous games on wood or synthetic lanes, your ball will loose consistent cover reaction.</p><p>Regular resurfacing with the Haus Resurfacing System can:<ul><li><h6><strong>IMPROVE YOUR GAME</strong></h6>Bowling consistency requires consistent cover reaction. Regular resurfacing can help you achieve that critical consistency.</li><li><h6><strong>LENGTHEN YOUR BALL'S LIFE</strong></h6>By resurfacing your ball, minimal ball surface is removed, avoiding the need to remove deep track and drop areas, and extending the length of time your ball meets ABC specifications.</li><li><h6><strong>ASSURE YOU OF RESURFACING CONSISTENCY</strong></h6>Consistent &amp; accurate results, time after time. Unlike manually resurfaced balls, our automatic system maintains and returns your ball back to it's original manufacturers' specifications or better. Operator error is virtually eliminated. Your entire ball surface is refinished, not just the drop and track areas.</li></p>"
        },
    ]
    
};
});

;require.register("views/events_view", function(exports, require, module) {
var View     = require('./view'),
	template = require('./templates/events'),
	data 	 = require('./data/events');

var afterRender = function() {
	console.log("RENDERED EVENTS VIEW");
	Application.updateBreadcrumb('events');
};

var getRenderData = function() {
	return data;
};

module.exports = View.extend({
    className 		: 'container events-view',
    template 		: template,
    getRenderData 	: getRenderData,
    afterRender 	: afterRender
});

});

;require.register("views/gallery_view", function(exports, require, module) {
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
    className 		: 'container gallery-view',
    template 		: template,
    getRenderData 	: getRenderData,
    afterRender 	: afterRender
});
});

;require.register("views/hall_of_fame_view", function(exports, require, module) {
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

});

;require.register("views/home_view", function(exports, require, module) {
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

});

;require.register("views/products_accessories_view", function(exports, require, module) {
var View     = require('./view'),
	data 	 = require('./data/products_accessories'),
	template = require('./templates/products_accessories');

var afterRender = function() {
	Application.updateBreadcrumb('products-accessories');
};

var getRenderData = function() {
	return data;
};

module.exports = View.extend({
    className 		: 'container products-accessories-view',
    template 		: template,
    getRenderData 	: getRenderData,
    afterRender 	: afterRender
});

});

;require.register("views/products_bags_view", function(exports, require, module) {
var View     = require('./view'),
	template = require('./templates/products_bags'),
	data 	 = require('./data/products_bags');

var afterRender = function() {
	Application.updateBreadcrumb('products-bags');
};

var getRenderData = function() {
	return data;
};

module.exports = View.extend({
    className 		: 'container products-bags-view',
    template 		: template,
    getRenderData 	: getRenderData,
    afterRender 	: afterRender
});

});

;require.register("views/products_balls_view", function(exports, require, module) {
var View     = require('./view'),
	template = require('./templates/products_balls'),
	data 	 = require('./data/products_balls');

var afterRender = function() {
	Application.updateBreadcrumb('products-balls');
};

var getRenderData = function() {
	return data;
};

module.exports = View.extend({
    className 		: 'container products-balls-view',
    template 		: template,
    getRenderData 	: getRenderData,
    afterRender 	: afterRender
});

});

;require.register("views/products_shoes_view", function(exports, require, module) {
var View     = require('./view'),
	template = require('./templates/products_shoes'),
	data 	 = require('./data/products_shoes');

var afterRender = function() {
	Application.updateBreadcrumb('products-shoes');
};

var getRenderData = function() {
	return data;
};

module.exports = View.extend({
    className 		: 'container products-shoes-view',
    template 		: template,
    getRenderData 	: getRenderData,
    afterRender 	: afterRender
});

});

;require.register("views/products_view", function(exports, require, module) {
var View     = require('./view'),
	template = require('./templates/products');

var afterRender = function() {
	console.log("RENDERED PRODUCTS VIEW");
	Application.updateBreadcrumb('products');
};

module.exports = View.extend({
    className: 'container products-view',
    template: template,

    afterRender: afterRender
});

});

;require.register("views/promotions_view", function(exports, require, module) {
var View     = require('./view'),
	template = require('./templates/promotions'),
	data 	 = require('./data/promotions');

var afterRender = function() {
	console.log("RENDERED PROMOTIONS VIEW");
	Application.updateBreadcrumb('promotions');
};

var getRenderData = function() {
	return data;
};

module.exports = View.extend({
    className 		: 'container promotions-view',
    template 		: template,
    getRenderData 	: getRenderData,
    afterRender 	: afterRender
});

});

;require.register("views/services_view", function(exports, require, module) {
var View     = require('./view'),
	template = require('./templates/services'),
	data 	 = require('./data/services');

var afterRender = function() {
	Application.updateBreadcrumb('services');
};

var getRenderData = function() {
	return data;
};

module.exports = View.extend({
    className 		: 'container services-view',
    template 		: template,
    getRenderData 	: getRenderData,
    afterRender 	: afterRender
});

});

;require.register("views/templates/about", function(exports, require, module) {
var __templateData = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"kennethProfile row\">\n	<div class=\"col-xs-12 col-md-4\">\n		<img class=\"photo bottom center-block img-circle\" src=\"img/about/kenneth.jpg\">\n	</div>\n	<div class=\"col-xs-12 col-md-8\">\n		<div class=\"title text-center\">\n			Kenneth Chua\n		</div>\n		<ul class=\"profileList\">\n			<li>Founder</li>\n			<li>21 years in bowling business</li>\n			<li>IBPSIA Technical Certification since 1999</li>\n			<li>Singapore Special Olympic World Summer Games Bowling Coach (2007)</li>\n			<li>Catholic High School bowling coach</li>\n			<li>Catholic Primary School bowling coach</li>\n		</ul>\n	</div>\n</div>\n\n<hr>\n\n<div class=\"shopDescription\">\n	<div class=\"title text-center bottom\">\n		Founder's story\n	</div>\n	<p>Kenneth Chua, owner of Ken Pro Shop in Kallang Bowl, Singapore, is one of the first 97 bowling pro shop and instructional professionals in the world to have earned Technical Certification from the International Bowling Pro Shop & Instructors Association Inc. (IBPSIA).</p>\n\n	<p>One of some 400 candidates currently enrolled in IBPSIA's Certification Program, Kenneth completed the three-year course in less than one year.</p>\n\n	<p>To fulfill requirements of the Certification Program, Kenneth participated in a four-day, hands-on workshop during the spring of 1999; accumulated the required additional credits at the association's annual conference in Las Vegas, Nev., in July 1999; and completed written study guides and the final, written test based on the workshop and IBPSIA's 150-page \"Technical Manual.\"</p>\n\n	<p>IBPSIA's Technical Certification reflects the holder's expertise in the technology-based elements of pro shop operation - fitting and drilling techniques, product knowledge, work bench activities and customer service.</p>\n\n	<p>Kenneth specializes in retail sales of bowling equiptment, supplies, accessories and apparel; and in providing technical services such as measuring and fitting bowlers' hands to ensure the proper grip, as well as drilling, plugging and resurfacing bowling balls.</p>\n\n	<p>Founded in November 1990, IBPSIA's mission is to provide education, communication and recognition for bowling pro shop and instructional professional, in order to create a foundation for the advancement of the worldwide bowling industry. Currently, IBPSIA's membership comprises some 650 businesses throughout the world.</p>\n\n	<p>More information may be obtained by contacting IBPSIA at http://www.ibpsia.com/</p>\n\n	<p class=\"col-md-offset-3\">\n		<img class=\"photo\" src=\"img/about/certified.jpg\">\n		<img class=\"photo\" src=\"img/about/ibpsia.jpg\">\n	</p>\n</div>";
  });
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/templates/contact", function(exports, require, module) {
var __templateData = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  buffer += "<div class=\"googleMap col-xs-12 col-md-4 col-md-offset-1\">\n	<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7899527906447!2d103.87663900000003!3d1.3009019999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da184ed7a58d11%3A0x42d0ff6024aef2b7!2sKen+Pro+Shop!5e0!3m2!1sen!2s!4v1404980560364\" width=\"100%\" height=\"260px\" frameborder=\"0\" style=\"border:0\"></iframe>\n</div>\n\n";
  stack1 = (helper = helpers.contactDetails || (depth0 && depth0.contactDetails),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.contactDetails), options) : helperMissing.call(depth0, "contactDetails", (depth0 && depth0.contactDetails), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/templates/events", function(exports, require, module) {
var __templateData = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  stack1 = (helper = helpers.eventsList || (depth0 && depth0.eventsList),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.events), options) : helperMissing.call(depth0, "eventsList", (depth0 && depth0.events), options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/templates/gallery", function(exports, require, module) {
var __templateData = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  stack1 = (helper = helpers.galleryList || (depth0 && depth0.galleryList),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.gallery), options) : helperMissing.call(depth0, "galleryList", (depth0 && depth0.gallery), options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/templates/hall_of_fame", function(exports, require, module) {
var __templateData = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  stack1 = (helper = helpers.hallOfFameList || (depth0 && depth0.hallOfFameList),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.hallOfFame), options) : helperMissing.call(depth0, "hallOfFameList", (depth0 && depth0.hallOfFame), options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/templates/home", function(exports, require, module) {
var __templateData = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<div class=\"main-content row\">\n        <div class=\"carousel slide main-carousel\" data-ride=\"carousel\">\n            <!-- Wrapper for slides -->\n            <div class=\"carousel-inner\">\n                <div class=\"item active\">\n                    <img class=\"photo\" src=\"img/carousel/carousel-1.jpg\">\n                </div>\n                <div class=\"item\">\n                    <img class=\"photo\" src=\"img/carousel/carousel-2.jpg\">\n                </div>\n                <div class=\"item\">\n                    <img class=\"photo\" src=\"img/carousel/carousel-3.jpg\">\n                </div>\n                <div class=\"item\">\n                    <img class=\"photo\" src=\"img/carousel/carousel-4.jpg\">\n                </div>\n                <div class=\"item\">\n                    <img class=\"photo\" src=\"img/carousel/carousel-5.jpg\">\n                </div>\n                <div class=\"item\">\n                    <img class=\"photo\" src=\"img/carousel/carousel-6.jpg\">\n                </div>\n            </div>\n\n            <a class=\"left carousel-control\" href=\".main-carousel\" role=\"button\" data-slide=\"prev\">\n                <span class=\"glyphicon glyphicon-chevron-left\"></span>\n            </a>\n            <a class=\"right carousel-control\" href=\".main-carousel\" role=\"button\" data-slide=\"next\">\n                <span class=\"glyphicon glyphicon-chevron-right\"></span>\n            </a>\n        </div>\n</div>\n\n<hr>\n\n<!-- <div class=\"panel-group mainAccordion\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <h4 class=\"panel-title\">\n                <a data-toggle=\"collapse\" data-parent=\".mainAccordion\" href=\".panel-balls\">\n                    Balls\n                    \n                    \n                </a>\n            </h4>\n        </div>\n        <div class=\"panel-collapse collapse panel-balls\">\n            <div class=\"panel-body balls\">\n                <div class=\"ball\">\n                    <img class=\"photo\" src=\"img/balls/eruptionpro.gif\">\n                    <div class=\"description\">Make: Brunswick</div>\n                    <div class=\"description\">Model: Fortera</div>\n                </div>\n                <div class=\"ball\">\n                    <img class=\"photo\" src=\"img/balls/eruptionpro.gif\">\n                    <div class=\"description\">Make: Brunswick</div>\n                    <div class=\"description\">Model: Fortera</div>\n                </div>\n                <div class=\"ball\">\n                    <img class=\"photo\" src=\"img/balls/eruptionpro.gif\">\n                    <div class=\"description\">Make: Brunswick</div>\n                    <div class=\"description\">Model: Fortera</div>\n                </div>\n                <div class=\"ball\">\n                    <img class=\"photo\" src=\"img/balls/eruptionpro.gif\">\n                    <div class=\"description\">Make: Brunswick</div>\n                    <div class=\"description\">Model: Fortera</div>\n                </div>\n                <div class=\"ball\">\n                    <img class=\"photo\" src=\"img/balls/eruptionpro.gif\">\n                    <div class=\"description\">Make: Brunswick</div>\n                    <div class=\"description\">Model: Fortera</div>\n                </div>\n                <div class=\"ball\">\n                    <img class=\"photo\" src=\"img/balls/eruptionpro.gif\">\n                    <div class=\"description\">Make: Brunswick</div>\n                    <div class=\"description\">Model: Fortera</div>\n                </div>\n                <div class=\"ball\">\n                    <img class=\"photo\" src=\"img/balls/eruptionpro.gif\">\n                    <div class=\"description\">Make: Brunswick</div>\n                    <div class=\"description\">Model: Fortera</div>\n                </div>\n                <div class=\"ball\">\n                    <img class=\"photo\" src=\"img/balls/eruptionpro.gif\">\n                    <div class=\"description\">Make: Brunswick</div>\n                    <div class=\"description\">Model: Fortera</div>\n                </div>\n            </div>\n            <div class=\"panel-footer text-right\">\n                <a href=\"\">\n                    View All Balls \n                    <span class=\"glyphicon glyphicon-chevron-right\"></span>\n                </a>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <h4 class=\"panel-title\">\n                <a data-toggle=\"collapse\" data-parent=\".mainAccordion\" href=\".panel-bags\">\n                    Bags\n                </a>\n            </h4>\n        </div>\n        <div class=\"panel-collapse collapse panel-bags\">\n            <div class=\"panel-body bags\">\n            </div>\n        </div>\n    </div>\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <h4 class=\"panel-title\">\n                <a data-toggle=\"collapse\" data-parent=\".mainAccordion\" href=\".panel-shoes\">\n                    Shoes\n                </a>\n            </h4>\n        </div>\n        <div class=\"panel-collapse collapse panel-shoes\">\n            <div class=\"panel-body shoes\">\n            </div>\n        </div>\n    </div>\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <h4 class=\"panel-title\">\n                <a data-toggle=\"collapse\" data-parent=\".mainAccordion\" href=\".panel-accessories\">\n                    Accessories\n                </a>\n            </h4>\n        </div>\n        <div class=\"panel-collapse collapse panel-accessories\">\n            <div class=\"panel-body accessories\">\n            </div>\n        </div>\n    </div>\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <h4 class=\"panel-title\">\n                <a data-toggle=\"collapse\" data-parent=\".mainAccordion\" href=\".panel-services\">\n                    Services\n                </a>\n            </h4>\n        </div>\n        <div class=\"panel-collapse collapse panel-services\">\n            <div class=\"panel-body services\">\n            </div>\n        </div>\n    </div>\n</div>-->";
  return buffer;
  });
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/templates/products", function(exports, require, module) {
var __templateData = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"col-xs-12 col-md-3\">\n	<div class=\"panel panel-products\">\n		<a href=\"#products/balls\">\n			<div class=\"panel-body\">\n				<img class=\"center-block photo\" width=\"223\" height=\"223\" title=\"View Bowling Balls\" alt=\"View Bowling Balls\" src=\"data:image/jpeg;base64,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\" />\n			</div>\n			<div class=\"panel-footer\">\n				<div class=\"title text-center\">\n					Balls\n				</div>\n			</div>\n		</a>\n	</div>\n</div>\n\n<div class=\"col-xs-12 col-md-3\">\n	<div class=\"panel panel-products\">\n		<a href=\"#products/bags\">\n			<div class=\"panel-body\">\n				<img class=\"center-block photo\" width=\"223\" height=\"223\" title=\"View Bowling Bags\" alt=\"View Bowling Bags\" src=\"data:image/jpeg;base64,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\" />\n			</div>\n			<div class=\"panel-footer\">\n				<div class=\"title text-center\">\n					Bags\n				</div>\n			</div>\n		</a>\n	</div>\n</div>\n\n<div class=\"col-xs-12 col-md-3\">\n	<div class=\"panel panel-products\">\n		<a href=\"#products/shoes\">\n			<div class=\"panel-body\">\n				<img class=\"center-block photo\" width=\"223\" height=\"223\" title=\"View Shoes\" alt=\"View Shoes\" src=\"data:image/jpeg;base64,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\" />\n			</div>\n			<div class=\"panel-footer\">\n				<div class=\"title text-center\">\n					Shoes\n				</div>\n			</div>\n		</a>\n	</div>\n</div>\n\n<div class=\"col-xs-12 col-md-3\">\n	<div class=\"panel panel-products\">\n		<a href=\"#products/accessories\">\n			<div class=\"panel-body\">\n				<img class=\"center-block photo\" width=\"223\" height=\"223\" title=\"View Accessories\" alt=\"View Accessories\" src=\"data:image/jpeg;base64,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\" />\n			</div>\n			<div class=\"panel-footer\">\n				<div class=\"title text-center\">\n					Accessories\n				</div>\n			</div>\n		</a>\n	</div>\n</div>";
  });
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/templates/products_accessories", function(exports, require, module) {
var __templateData = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  stack1 = (helper = helpers.productsList || (depth0 && depth0.productsList),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.accessories), options) : helperMissing.call(depth0, "productsList", (depth0 && depth0.accessories), options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/templates/products_bags", function(exports, require, module) {
var __templateData = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  stack1 = (helper = helpers.productsList || (depth0 && depth0.productsList),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.bags), options) : helperMissing.call(depth0, "productsList", (depth0 && depth0.bags), options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/templates/products_balls", function(exports, require, module) {
var __templateData = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  stack1 = (helper = helpers.productsList || (depth0 && depth0.productsList),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.balls), options) : helperMissing.call(depth0, "productsList", (depth0 && depth0.balls), options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/templates/products_shoes", function(exports, require, module) {
var __templateData = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  stack1 = (helper = helpers.productsList || (depth0 && depth0.productsList),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.shoes), options) : helperMissing.call(depth0, "productsList", (depth0 && depth0.shoes), options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/templates/promotions", function(exports, require, module) {
var __templateData = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  stack1 = (helper = helpers.promotionsList || (depth0 && depth0.promotionsList),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.promotions), options) : helperMissing.call(depth0, "promotionsList", (depth0 && depth0.promotions), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/templates/services", function(exports, require, module) {
var __templateData = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  stack1 = (helper = helpers.servicesList || (depth0 && depth0.servicesList),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.services), options) : helperMissing.call(depth0, "servicesList", (depth0 && depth0.services), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div class=\"col-xs-12 col-md-12\">\n	<div class=\"panel panel-custom\">\n	 	<div class=\"panel-heading\">\n	  		<div class=\"title text-center\">\n				Other Services\n			</div>\n	 	</div>\n	 	<div class=\"panel-content\">\n	 		<div class=\"panel-group otherServices\">\n	 			<div class=\"panel\">\n			    	<div class=\"panel-heading\">\n			    		<div class=\"sub-title text-center\">\n			        		<a data-toggle=\"collapse\" data-parent=\".otherServices\" href=\".collapseReplug\">\n			        			Replug\n			        		</a>\n			    		</div>\n			    	</div>\n			    	<div class=\"collapseReplug panel-collapse collapse\">\n			      		<div class=\"panel-body\">\n			        		Ball grip feeling stretched? Having blisters on your thumb or fingers? Thumb or finger pitch (angle) may not be the correct fit for your hand. Bring your bowling ball down for a no obligation inspection by the professional.\n			      		</div>\n			    	</div>\n			    </div>\n\n				<div class=\"panel\">\n			    	<div class=\"panel-heading\">\n				      	<div class=\"sub-title text-center\">\n				        	<a data-toggle=\"collapse\" data-parent=\".otherServices\" href=\".collapseInserts\">\n				          		Thumb/Rubber inserts changing\n				        	</a>\n				    	</div>\n				    </div>\n				    <div class=\"collapseInserts panel-collapse collapse\">\n				    	<div class=\"panel-body\">\n				        	Just like car tyres, rubber inserts do wear out as well. Get your grip back and produce the same ball revolution consistently.\n				    	</div>\n				    </div>\n				</div>\n\n				<div class=\"panel\">\n					<div class=\"panel-heading\">\n				    	<div class=\"sub-title text-center\">\n				        	<a data-toggle=\"collapse\" data-parent=\".otherServices\" href=\".collapseDrilling\">\n				          		Drilling\n				    		</a>\n				    	</div>\n				    </div>\n				    <div class=\"collapseDrilling panel-collapse collapse\">\n				    	<div class=\"panel-body\">\n				        	Bought a bowling ball somewhere else? Get Kenneth to advise you on the most suitable drilling pattern and drill the bowling ball professionally. After all, he is Singapore's ONLY IBPSIA certified bowling ball driller.\n				    	</div>\n				    </div>\n				</div>\n\n				<div class=\"panel\">\n					<div class=\"panel-heading\">\n				    	<div class=\"sub-title text-center\">\n				        	<a data-toggle=\"collapse\" data-parent=\".otherServices\" href=\".collapseCoaching\">\n				          		Coaching\n				        	</a>\n				      	</div>\n				    </div>\n				    <div class=\"collapseCoaching panel-collapse collapse\">\n				    	<div class=\"panel-body\">\n				        	Learn to bowl correctly from the professionals! We have classes for Beginners, intermediate and advanced bowlers for all ages, companies and school. Our team of dedicated coaches are qualified bowling coaches certified by Singapore Bowling Federation (SBF) and United States Bowling Congress (USBC). For enquiries, please call 9615 6988.\n				    	</div>\n				    </div>\n				</div>\n			</div>\n	 	</div>\n	</div>\n</div>";
  return buffer;
  });
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/view", function(exports, require, module) {
require('lib/view_helper')

// Base class for all views
module.exports = Backbone.View.extend({
    
    initialize: function(){
        this.render = _.bind(this.render, this);
    },
    
    template: function(){},
    getRenderData: function(){},
    
    render: function(){
        this.$el.html(this.template(this.getRenderData()));
        this.afterRender();
        return this;
    },
    
    afterRender: function(){}
    
})

});

;
//# sourceMappingURL=app.js.map