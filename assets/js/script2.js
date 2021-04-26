let carouselWidth_2 = 500;

/* Part 1.1: Get the elements */
let prevButton_2 = document.getElementById("button-previous-2");
let nextButton_2 = document.getElementById("button-next-2");
let imageRow_2 = document.getElementById("carousel-image-row-2");

/* Part 1.2: Create variable to keep track of which image we're on */
let imageNum_2 = 0;

/* Part 1.3: The showNextImage function should shift the image row to the left */
function showNextImage_2() {
	// change imageNum
	imageNum_2 += 1;
	checkControls_2();
	// how many pixels from the left should imageRow now be?
	let pixelsFromLeft_2 = -carouselWidth_2 * imageNum_2;
	// change css for imageRow
	imageRow_2.style.left = pixelsFromLeft_2 + "px";
}

/* Part 1.4: Change the onclick property for the next button */
nextButton_2.onclick = showNextImage_2;

/* Part 1.5: The showPrevImage function should shift the image row to the right */
function showPrevImage_2() {
	// change imageNum
	imageNum_2 -= 1;
	checkControls_2();
	// how many pixels from the left should imageRow now be?
	let pixelsFromLeft_2 = -carouselWidth_2 * imageNum_2;
	// change css for imageRow
	imageRow_2.style.left = pixelsFromLeft_2 + "px";
}

/* Part 1.6: Change the onclick property for the prev button */
prevButton_2.onclick = showPrevImage_2;

/* Total number of images */
let totalImages_2 = document.getElementsByClassName("carousel-image-2").length;

/* Part 1.7 */
function checkControls_2() {
	// This if-statement checks if we're at the first image.
	// In the parentheses below, check what imageNum is equal to.
	if (imageNum_2==0) {
		// What should happen if it's the first image?
		prevButton_2.classList.add("hidden");
	}
	else if (prevButton_2.classList.contains("hidden")) {
		// otherwise, what should happen?
		prevButton_2.classList.remove("hidden");
	}
	// This if-statement checks if we're at the last image.
	// In the parentheses below, check what imageNum is equal to.
	if (imageNum_2==2) {
		// What should happen it's the last image?
		nextButton_2.classList.add("hidden");
	}
	else if (nextButton_2.classList.contains("hidden")) {
		// otherwise, what should happen?
		nextButton_2.classList.remove("hidden");

	}
} 

