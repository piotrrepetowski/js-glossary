var createIframe = function()
{
	// create iframe
	var iframe = document.createElement('iframe')
	iframe.style.visibility = "hidden"; // prevent displaying the element

	document.body.appendChild(iframe)

	var iWindow = iframe.contentWindow // get a reference to the window object of the iframe

	return iWindow;
};

var createArrayInIframe = function(iFrameWindow)
{
	iFrameWindow.document.write('<script>var arr = [1, 2, 3]</script>') // create an array var in iframe's window
};