<!-- hide script from old browsers
/**
  working but current problem is Heroku app set to allow all domains
  because of a CORS problem in Javascript to be fixed later
**/
//feedly api access key
//var access_token = "Aysklq4Z2gTfE4QYff2ckm3kyktezswdyaZRLK-gu_WZyVHnv17fvp4Otal319k7jP9x58p1QJ9OOazWD3QRk953IBJ6qnhyW5rXavNh3NKZs6hHdQTvBX95zpxg0OGQ6378ITT5VtkwE__dMy5Zib_HJOUFXYeC16RBLY3VxWDFyTsWFj2DKXCbg8ijoG7mKGTXHeATmy4oc5inBrpy1Xlal2GkoWg:feedlydev";
var heroku_key = "Aysklq4Z2gTfE4QYff2ckm3kyktezswdyaZRLK-gu_WZyVHnv17fvp4Otal319k7jP9x58p1QJ9OOazWD3QRk953IBJ6qnhyW5rXavNh3NKZs6hHdQTvBX95zpxg0OGQ6378ITT5VtkwE__dMy5Zib_HJOUFXYeC16RBLY3VxWDFyTsWFj2DKXCbg8ijoG7mKGTXHeATmy4oc5inBrpy1Xlal2GkoWg";

var url123 = "https://rsstoapitest.herokuapp.com/v1/feed?url=http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml&count=8";
var url1="http://www.nytimes.com";
var RSSfeedString = "";
var index = 0;
/**
*Uses the deprecated Ajax Feed API in order to grab the RSS feed from url
*Returns the Url that contains the RSS Feed
**/
/*function get_rss_fromUrl(url){
  return $.ajax(
    {
      type: 'GET',
      crossDomain : true,
      url: "http://ajax.googleapis.com/ajax/services/feed/lookup?v=1.0&q=" + url,
      dataType: 'jsonp'
    }
  );
}*/

/**
*Callback function that returns data when ajax call is finished
*Adds RSS url to RSSfeedString if it exists
**/
function callback_RSS_url(data){
  if (data != null && data.responseData != null){
    RSSfeedString += data.responseData.url + "\n";
  }


}

/**
* Given array domains, find and return a string that has the Rss feed urls, delimited by new lines
**/
function find_RSS_feeds(domains){

    /*for (var i = 0; i < domains.length; i++){
      get_rss_fromUrl(domains[i]).done(callback_RSS_url);
    }*/
    $.ajax(
      {
        type: 'GET',
        crossDomain : true,
        url: "http://ajax.googleapis.com/ajax/services/feed/lookup?v=1.0&q=" + domains[index],
        dataType: 'jsonp',
        success:function(data){
          callback_RSS_url(data);
          index++;
          if (index < domains.length){ find_RSS_feeds(domains);}
          else $("#outputData").text(RSSfeedString) //when array has been iterated through display the string on browser;
        }
      }
    );

}


// end hiding script from old browsers -->
