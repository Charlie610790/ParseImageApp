'use strict';

Parse.initialize('Y0CLQUqpAgyNIY0aA2qx1nW6GWyqM1cUcdKGo2BR', 'RZCmPbmSapjeCMfWQNUqmiTfInXos8vxS8xkUBPa');

var Post = Parse.Object.extend ({
	className: 'Post'
});

var PostCollection = Parse.Collection.extend({
    model: Post
});

var collection = new PostCollection();
collection.fetch({
    success: function(collection) {
        collection.each(function(object) {
        });
    },
    error: function(collection, error) {
    }
});

var viewInstance;

collection.fetch().done(function () {
    viewInstance = new PostView({model: collection.first()});
})