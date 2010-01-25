(function() {
	var gh = /github\.com\/(.+)\/(.+)/;
	if (gh.test(window.location.href)) {
		var path = window.location.pathname.split("/");
		var repo = path[1]+'/'+path[2];
		window.open("http://rdoc.info/projects/"+repo);
	} else {
		alert("This is not a GitHub repository!");
	}
})();