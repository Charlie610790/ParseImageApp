'use strict';

var PostView = Parse.View.extend({
 
    className: 'post',

    collection: 'collection',

 
    postTemplate: _.template($('.post-template').text()),
 
 
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
 
});