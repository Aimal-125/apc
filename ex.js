let x = document.getElementById("sdiv1");
let y = document.getElementById("sdiv2");
y.addEventListener("click", function() {
	if(x.style.visibility === "visible" && y.style.background) {
		x.style.visibility = "hidden";
		y.style.background = "hsl(210, 46%, 95%)";
	} else {
		x.style.visibility = "visible";
		y.style.background = "hsl(217, 19%, 35%)"
	}
})