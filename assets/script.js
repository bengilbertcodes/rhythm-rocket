
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

  // create an array of question objects
const allQuestions = [
    {
      Title: 'Light Blue Circle',
      imageSrc: 'assets/images/light-blue-circle.webp',
      audioSrc: 'assets/media/light-blue-circle.mp3',
    },
    {
      Title: 'Red Wavy Line',
      imageSrc: 'assets/images/red-wavy-line.webp',
      audioSrc: 'assets/media/red-wavy-line.mp3',
    },
    {
      Title: 'Green Square',
      imageSrc: 'assets/images/green-square.webp',
      audioSrc: 'assets/media/green-square.mp3',
    },
  ];
  
  let question = allQuestions[1];
  
  // this would get the question object from the questions array at index 1
  // which would give you
  // {
  //  Title: "Red Circle",
  //  imageSrc: "assets/images/redCircle.webp",
  //  audioSrc: "assets/media/redCircle.mp3",
  // }
  // remember array starts at index 0 !!!
  
  //to get the tile then use
  
  let title = question.Title; // title variable will then contain "Red Circle"