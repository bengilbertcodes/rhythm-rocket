
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

  //call displayRandomElement
document.getElementById('start-button').addEventListener('click', function() {
    displayRandomElements();
})

// call playAudio function when listenButton is clicked
document.getElementById('listenButton').addEventListener('click', function() {
    playAudio();
})

// call resetGame to when reset button is pressed
document.getElementById('restart-box').addEventListener('click', function() {
    resetGame();
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

var currentSelection = null;

    function displayRandomElements() {
        // Remove existing elements from the boxes
        removeElementsFromBoxes();

        // Display a random element in the boxes, ensuring it's different from the current selection
        var randomElement = getRandomDifferentElement();
        currentSelection = randomElement;

        displayImageInBox('shape-box', randomElement.imageSrc);
        displayTextInBox('title-box', randomElement.Title);
        displayImageInBox('notes-box', randomElement.imageTwoSrc);
        
        // Change the start button text to 'Next Card' after the first click
        changeButtonText('Next Card');

        // Enable the "Listen" button and assign the audio source
        enableListenButton(randomElement.audioSrc);
    }

    function removeElementsFromBoxes() {
        document.getElementById('shape-box').innerHTML = '';
        document.getElementById('title-box').innerHTML = '';
        document.getElementById('notes-box').innerHTML = '';
    }

    function displayImageInBox(boxId, imageSrc) {
        // Create an image element
        var img = document.createElement('img');
        img.src = imageSrc;
        img.alt = 'Random Image';

        // Append the image to the specified box
        document.getElementById(boxId).appendChild(img);
    }

    function displayTextInBox(boxId, text) {
        // Create a text element
        var textElement = document.createElement('div');
        textElement.textContent = text;

        // Append the text to the specified box
        document.getElementById(boxId).appendChild(textElement);
    }

    function getRandomDifferentElement() {
        // Get a random element from the array
        var randomElement = allElements[Math.floor(Math.random() * allElements.length)];

        // If the random element is the same as the current selection, try again
        while (randomElement === currentSelection) {
            randomElement = allElements[Math.floor(Math.random() * allElements.length)];
        }

        return randomElement;
    }

    function changeButtonText(newText) {
        // Change the button text
        document.getElementById('start-overlay-text').textContent = newText;
    }

    function enableListenButton(audioSrc) {
        
        // Enable the Listen button and assign the audio source
        var listenButton = document.getElementById('listenButton');
        listenButton.disabled = false;
        listenButton.dataset.audioSrc = audioSrc; // Store audio source in a data attribute
    }

    function playAudio() {

        var startText = document.getElementById('start-overlay-text').textContent;

        if (startText === 'Next Card') {

        // Get the audio source from the data attribute
        var audioSrc = document.getElementById('listenButton').dataset.audioSrc;

        // Play the audio
        var audio = new Audio(audioSrc);
        audio.play();
        }
    }

    function resetGame() {
        //returns the game to its opening state
        // remove existing elements from the boxes
        removeElementsFromBoxes();

        // reset the selection
        currentSelection = null;

        //change button text back to start
        changeButtonText('Start');

    }