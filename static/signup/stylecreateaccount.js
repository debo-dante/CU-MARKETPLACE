const inputs = document.querySelectorAll(".h5");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(h5 => {
	h5.addEventListener("focus", addcl);
	h5.addEventListener("blur", remcl);
});
