/******************************************************************/
/*	Navigation												      */
/******************************************************************/

$(document).ready(function() {
$("#dropmenu ul").css({display: "none"}); // Opera Fix
$("#dropmenu li").hover(function(){
		$(this).find('ul:first').animate({height: "show"}, 150, "easeInOutCubic");
		},function(){
		$(this).find('ul:first').animate({height: "hide"}, 250, "easeInBack");
		});
		
});


$(document).ready(function() {
$(".main-nav ul").css({display: "none"}); // Opera Fix
$(".main-nav li").hover(function(){
		$(this).find('ul:first').animate({height: "show"}, 150, "easeInOutCubic");
		},function(){
		$(this).find('ul:first').animate({height: "hide"}, 250, "easeInBack");
		});
		
});



/******************************************************************/
/*	Navigation *END*										      */
/******************************************************************/

/******************************************************************/
/*	Back to top Animation									      */
/******************************************************************/

$(document).ready(function() {
$('.hozbreak-top a').click(function(){
     $('html, body').animate({scrollTop: '0px'}, 300);
     return false;
});
});

/******************************************************************/
/*	Back to top Animation *END*								      */
/******************************************************************/


/******************************************************************/
/*	Drop Panel												      */
/******************************************************************/
$(document).ready(function() {
	
	// Expand Panel
	$("#open").click(function(){
		$("div#panel").animate({height: "show"}, 900, "easeInOutCubic");
	
	});	
	
	$(".contacttrigger").click(function(){
		$("div#panel").animate({height: "show"}, 900, "easeInOutCubic");
		$("#toggle a").toggle();
	
	});	

	$(".droppaneltrigger").click(function(){
		$("div#panel").animate({height: "show"}, 900, "easeInOutCubic");
		$("#toggle a").toggle();
	
	});	
	
	// Collapse Panel
	$("#close").click(function(){
		$("div#panel").animate({height: "hide"}, 600, "easeInBack");	
	});		
	
	// Switch buttons on click
	$("#toggle a").click(function () {
		$("#toggle a").toggle();
	});		

});
/******************************************************************/
/*	Drop Panel *END*										      */
/******************************************************************/



/******************************************************************/
/*	Stage Gallery Navigation								      */
/******************************************************************/
$(document).ready(function() {

	$('#stage-pause').click(function() { 
		$('.stage-slider').cycle('pause'); 
	});
	
	$('#stage-resume').click(function() { 
		$('.stage-slider').cycle('resume'); 
	});
	
	$("#stage-pauseresume").click(function () {
			$("#stage-pauseresume span").toggle();
	});	

});
/******************************************************************/
/*	Stage Gallery Navigation *END*							      */
/******************************************************************/



/******************************************************************/
/*	Social Icons Animate									      */
/******************************************************************/
$(document).ready(function() {
	
	// Show Social Icons
	$(".socialinit").click(function(){
		$("div.socialicons").animate({width: 'show'});
	
	});	
	
	// Hide Social Icons
	$(".socialhide").click(function(){
		$("div.socialicons").animate({width: 'hide'});
	
	});		

	// Switch buttons on click
	$("#togglesocial li").click(function () {
		$("#togglesocial li").toggle();
	});	

});
/******************************************************************/
/*	Social Icons Animate *END*								      */
/******************************************************************/



/******************************************************************/
/*	Group Slider Gallery 									      */
/******************************************************************/
$(document).ready(function() {

	$('.group-slider').cycle({ 
		fx:     'scrollHorz', 
		timeout: 0,
		speed: 750,
		easing: 'easeInOutExpo',
		prev: '#leftnav',
		next: '#rightnav'
	});

});
/******************************************************************/
/*	Group Slider Gallery *END*								      */
/******************************************************************/



/******************************************************************/
/*	Sidebar Mini Gallery									      */
/******************************************************************/

$(document).ready(function() {


	$('.mini-slider').cycle({ 
		fx:     'scrollHorz', 
		timeout: 5000,
		speed: 750,
		easing: 'easeInOutExpo',		
		prev: '#leftnav',
		next: '#rightnav',
		cleartype:  true,
    	cleartypeNoBg:  true
	});


	$('#pause').click(function() { 
		$('.stage-slider').cycle('pause'); 
	});
	
	$('#resume').click(function() { 
		$('.stage-slider').cycle('resume'); 
	});
	
	
	$("#toggle_slide_nav a").click(function () {
			$("#toggle_slide_nav a").toggle();
	});	

});

/******************************************************************/
/*	Sidebar Mini Gallery *END*								      */
/******************************************************************/


/******************************************************************/
/*	Text Resizer		 									      */
/******************************************************************/
$(document).ready(function() {

  // Reset Font Size
  var originalFontSize = $('html').css('font-size');
    $(".resetFont").click(function(){
    $('html').css('font-size', originalFontSize);
  });
  // Increase Font Size
  $(".increaseFont").click(function(){
    var currentFontSize = $('.content-wrapper-inner').css('font-size');
    var currentFontSizeNum = parseFloat(currentFontSize, 10);
    var newFontSize = currentFontSizeNum*1.1;
    $('.content-wrapper-inner').css('font-size', newFontSize);	
    return false;
  });
  // Decrease Font Size
  $(".decreaseFont").click(function(){
    var currentFontSize = $('.content-wrapper-inner').css('font-size');
    var currentFontSizeNum = parseFloat(currentFontSize, 10);
    var newFontSize = currentFontSizeNum*0.9;
    $('.content-wrapper-inner').css('font-size', newFontSize);
    return false;
  });

});
/******************************************************************/
/*	Text Resizer *END*	 									      */
/******************************************************************/



/******************************************************************/
/*	Gallery Image Hover 									      */
/******************************************************************/

$(document).ready(function () {

	
$('.galleryimg,.shortcodeimg,.shortcodevid,.galleryvid').hover(
		
		//Mouseover, fadeIn the hidden hover class	
		function() {
		$(this).children('div').css('display', 'block'); // FIX IE BUG	
		$(this).children('div').fadeTo("slow",0.6);
				
		}, 
	
		//Mouseout, fadeOut the hover class
		function() {
		$(this).children('div').fadeTo("fast",0, function() {
		});
		
		
	});


});
/******************************************************************/
/*	Gallery Image Hover *END*								      */
/******************************************************************/


/******************************************************************/
/*	Contact Form										      	  */
/******************************************************************/

$(document).ready(function() {
	$('form#contactForm').submit(function() {
		$('form#contactForm .error').remove();
		var hasError = false;
		$('.requiredField').each(function() {
			if(jQuery.trim($(this).val()) == '') {
				var labelText = $(this).prev('label').text();
				$(this).parent().append('<span class="error">You forgot to enter your '+labelText+'.</span>');
				hasError = true;
			} else if($(this).hasClass('email')) {
				var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
				if(!emailReg.test(jQuery.trim($(this).val()))) {
					var labelText = $(this).prev('label').text();
					$(this).parent().append('<span class="error">You entered an invalid '+labelText+'.</span>');
					hasError = true;
				}
			}
		});
		if(!hasError) {
			//$('form#contactForm li.buttons button').fadeOut('normal', function() {
				//$(this).parent().append('<img src="/wp-content/themes/td-v3/images/template/loading.gif" alt="Loading&hellip;" height="31" width="31" />');
			//});
			var formInput = $(this).serialize();
			$.post($(this).attr('action'),formInput, function(data){
				$('form#contactForm').slideUp("fast", function() {				   
					$(this).before('<p class="thanks"><strong>Thanks!</strong> Your email was successfully sent. I check my email all the time, so I should be in touch soon.</p>');
				});
			});
		}
		
		return false;
		
	});
});

/******************************************************************/
/*	Contact Form *END*									      	  */
/******************************************************************/




/******************************************************************/
/*	Twitter Feed Cycle									      	  */
/******************************************************************/
/* Combining Tweets with JQuery Cycle ALL - CreativeWorkz.  */

function gettweets( name,tweetsnum ) {

//Your twitter name
var twitter_name = name;

//Number of tweets you want to get back
var twitter_count = tweetsnum;
//Callback function name
var callback_name = "tweet_callback";
//Twitter search url
var twitter_search = "http://twitter.com/statuses/user_timeline";
//Return type (json or xml)
var return_type = "json";
//Adds script tags to the head/body tag

( function() {
var ts = document.createElement('script');
ts.type = 'text/javascript';
ts.async = true;
ts.src = twitter_search + "." + return_type + "?screen_name=" + twitter_name + "&count=" + twitter_count + "&callback=" + callback_name;
( document.getElementsByTagName( 'head' )[ 0 ] || document.getElementsByTagName( 'body' )[ 0 ] ).appendChild( ts );
} )();

}

//Call back function
function tweet_callback( data ) {
//Loop through the data from twitter
$.each( data, function( i, tweet ) {
//Make sure the text isn't undefined
if( tweet.text != undefined ) {
//Lets do some regex magic to replace urls, hashtags, and usernames
var text = tweet.text.toString().replace( /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, '<a href="$1">$1</a>' ).replace( /(^|\s)@(\w+)/, '<a href="http://www.twitter.com/$2">@$2</a>' ).replace( /[#]+[A-Za-z0-9-_]+/ig, function(t) { var tag = t.replace("#","%23"); return t.link("http://search.twitter.com/search?q="+tag); } );
//Lets append each tweet to a ul with the id of tweet_container
$( "#tweet_container" ).append( "<span>" + text + "</span>");
			$('#tweet_container').cycle({ // Cycle through tweets
				fx: 'fade',
				speed: 1000,
				timeout: 10000,
				cleartype:  1 // enable cleartype corrections 
			});
}
});
}
/******************************************************************/
/*	Twitter Feed Cycle *END*							      	  */
/******************************************************************/

/******************************************************************/
/*	Accordion											      	  */
/******************************************************************/
$(document).ready(function() {

	// Accordion
	$(".accordion").accordion({ header: "h3.accordionhead",autoHeight: false });
	
	
});

/******************************************************************/
/*	Accordion *END*										      	  */
/******************************************************************/

/******************************************************************/
/*	Tabs												      	  */
/******************************************************************/
$(document).ready(function() {
	// Tabs
	$(".dyntabs").tabs({ fx: { height:'toggle', duration:'fast' }  });	
});

/******************************************************************/
/*	Tabs *END*											      	  */
/******************************************************************/	

/******************************************************************/
/*	Reveal Contnet 										      	  */
/******************************************************************/

$(document).ready(function() {
	
	$(".reveal-content").hide();
	
	// Toggle classes for reveal
	$("h4.reveal").toggle(function(){
		$(this).addClass("ui-state-active");}, function() {
		$(this).removeClass("ui-state-active ");
	});

	
	// Reveal content
	$("h4.reveal").click(function(){
	$(this).next(".reveal-content").animate({"height": "toggle"}, { duration: 300, easing: "easeInOutCubic" });
	});
	


});

/******************************************************************/
/*	Reveal Content *END*										      	  */
/******************************************************************/