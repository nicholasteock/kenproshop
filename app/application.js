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
