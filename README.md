# rss-feeds
Given a list of URLs, output a list of RSS feed URLs.

A sample web app that has two text areas. The top box takes an input of urls, delimited by new lines.
By clicking on the submit button, the app runs javascript to take the domains of the list of urls, dedupes the list, and uses a 
deprecated function from the Google Feed API in order to output the RSS feed URLs pertaining to the domains, if it it exists.
