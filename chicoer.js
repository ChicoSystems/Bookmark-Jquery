javascript:(
	function(){
		/* Author: Isaac Assegai
+		 * ChicoER only allow you to view an article or two a day.
+		 * If this script is copied into a bookmark. It will search
+		 * for the elements that block your view and tell you to
+ 		 * subscribe, and hide those elements.
+		 */
		$("#gregbox-outer").hide();
		$("#gregbox-signInTab").hide();
		$('#gregbox-closeBtn').css('display', 'none');
		$('body > div:nth-child(20)').css('display', 'none');
	}());
