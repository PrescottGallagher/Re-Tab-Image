setInterval(function(){
	for(var i = 0; i != 3; i++){
		if(document.getElementsByClassName("irc_vpl irc_lth")[i].href != document.getElementsByClassName("irc_mimg irc_hic")[i].getElementsByClassName("irc_mi")[0].src)
		{
			document.getElementsByClassName("irc_vpl irc_lth")[i].href = document.getElementsByClassName("irc_mimg irc_hic")[i].getElementsByClassName("irc_mi")[0].src;
			document.getElementsByClassName("irc_vpl irc_lth")[i].innerHTML = "<span class='Tl8XHc'>View Image</span>"
		}
	}
},33);
