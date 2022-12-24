// make json files
// make data-keys

document.addEventListener("keyup", function (e) {
	// console.log(e);
	let audio = document.querySelector(`audio[data-key~= ${e.code}]`);
	if (!audio) return;
	audio.currentTime = 0;
	audio.play();
	// get the container element
	let ctn = document.querySelector(`section[data-key~= ${e.code}]`);
	// console.log(ctn);
	// add class to the element in the list
	ctn.classList.add("playing");
});

// get all teh keys from the document
let keys = document.querySelectorAll(".scale-ctn");
// make function remove transotion that removes when a transition ahs eneded on one of teh keys
function _removeTransition(e) {
	console.log({ e });
	// now we ask the code to not go further if a transition of transform has not happened
	//  to skip the function from looping through  all the scale containers
	if (e.propertyName !== "transform") return;
	// propertyName: "transform"
	// this is added here insted of 'e' because what is being printed right now is the transition applied on the element
	// and not the element itself as what we need is to remove the class ' playing' from the element itself
	this.classList.remove("playing");
}

// ask documnet to listen for a transition  and run ficntion remove transition
keys.forEach((key) => key.addEventListener("transitionend", _removeTransition));
