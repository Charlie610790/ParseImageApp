'use strict';

var PostView = Parse.View.extend({
 
    className: 'post',

    collection: 'collection',

 
    postTemplate: _.template($('.post-template').text()),

    events: {
        'click .dotButton'              : 'filterContainer',
        'click .likeButton'             : 'likeButton',
        'click .likeButtonClicked'      : 'unclickLikeButton',
    },
 
 
    initialize: function(){
        $('.postContainer').prepend(this.el);
        this.render();

        collection.on('add', this.render);
        collection.on('change', this.render);
    },
 
    render: function(){
        if (this.model.attributes.hasOwnProperty('URL')) {
            var renderedTemplate = this.postTemplate(this.model.attributes);
            this.$el.html(renderedTemplate);
        }
        
    },

    filterContainer: function(){

    $('.filtersContainer').toggle();

            
    },

    likeButton: function(){

    // $('.likeButton').hide();
    // $('.likeButtonClicked').show();
    $('.likeButton').css('display','none'); 
    $('.likeButtonClicked').css('display','inline-block');
            
    },

    unclickLikeButton: function(){

    // $('.likeButtonClicked').hide();
    // $('.likeButton').show();
    $('.likeButtonClicked').css('display','none'); 
    $('.likeButton').css('display','inline-block');
            
    },
 
});