const imageNameDisplay = document.getElementById('image-name');

// Get reference to all images to hover over
const hoverImages = document.querySelectorAll('.hover-image');

// Add event listeners to each image
hoverImages.forEach(image => {
  image.addEventListener('mouseenter', () => {
    // Display the image name below the logo
    imageNameDisplay.textContent = image.getAttribute('data-name');
    imageNameDisplay.style.display = 'block'; // Show the image name
  });

  image.addEventListener('mouseleave', () => {
    // Hide the image name when mouse leaves the image
    imageNameDisplay.style.display = 'none';
  });
});
