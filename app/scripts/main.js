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
		
	})
})


//action that happens when the submit button is clicked
$('.addButton').click(function() {
    //takse the input value of the message field and assigns it to the var message
    var message = $('.input').val();
    //takes the value of the message field and clears it
    $('.input').val('');
    //takes the time and sets it at the var time
    var time = timeRightNow;
    //creates a new instance of the constructor POST passing the three assigned variables
    var outgoingPost = new post(url, comment);

    updateChat(outgoingPost);

});

var Post = Parse.Object.extend("Post");
var post = new Post();
var message = $('.input').val();

post.set("URL", 1337);
post.set("playerName", "Sean Plott");
post.set("cheatMode", false);
 
gameScore.save(null, {
  success: function(gameScore) {
    // Execute any logic that should take place after the object is saved.
    alert('New object created with objectId: ' + gameScore.id);
  },
  error: function(gameScore, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and description.
    alert('Failed to create new object, with error code: ' + error.description);
  }
});