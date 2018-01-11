window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));



$('document').ready(function(){

	$("button").click(function(){
	    $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random", function(result){
	        $.each(result, function(i, item){
	            $("#message").html ('<p> "' +result.quote + '"</p>');
	            $("#author").html(result.author);
	        });
	    });
	});
});