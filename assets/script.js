
function press(element) {
    element.style.boxShadow = 'none';
    element.classList.add('clicked');
    
    setTimeout(function() {
        element.style.boxShadow ='3px 5px 3px orange';
        element.classList.remove('clicked');
    }, 100);

}

var divElements = document.querySelectorAll('.action-box');

// Add event listener to each div element
divElements.forEach(function(element) {
    element.addEventListener('click', function() {
      press(this);
    });
  });

document.getElementById('start-button').addEventListener('click', function() {
    displayRandomImages();
})

// Array of image paths
var imageArray = [
    'assets/images/light-blue-circle.webp',
    'assets/images/red-wavy-line.webp',
    'assets/images/green-square.webp',
    // Add more image paths as needed
];

function displayRandomImages() {

    // Remove existing images from the boxes
    removeImagesFromBoxes();

    // Display random images in the boxes
    displayRandomImageInBox('shape-box');
    displayRandomImageInBox('notes-box');
}

function removeImagesFromBoxes() {
    
    document.getElementById('shape-box').innerHTML = '';
    document.getElementById('notes-box').innerHTML = '';
}

function displayRandomImageInBox(boxId) {
    // Get a random image path from the array
    var randomImagePath = imageArray[Math.floor(Math.random() * imageArray.length)];

    // Create an image element
    var img = document.createElement('img');
    img.src = randomImagePath;
    img.alt = 'Random Image';

    // Append the image to the specified box
    document.getElementById(boxId).appendChild(img);
}