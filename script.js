function preparePage() {
	document.getElementById("brochures").onclick = function() {
		if (document.getElementById("brochures").checked) {
			
			document.getElementById("frmContact").style.display = "block";
		} else {
			
			document.getElementById("frmContact").style.display = "none";
		}
	};
	
	document.getElementById("frmContact").style.display = "none";
}
function funch() {
	document.getElementById("frmContact").onsubmit = function() {
		
		if (document.getElementById("email").value == "" || document.getElementById("name").value == "") {
			document.getElementById("frmContact").innerHTML = "Enter all information";
			document.getElementById("brochures").checked = false;
			return false;
		} else {
			
			document.getElementById("errorMessage").innerHTML = "";
			return true;
		}
	};
}

window.onload =  function() {
	preparePage();
};