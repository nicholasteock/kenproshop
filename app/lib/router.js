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
