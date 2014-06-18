'use strict';

Parse.initialize('Y0CLQUqpAgyNIY0aA2qx1nW6GWyqM1cUcdKGo2BR', 'RZCmPbmSapjeCMfWQNUqmiTfInXos8vxS8xkUBPa');

var Post = Parse.Object.extend ({
	className: 'Post'
});

var PostCollection = Parse.Collection.extend({
    model: Post
});

var collection = new PostCollection();
// collection.fetch({
//     success: function(collection) {
//     	console.log(collection)
//         collection.each(function(object) {
//         });
//     },
//     error: function(collection, error) {
//     }
// });

var viewInstance;

collection.fetch().done(function () {
	collection.each(function(photo){
	    viewInstance = new PostView({model: photo});
		
	});
});


//action that happens when the submit button is clicked
$('.addButton').click(function() {
    //takse the input value of the comment field and assigns it to the var message
    var comment = $('#imageComment').val();
    //takes the value of the comment field and clears it
    $('#imageComment').val('');
    var url = $('#imageURL').val();
    $('#imageURL').val('');

    //creates a new instance of the constructor POST passing the three assigned variables
    var outgoingPost = new Post();

    outgoingPost.set({
        'URL'     :   url,
        'Comment' :   comment

    });

    outgoingPost.save().done(function () {
        console.log('It Worked!')
        console.log('url is', url)
        console.log('comment is', comment);
      });

});