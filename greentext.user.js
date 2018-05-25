// ==UserScript==
// @name     			devRant Greentext
// @namespace 		https://devrant.com
// @include  			https://devrant.com/*
// @version  			1
// @description   Makes lines prefixed with > green. Just like greentext does.
// @run-at   			document-end
// @grant    			none
// @require      	https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function() {
  $('.rantlist-content,.rantlist-title-text,.username-row+.rantlist-title').each(function() {
  	$(this).html(
      $(this)
      	.html()
      	.split("<br>")
      	.map((text) => text.trim())
      	.map((text) => {
    			if (text.startsWith("&gt;")) {
      			return `<span style="color: #78FB78;">${text}</span>`;
      		}
      		return text;
    		})
      	.join("<br>"));
  });
})();
