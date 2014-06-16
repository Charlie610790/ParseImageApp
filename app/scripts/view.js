'use strict';

var PostView = Parse.View.extend({
 
    className: 'post',
 
    postTemplate: _.template($('.post-template').text()),
 
 
    initialize: function(){
        $('.postContainer').append(this.el);
        this.render();
    },
 
    render: function(){
        if (this.model.attributes.hasOwnProperty('URL')) {
            var renderedTemplate = this.postTemplate(this.model.attributes);
            this.$el.html(renderedTemplate);
        }
        
    },
 
});