'use strict';

var PostView = Parse.View.extend({
 
    className: 'post',

    collection: 'collection',

 
    postTemplate: _.template($('.post-template').text()),

    events: {
        'click .dotButton'              : 'filterContainer',
        'click .likeButton'             : 'likeButton',
        'click .likeButtonClicked'      : 'unclickLikeButton',
        'click .grayscaleButton'        : 'grayscaleButton',
        'click .saveButton'             : 'updateModel',
    },
 
 
    initialize: function(){
        $('.postContainer').prepend(this.el);
        this.render();

        // collection.on('add', this.render);
        this.model.on('change', this.render.bind(this));
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
        $('this.likeButton').css('display','none');
        $('this.likeButtonClicked').css('display','inline-block');
            
    },

    unclickLikeButton: function(){

    // $('.likeButtonClicked').hide();
    // $('.likeButton').show();
        $('this.likeButtonClicked').css('display','none');
        $('this.likeButton').css('display','inline-block');
            
    },

    grayscaleButton: function(){
        $('.postImage').replaceWith('<canvas id="canvas" height:"500px" width:"500px"></canvas>')
        // $('.postImage').css('display','none');
        // $('#canvas').css('display','block').css('height','500px');
        var currentImg = this.model.attributes.URL;

        fabric.Image.fromURL(currentImg, function(img) {
    // add filter
            img.filters.push(new fabric.Image.filters.Grayscale());
    // apply filters and re-render canvas when done
            img.applyFilters(canvas.renderAll.bind(canvas));
    // add image onto canvas
            canvas.add(img);
            this.model.save();

        });
            
    },

    updateModel: function(){

        collection.add(this.model);

        this.model.save();
    },
 
});