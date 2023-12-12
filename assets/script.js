var count = 0;

// animate the action boxes
function press(element) {
    element.style.boxShadow = 'none';
    element.classList.add('clicked');
    
    setTimeout(function() {
        element.style.boxShadow ='3px 5px 3px orange';
        element.classList.remove('clicked');
    }, 100);

}

var divElements = document.querySelectorAll('.action-box');

// Add event listener to each div element to animate all buttons
divElements.forEach(function(element) {
    element.addEventListener('click', function() {
      press(this);
    });
  });

//call displayRandomElement and update score when start button is clicked or set button to 'True'
document.getElementById('start-button').addEventListener('click', function() {
    displayRandomElements();
    updateScore();
})

// call playAudio function when listen button is clicked
document.getElementById('listen-button').addEventListener('click', function() {
    playAudio();
})

// call resetGame when reset button is pressed or change reset to False button
document.getElementById('reset-button').addEventListener('click', function() {
    resetGame();
})

// Set up the rhythm match game when clicked. Removes elements and changes buttons
document.getElementById('start-game').addEventListener('click', function() {
    removeElementsFromBoxes();
    setUpGame();
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

        // Enable the listen button and assign the audio source
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
        document.getElementById(boxId).innerHTML = '<img src="' + imageSrc + '" alt="Random Image of shape and music notes">';
    }

    function displayTextInBox(boxId, text) {
        // Create a text element
        var textElement = document.createElement('div');
        textElement.textContent = text;

        // Append the text to the specified box
        document.getElementById(boxId).innerHTML = '<div>' + text + '</div>';
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
        var listenButton = document.getElementById('listen-button');
        listenButton.disabled = false;
        listenButton.dataset.audioSrc = audioSrc;
    }

    function playAudio() {

        var startText = document.getElementById('start-overlay-text').textContent;

        if (startText === 'Next Card') {

        // Pull the audio source
        var audioSrc = document.getElementById('listen-button').dataset.audioSrc;

        // Play the audio
        var audio = new Audio(audioSrc);
        audio.play();
        }
    }

    function resetGame() {
        // returns the game to its opening state
        // remove existing elements from the boxes
        removeElementsFromBoxes();

        // reset the selection
        currentSelection = null;

        // reset count and relevant HTML
        count = 0;
        document.getElementById('scoreCount').innerHTML = '0';

        changeButtonText('Start');

    }

    var count = 0;

    function updateScore() {
        var startText = document.getElementById('start-overlay-text').textContent;

        let disp = document.getElementById('scoreCount');

        if (startText === 'Next Card') {
            if (count === 0) {
            } 
        }
        disp.innerHTML = count++;
    }

// Rhythm Match Game scripts
function setUpGame() {
    // change Card Count to Score and reset
    document.getElementById('scoreBoxText').textContent = 'Score: ';
    document.getElementById('scoreCount').textContent = '0';

    // hide start and reset buttons and show true and false buttons
    document.getElementById('start-button').style.display = 'none';
    document.getElementById('reset-button').style.display = 'none';

    document.getElementById('true-button').style.display = 'block';
    document.getElementById('false-button').style.display = 'block';

    // remove listen-button and add play-button
    document.getElementById('listen-button').style.display = 'none';
    document.getElementById('play-button').style.display = 'block';

    document.getElementById('action-box-container').style.justifyContent = 'center';

    // display title in middle box
    document.getElementById('title-box').innerHTML = 'Does the image match the rhythm? <br> True or False?';
    document.getElementById('title-box').style.fontSize = '200%';

    // hide h2
    document.getElementById('headingTwo').style.display = 'none';

    // Start game button becomes return to landing page game/tutorial
    document.getElementById('start-game').textContent = 'Back to practice';
       
}




const trueButton = document.getElementById('true-button');
const falseButton = document.getElementById('false-button');
const playButton = document.getElementById('play-button');

console.log(trueButton.dataset);
console.log(falseButton.dataset);

// // Click play to start the Rhythm Match game
// playButton.addEventListener('click', function() {
//     trueFalse();
// })

playButton.addEventListener('click', playButtonClickHandler);

trueButton.addEventListener('click', function() {
    buttonClick(this);
});
falseButton.addEventListener('click', function() {
    buttonClick(this);
});

// checks button press and matchImages are true
function buttonClick(button) {
    
    if (button.dataset.value === "true" && matchImages === true) {
        button.style.backgroundColor = '#65F098';
        incrementScore();
    } else if (button.dataset.value === "false" && matchImages === false) {
        button.style.backgroundColor = '#65F098';
        incrementScore();
    } else { 
        button.style.backgroundColor = '#F04D37';
    }
}

// Increases the score by 1
function incrementScore() {
    var scoreElement = document.getElementById('scoreCount');
    var score = parseInt(scoreElement.textContent, 10);
    score++;
    scoreElement.textContent = score;
    console.log('add one to score');
}

function playButtonClickHandler() {
    trueFalse();
}

// start the rhythm match game
function trueFalse() {
    // when user clicks play
    // add random img to shape box and note box
    var randomElement = getTwoRandomImages();
    currentSelection = randomElement;

    displayImageInBox('shape-box', randomElement.element1.imageSrc); 
    displayImageInBox('notes-box', randomElement.element2.imageTwoSrc);

    // change play button text to next card
    changePlayButtonText('Next Card');

    console.log("Index for element 1:", randomElement.index1);
    console.log("Index for element 2:", randomElement.index2);

    // Check if both images come from the same object - true or false
    matchImages = randomElement.index1 === randomElement.index2;
    
    console.log(matchImages);

    // reset background color
    var buttons = document.getElementsByClassName('trueFalseButton');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = 'aliceblue';
    }

    playButton.removeEventListener('click', playButtonClickHandler);

}

function getTwoRandomImages() {
    // Get a random element for the first image
    let index1 = Math.floor(Math.random() * allElements.length);
    let element1 = allElements[index1];

    // Adjust the probability of getting the same object for the second image to increase true result
    let randomChance = Math.random();
    let threshold = 0.6;

    let index2;

    if (randomChance < threshold) {
        // Choose the same object (true)
        index2 = index1;
    } else {
        // Choose a different object (false)
        do {
            index2 = Math.floor(Math.random() * allElements.length);
        } while (index2 === index1);
    }

    let element2 = allElements[index2];

    // Return the randomly selected elements
    return {
        element1: element1,
        element2: element2,
        index1: index1,
        index2: index2
    };

}


function changePlayButtonText(newText) {
    // Change the button text
    document.getElementById('play-overlay-text').textContent = newText;
}


// Modal script
    // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}