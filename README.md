# Rhythm Rocket

Rhythm Rocket is an interactive game for music students and tutors to use to help develop their understanding of music rhythm and notation in a fun way. <br>
It is based on a game that I have used in my own teaching practice and all my students have enojoyed. <br>
It uses the combination of shapes, sounds and music notes to help build the students understanding of how these elements are linked and can be used in creative ways. And can be used by the student alone or used as a teaching tool by tutors in lessons.

### [Live Site](https://bengilbertcodes.github.io/rhythm-rocket/)

![Mockup](docs/readme_images/mockup.png)

## Contents


## Features

### Sitewide
* Footer 
  * Contains link to the Modal.
  * Allows users access to instructions at any time. 

![Footer](docs/readme_images/footer.png)

* Modal
  * Contains full instructions for the user to assist in use of the game functions

![Modal](docs/readme_images/modal.png)

* Favicon
  * A site wide favicon featuring an image of a rocket taken from the background of the page.
  * This will provide an image in the the tabs header to allow the user to easily identify the website.

![Favicon](docs/readme_images/favicon.png)

* 404 page
  * A cusom 404 page to be implemented and displayed if the user navigates to a broken link.
  * User is able to navigate back to the main site without the use of the browsers back button.

![404](docs/readme_images/404page.png)

## The Game and User Experience UX

### Game 1 - Practice 
* Upon landing, the user is presented with a clear layout and the initial instruction of "Click Draw Card to Start".

![Practice-page](docs/readme_images/practice-page.png)

* When Draw Card is clicked images are displayed in the top and bottom large boxes and text in the middle box. Draw Card then changes to Next Card.

![Next-card](docs/readme_images/next-card.png)
* These three cards are all linked (come from the same object in the allElements array)
* The first image is a coloured shape. The second box contains the name of the shape. The student should say the words and clap the rhythm of the words. The third box contains the music notation for that rhythm.

![start](docs/readme_images/start-practice.png)

* User can click 'Listen' button to hear the rhythm to check against their own responses. 

![listen](docs/readme_images/listen-button.png)

* User can then click 'Next Card' to load another three random cards and repeat the above process.
* A Card Count tracks the number of cards the user has been through.

![card-count](docs/readme_images/card-count.png)

* The game can be reset at any point by clicking 'Reset' button. 
* This clears the card boxes and resets the Card Count.

![reset](docs/readme_images/reset-button.png)

* When ready the user can click 'Play the Rhythm Match Game' to proceed to the next stage of the app.

![next-stage](docs/readme_images/next-game.png)

### Game 2 - Rhythm Match Game (True or False)

* After the button click the layout adjusts slightly, new True and False buttons replace Next Card and Reset and Play replaces Listen. More Practice and Restart Game appear at the base of the screen.

![Rhythm-game](docs/readme_images/rmg1.png)

* User clicks 'Play' to start the game.

![Play](docs/readme_images/play-btn.png)

* The game boxes are populated with a random shape and music notation which may or may not match. 'Play' button changes to 'Next Card' button.

![Rhythm-game2](docs/readme_images/rmg2.png)

* Using knowledge obtained from the first part of the game, the user must work out whether the rhythm notation displayed matches that of the name of the shape. 
* User selects 'True' or 'False'. In this example, the answer is True. If User clicks 'True,'True' button turns green and score is updated to +1.

![Rhythm-game-true](docs/readme_images/rmg-true.png)

* If the user clicks a wrong answer (False in this case) then the button turns red and the score is not updated.

![Rhythm-game-false](docs/readme_images/rmg-false.png)

* User can repeat this as many times as they want to.

* Game can be restarted by clicking 'Restart Game' button.
* User can return to the first pratice game by clicking 'More Practice' button.

![restart-practice](docs/readme_images/rmg3.png)

### Modal
* At any time, the user can click the 'How to Play' link in the footer to open the modal and this contains clear instructions for both game modes.

## Design

### Wireframes

#### Game 1 Desktop
![Game 1 Desktop Wireframe](docs/readme_images/game1wireframe.png)

#### Game 1 Mobile
![Game 1 mobile wireframe](docs/readme_images/game1mobilewireframe.png)

#### Game 2 Desktop
![Game 2 desktop wireframe](docs/readme_images/game2wireframe.png)

#### Game 2 Mobile
![Game 2 Mobile wireframe](docs/readme_images/game2mobilewireframe.png)



### Colour Scheme
Colours chosen are all strong and fun as younger users are the expected client. Main colors tie in with the background image.

### Typography

The font was chosen as it has some sci-fi/digital style to it to tie in with the theme of the app. <br>
[Google Fonts](https://fonts.google.com) was used for the following font:

![Trispace-font](docs/readme_images/trispace-font.png)

### Cards and Buttons
A fun, hand-drawn style is used for all the images to add to the fun element of the game. 

## Technologies Used
- HTML - for the page content.
- CSS - for the styling.
- Javascript - for the functionality of the game. 
- Github - source code hosted on Github and deployed using Github pages.
- VS Code - The app was developed using VS Code IDE and commit and push using Git.
- Favicon.io - https://favicon.io/ used to generate custom favicon.
- ImageResizer - https://imageresizer.com/ used for resizing the images.
- Balsamiq - used to create the wireframes.

## Testing
Testing using Google Chrome Dev Tools was used throughout the build of the game. Below you can see the results of the W3C HTML, CSS & JavaScript checkers for the finished site.

#### W3C HTML Checker
![w3c-html](docs/testing/w3c-html.png)

#### W3C CSS Checker
![w3c-css](docs/testing/w3c-css.png)

#### Lighthouse
![Lighthouse score](docs/testing/lighthouse.png)