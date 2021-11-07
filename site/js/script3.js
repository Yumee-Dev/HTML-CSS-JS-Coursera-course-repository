{
	$(function (event) {
		document.querySelector("h1").addEventListener("click", function() {
			$ajaxUtils.sendGetRequest("data/json text.json", h1clickhandler);
		});
	});

	$(function (event){
		$("a").click(function (event) {
			$ajaxUtils.sendGetRequest("snippets/single-tile.html", function(singleTileHTMLreq) {
				$ajaxUtils.sendGetRequest("data/tiles-content.json", function(tilesContentreq) {
					var singleTileHTML = singleTileHTMLreq.responseText;
					var tilesContent = JSON.parse(tilesContentreq.responseText);
					var finalHTML = "<section class='row'>";
					for (i = 0; i < tilesContent.length; i++) {
						var tileHTML = singleTileHTML;
						tileHTML = tileHTML.replace(new RegExp("{{LETTER}}", "g"), tilesContent[i].letter);
						tileHTML = tileHTML.replace(new RegExp("{{DESCRIPTION}}", "g"), tilesContent[i].description);
						tileHTML = tileHTML.replace(new RegExp("{{TITLE}}", "g"), tilesContent[i].title);
						finalHTML += tileHTML;
					}
					finalHTML += "</section>";
					document.querySelector("#all-content-div").innerHTML = finalHTML;
				});
			});
		});
	});

	function h1clickhandler(request) {
		document.querySelector("h1").textContent = "First name is " + (JSON.parse(request.responseText))["first-name"] +
		". Last name is " + (JSON.parse(request.responseText))["last-name"];
	}
}