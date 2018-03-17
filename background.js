setInterval(function(){
	for(var i = 0; i != 3; i++){
		if(document.getElementsByClassName("irc_vpl irc_lth")[i].href != document.getElementsByClassName("irc_mimg irc_hic")[1].getElementsByClassName("irc_mi")[0].src)
		{
			document.getElementsByClassName("irc_vpl irc_lth")[i].href = document.getElementsByClassName("irc_mimg irc_hic")[1].getElementsByClassName("irc_mi")[0].src;
			document.getElementsByClassName("irc_vpl irc_lth")[i].innerHTML = "<span class='Tl8XHc'>Open image in new tab</span>"
		}
	}
},33);