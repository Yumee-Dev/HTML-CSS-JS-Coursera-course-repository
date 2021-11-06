{
	document.addEventListener("DOMContentLoaded", function (event) {
		document.querySelector("h1").addEventListener("click", function() {
			$ajaxUtils.sendGetRequest("data/simple text.txt", h1clickhandler);
		});
	});

	function h1clickhandler(request) {
		document.querySelector("h1").textContent = request.responseText;
	}
}