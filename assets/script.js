
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
    displayRandomElements();
})

// Create multi-dimensional array with the three elements - shape img, notes img, audio + title. 
// call each element to different box when start is clicked

const allElements = [
    {
        Title: 'Light Blue Circle',
        imageSrc: 'assets/images/light-blue-circle.webp',
        imageTwoSrc: 'assets/images/light-blue-circle-notes.webp',
        audioSrc: 'assets/media/light-blue-circle.mp3',
    },
    {
        Title: 'Green Square',
        imageSrc: 'assets/images/green-square.webp',
        imageTwoSrc: 'assets/images/green-square-notes.webp',
        audioSrc: 'assets/media/green-square.mp3',
    },
    {
        Title: 'Red Wavy Line',
        imageSrc: 'assets/images/red-wavy-line.webp',
        imageTwoSrc: 'assets/images/red-wavy-line-notes.webp',
        audioSrc: 'assets/media/red-wavy-line.mp3',
    }
];

function displayRandomElements() {

    // Remove existing elements from the boxes
    removeElementsFromBoxes();

    // Display random element in the boxes
    displayRandomElementInBox('shape-box', 'imageSrc');
    displayRandomElementInBox('title-box', 'Title');
    displayRandomElementInBox('notes-box', 'imageTwoSrc');
}

function removeElementsFromBoxes() {
    
    document.getElementById('shape-box').innerHTML = '';
    document.getElementById('title-box').innerHTML = '';
    document.getElementById('notes-box').innerHTML = '';
}

function displayRandomElementInBox(boxId, property) {
    // Get a random element path from the array
    var randomElement = allElements[Math.floor(Math.random() * allElements.length)];

     // Create an element
    var element = document.createElement('div');
    element.textContent = randomElement[property];

    // Append the image element to the specified box
    document.getElementById(boxId).appendChild(element);
}

