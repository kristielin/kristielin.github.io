let carouselWidth = 500;

/* Part 1.1: Get the elements */
let prevButton = document.getElementById("button-previous-1");
let nextButton = document.getElementById("button-next-1");
let imageRow = document.getElementById("carousel-image-row-1");

/* Part 1.2: Create variable to keep track of which image we're on */
let imageNum = 0;

/* Part 1.3: The showNextImage function should shift the image row to the left */
function showNextImage() {
	// change imageNum
	console.log(imageRow);
	imageNum += 1;
	console.log(imageNum);
	checkControls();
	// how many pixels from the left should imageRow now be?
	let pixelsFromLeft = -carouselWidth * imageNum;
	console.log(pixelsFromLeft);
	// change css for imageRow
	imageRow.style.left = pixelsFromLeft + "px";
	console.log(imageRow.style.left);
}

/* Part 1.4: Change the onclick property for the next button */
nextButton.onclick = showNextImage;

/* Part 1.5: The showPrevImage function should shift the image row to the right */
function showPrevImage() {
	// change imageNum
	imageNum -= 1;
	checkControls();
	// how many pixels from the left should imageRow now be?
	let pixelsFromLeft = -carouselWidth * imageNum;
	// change css for imageRow
	imageRow.style.left = pixelsFromLeft + "px";
}

/* Part 1.6: Change the onclick property for the prev button */
prevButton.onclick = showPrevImage;

/* Total number of images */
let totalImages = document.getElementsByClassName("carousel-image-1").length;

/* Part 1.7 */
function checkControls() {
	// This if-statement checks if we're at the first image.
	// In the parentheses below, check what imageNum is equal to.
	if (imageNum==0) {
		// What should happen if it's the first image?
		prevButton.classList.add("hidden");
	}
	else if (prevButton.classList.contains("hidden")) {
		// otherwise, what should happen?
		prevButton.classList.remove("hidden");
	}
	// This if-statement checks if we're at the last image.
	// In the parentheses below, check what imageNum is equal to.
	if (imageNum==2) {
		// What should happen it's the last image?
		nextButton.classList.add("hidden");
	}
	else if (nextButton.classList.contains("hidden")) {
		// otherwise, what should happen?
		nextButton.classList.remove("hidden");

	}
} 

