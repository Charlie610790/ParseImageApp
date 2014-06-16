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

// collection.on('add', function(post){
//     new viewInstance({model: post});
// });

collection.fetch().done(function () {
    viewInstance = new PostView({model: collection.first()});
});




// var photos = new PhotoCollection();
// var detailViewInstance;

// photos.on('add', function(player){
//     new ThumbnailView({model: player});
// })

// photos.fetch().done(function () {
//     detailViewInstance = new DetailView({model: photos.first()})
// })