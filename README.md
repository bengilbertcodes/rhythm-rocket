# Rhythm Rocket

Rhythm Rocket is an interactive game for music students and tutors to use to help develop their understanding of music rhythm and notation in a fun way. <br>
It is based on a game that I have used in my own teaching practice and all my students have enojoyed. <br>
It uses the combination of shapes, sounds and music notes to help build the students understanding of how these elements are linked and can be used in creative ways. And can be used by the student alone or used as a teaching tool by tutors in lessons.

### [Live Site](https://bengilbertcodes.github.io/rhythm-rocket/)

![Mockup](docs/readme_images/mockup.png)

## Contents

* [**Features**](<#features>)
  * [**Sitewide**](<#sitewide>)
* [**The Game and User Experience UX**](<#the-game-and-user-experience-ux>)
  * [**Game 1 - Practice**](<#game-1---practice>)
  * [**Game 2 - Rhythm Match Game (True or False)**](<#game-2---rhythm-match-game-true-or-false>)
  * [**Modal**](<#modal>)
  * [**Further Development and Future Ideas**](<#further-development-and-future-ideas>)
* [**Design**](<#design>)
  * [**Wireframes**](<#wireframes>)
    * [**Game 1 Desktop**](<#game-1-desktop>)
    * [**Game 1 Mobile**](<#game-1-mobile>)
    * [**Game 2 Desktop**](<#game-2-desktop>)
    * [**Game 2 Mobile**](<#game-2-mobile>)
  * [**Colour Scheme**](<#colour-scheme>)
  * [**Typography**](<#typography>)
  * [**Cards and Buttons**](<#cards-and-buttons>)
* [**Technologies Used**](<#technologies-used>)
* [**Testing**](<#testing>)
  * [**W3C HTML Checker**](<#w3c-html-checker>)
  * [**W3C CSS Checker**](<#w3c-css-checker>)
  * [**Lighthouse**](<#lighthouse>)
  * [**Responsiveness Test**](<#responsiveness-test>)
* [**Bugs**](<#bugs>)
  * [**Unresolved Bugs**](<#unresolved-bugs>)
* [**Deployment**](<#Deployment>)
  * [**To deploy the project**](<#to-deploy-the-project>)
  * [**To fork the project**](<#to-fork-the-project>)
  * [**To clone the project**](<#to-clone-the-project>)
* [**Credits**](<#credits>)
  * [**Code Used**](<#code-used>)



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

[Back to top](<#contents>)
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

[Back to top](<#contents>)
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

[Back to top](<#contents>)
### Modal
* At any time, the user can click the 'How to Play' link in the footer to open the modal and this contains clear instructions for both game modes.

### Further Development and Future Ideas
- Add many more objects (cards) (there are currently only three!) These can be anything from simple shapes to pictures of everyday objects.
- Improve the audio for when the 'Listen' button is clicked.
- The True of False game can be adapted - User could click a listen button to hear a rhythm and then match that to the shape and/or notation.
- Mulitple choice questions could be added to expand the quiz format. For example, which of these three rhythms matches this shape?
- create backing tracks for the user to clap/peform the rhythms along to.
- Place two (or more) cards next to one another to form longer rhythms. 
- A simple drag and drop music sequencer for the user to create longer rhythmic combinations or layer them with other sounds.
- Improve the scoring functions - have previous high scores available to users (this would require user accounts).
- Add audio response so the app could listen to the users response and match it to the correct images.

[Back to top](<#contents>)
## Design

### Wireframes

#### Game 1 Desktop
![Game 1 Desktop Wireframe](docs/readme_images/game1wireframe.png)
[Back to top](<#contents>)

#### Game 1 Mobile
![Game 1 mobile wireframe](docs/readme_images/game1mobilewireframe.png)
[Back to top](<#contents>)

#### Game 2 Desktop
![Game 2 desktop wireframe](docs/readme_images/game2wireframe.png)
[Back to top](<#contents>)

#### Game 2 Mobile
![Game 2 Mobile wireframe](docs/readme_images/game2mobilewireframe.png)


[Back to top](<#contents>)
### Colour Scheme
Colours chosen are all strong and fun as younger users are the expected client. Main colors tie in with the background image.

### Typography

The font was chosen as it has some sci-fi/digital style to it to tie in with the theme of the app. <br>
[Google Fonts](https://fonts.google.com) was used for the following font:

![Trispace-font](docs/readme_images/trispace-font.png)

[Back to top](<#contents>)
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
- Procreate (iPad) - used to create all the custom images for icons and cards.
- Wavelab - used to record and edit audio clips

[Back to top](<#contents>)
## Testing
Testing using Google Chrome Dev Tools was used throughout the build of the game. Below you can see the results of the W3C HTML, CSS & JavaScript checkers for the finished site.

#### W3C HTML Checker
![w3c-html](docs/testing/w3c-html.png)

#### W3C CSS Checker
![w3c-css](docs/testing/w3c-css.png)

#### Lighthouse
![Lighthouse score](docs/testing/lighthouse.png)

[Back to top](<#contents>)
### Responsiveness Test

[Google Chrome Developer Tools](https://developer.chrome.com/docs/devtools/) was used to test how rhe game plays and looks across the all device screen sizes. Media queries have been used in the site development to ensure good operation across devices.

The app has been tested and found to be working on the following devices and operating systems:
- Google Pixel 7a and 8
- iPad Pro and Air
- MacBook Pro (macOS Montery)
- Windows 10 pc

The app has been tested and found to be working on the following browsers:
- Chrome
- Edge
- Firefox
- Safari

[Back to top](<#contents>)
## Bugs

### Unresolved Bugs
- Two users reported the app stopping (unable to load anymore cards) after 5 or 7 cards being drawn. I have not been able to replicate this problem in my IDE but will continue to monitor and adjust accordingly. 
- One user reported being unable to open images. This was on a much older iMac (2014). Further testing required to investigate further.

[Back to top](<#contents>)
## Deployment

### To deploy the project:
GitHub pages was used to deploy the live site as follows:
1. Login to GitHub
2. Go to the repository [bengilbertcodes/rhythm-rocket](https://github.com/bengilbertcodes/rhythm-rocket)
3. Click the `Settings` tab
4. Click the `Pages` tab
5. Under the 'Build and Deployment' section select the `Deploy from a branch` from the dropdown menu
6. Select the `main` and `/root` dropdown menu options
7. Click `save` and after a few minutes the site will be live 

### To Fork the project
To make a copy of the GitHub Repository you can fork a copy to edit it without changing the root file. This can then be used to update the original repository. To fork take the following steps:
1. Login to GitHub
2. Go to the repository [bengilbertcodes/rhythm-rocket](https://github.com/bengilbertcodes/rhythm-rocket)
3. On the top right-hand side of the page click the `fork` button and save a copy of the original repository to your GitHub account.

### To Clone the project
To clone the project:
1. Click the `code` button  
2. Click the `local` tab
3. Under HTTPS click the clipboard icon to copy the URL
4. In your IDE of choice, open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made
6. Type `git clone` and then paste the URL copied from GitHub
7. Press enter and the local clone will be created

[Back to top](<#contents>)
## Credits

- All images on the site were created by Ben Gilbert except
- Background (cosmos) image - from [Pixabay](https://pixabay.com/illustrations/cosmos-rockets-spaceships-ufos-5809271/). Created by Mk_al and free for use under the Pixabay Content License. 
- Audio created 

### Code used
- Thank you to Gareth Mc Girr for the code used to set up the multi-dimensional array.
- Thank you to Nirazan Basnet on [dev.to](https://dev.to/nirazanbasnet/dont-use-100vh-for-mobile-responsive-3o97) for the alternative to 100vh, improving the app on mobile devices.

[Back to top](<#contents>)