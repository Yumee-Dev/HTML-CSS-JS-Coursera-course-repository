{
	document.addEventListener("DOMContentLoaded", function (event) {
		document.querySelector("h1").addEventListener("click", function() {
			$ajaxUtils.sendGetRequest("data/json text.json", h1clickhandler);
		});
	});

	function h1clickhandler(request) {
		document.querySelector("h1").textContent = "First name is " + (JSON.parse(request.responseText)).first-name +
		". Last name is " + (JSON.parse(request.responseText)).last-name;
	}
}