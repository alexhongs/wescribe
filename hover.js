

chrome.browserAction.onClicked.addListner(function() {
	var w = 440;
	var h = 220;
	var left = (screen.width/2) - (w/2);
	var top = (screen.height/2) - (h/2);

	chrome.windows.create({
		'url': 'hello.html', 'type':'popup'
	}) 



})