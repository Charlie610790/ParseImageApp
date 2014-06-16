Parse.initialize("Y0CLQUqpAgyNIY0aA2qx1nW6GWyqM1cUcdKGo2BR", "RZCmPbmSapjeCMfWQNUqmiTfInXos8vxS8xkUBPa");

var Post = Parse.Object.extend ({
	className: "Post"
});


var NewPost = new Post;

NewPost.save({
	URL: "http://4.bp.blogspot.com/-7dLk_lNqsto/T9uRv2B3iGI/AAAAAAAAA9c/DieKOn4Cj2w/s1600/mustache-act.jpg",
	Comment: "Civil Stash Dude"
	}).done(function () {
		console.log('it worked');
});
	
postQuery = new Parse.Query(Post);

postQuery.get("pRcklNnb9X", {
  success: function(post) {
  	console.log('post is', post)
  },
  error: function(object, error) {
  }
});