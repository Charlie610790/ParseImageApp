'use strict';

Parse.initialize('Y0CLQUqpAgyNIY0aA2qx1nW6GWyqM1cUcdKGo2BR', 'RZCmPbmSapjeCMfWQNUqmiTfInXos8vxS8xkUBPa');

var Post = Parse.Object.extend ({
	className: 'Post'
});

var PostCollection = Parse.Collection.extend({
    model: Post
});

var collection = new PostCollection();

var viewInstance;

//////////////

collection.on('add', function (post){
    new PostView({model:post});
});

//////////////

collection.fetch({add: true}).done(function(){
});

// collection.fetch().done(function () {
// 	collection.each(function(photo){
// 	    viewInstance = new PostView({model: photo});
		
// 	});
// });

//action that happens when the add button is clicked
$('.addButton').click(function() {
    //takse the input value of the comment field and assigns it to the var comment
    var comment = $('#imageComment').val();
    //takse the input value of the url field and assigns it to the var url
    var url = $('#imageURL').val();
    //creates a new instance of the constructor POST passing the two assigned variables
    var outgoingPost = new Post();
    //sets the two assigned variables
    outgoingPost.set({
        'URL'     :   url,
        'Comment' :   comment
    });

    outgoingPost.save().done(function () {
        console.log('It Worked!');
        console.log('url is', url);
        console.log('comment is', comment);
        //takes the value of the comment and image fields and clears it
        $('#imageComment').val('');
        $('#imageURL').val('');
    });

});