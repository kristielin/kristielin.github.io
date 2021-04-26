let carouselWidth_3 = 500;

/* Part 1.1: Get the elements */
let prevButton_3 = document.getElementById("button-previous-3");
let nextButton_3 = document.getElementById("button-next-3");
let imageRow_3 = document.getElementById("carousel-image-row-3");

/* Part 1.2: Create variable to keep track of which image we're on */
let imageNum_3 = 0;

/* Part 1.3: The showNextImage function should shift the image row to the left */
function showNextImage_3() {
	// change imageNum
	imageNum_3 += 1;
	checkControls_3();
	// how many pixels from the left should imageRow now be?
	let pixelsFromLeft_3 = -carouselWidth_3 * imageNum_3;
	// change css for imageRow
	imageRow_3.style.left = pixelsFromLeft_3 + "px";
}

/* Part 1.4: Change the onclick property for the next button */
nextButton_3.onclick = showNextImage_3;

/* Part 1.5: The showPrevImage function should shift the image row to the right */
function showPrevImage_3() {
	// change imageNum
	imageNum_3 -= 1;
	checkControls_3();
	// how many pixels from the left should imageRow now be?
	let pixelsFromLeft_3 = -carouselWidth_3 * imageNum_3;
	// change css for imageRow
	imageRow_3.style.left = pixelsFromLeft_3 + "px";
}

/* Part 1.6: Change the onclick property for the prev button */
prevButton_3.onclick = showPrevImage_3;

/* Total number of images */
let totalImages_3 = document.getElementsByClassName("carousel-image-3").length;

/* Part 1.7 */
function checkControls_3() {
	// This if-statement checks if we're at the first image.
	// In the parentheses below, check what imageNum is equal to.
	if (imageNum_3==0) {
		// What should happen if it's the first image?
		prevButton_3.classList.add("hidden");
	}
	else if (prevButton_3.classList.contains("hidden")) {
		// otherwise, what should happen?
		prevButton_3.classList.remove("hidden");
	}
	// This if-statement checks if we're at the last image.
	// In the parentheses below, check what imageNum is equal to.
	if (imageNum_3==2) {
		// What should happen it's the last image?
		nextButton_3.classList.add("hidden");
	}
	else if (nextButton_3.classList.contains("hidden")) {
		// otherwise, what should happen?
		nextButton_3.classList.remove("hidden");

	}
} 

