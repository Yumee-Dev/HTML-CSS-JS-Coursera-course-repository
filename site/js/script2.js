{
	var ajaxUtils = {};

	ajaxUtils.sendGetRequest = function (url, handler) {
		var request = new XMLHttpRequest();
		request.onreadystatechange = function () {
			if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
				handler(request);
			}
		};
		request.open("GET", url, true);
		request.send();
	};

	window.$ajaxUtils = ajaxUtils;
}