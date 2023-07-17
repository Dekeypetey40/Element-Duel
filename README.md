# _Happy Dog_

![Site on different devices](assets/images/am-i-responsive.png)

[Am I Responsive link](https://ui.dev/amiresponsive?url=https://dekeypetey40.github.io/Happy-Dog-Website/)

---
# Introduction

[Element Duel](https://dekeypetey40.github.io/Element-Duel/) is a website where one can play Element Duel.

This website runs a game called Element Duel created by myself, Kai Michael-Mikhail. It is inspired, in part, by the Pokemon franchise and how certain types are supereffective against others, and, in part, by tabletop roleplaying games that use a twenty-sided dice to determine outcomes. 

The website provides an interactive experience where the user can play against the computer as much or as little as they wish. This was made as my second project as part of Code Institue's Full Stack Developer course.

## Technologies used
- HTML [HTML link](https://en.wikipedia.org/wiki/HTML)
- CSS [CSS link](https://en.wikipedia.org/wiki/CSS)
- Javascript [Javascript link](https://en.wikipedia.org/wiki/JavaScript)
- Font Awesome icons [Font Awesome link](https://fontawesome.com/)
- Google fonts [Google Fonts link](https://fonts.google.com/)
- VSCode was the main editor used to write my code [VScode link](https://code.visualstudio.com/)
- Balsamiq was used to make wireframes in the design process [Balsamic link](https://balsamiq.com/)

---

## User stories
- As a first time visitor, I want to easily understand how the game works, so that I become interested in it.
- As a first time visitor, I want the website to be easy to interact with, so I can easily have fun playing the game.
- As a user, I want to be able to see who made the website and see their GitHub repository, so that I can see what they can do.
- As a mobile device user, I want to interact with a responsive website, so that I can visit it with any device.


---

# Design 



## Wireframes

Wireframes were used in the beggining stages of the design phase. 
[Link to wireframe images](https://github.com/Dekeypetey40/Happy-Dog-Website/tree/main/wireframes) 



# Features

## Home page
![Full Home Page](assets/images/full-home-page.png)
- ### Navigation




---

- ### Hero section
  

  ![Hero section](assets/images/hero-section.png) <!-- FIX THIS -->
---

- ### Ethos section
 

- ### Footer
  

---



# Future Features
  - A services offered page with listed prices for each service.
  - A meet the trainers/dog walker page.

# Testing
  - I tested to make sure the website works in the following browsers: Firefox, Chrome and Edge. 
  - I used Chrome's devtools and [Am I Responsive](https://ui.dev/amiresponsive) to check that the stylings respond and everything functions on all screen sizes. 
  - I tested every button and link to confirm that they work and lead where they are supposed to. 


## Validator testing
* [HTML Validator](https://validator.w3.org/) was run. Some small syntax errors were identified and fixed. After that no errors or warnings were shown. 
![index validation](assets/images/validator-index.png) ![gallery validation](assets/images/validator-gallery.png)
![signup validation](assets/images/validator-signup.png) ![response validation](assets/images/validator-response.png)

* [CSS Validator](https://validator.w3.org/) was run and no errors were found, but some minor warnings were attended to. At the time of submission the css code successfully passed the validator with no errors and only minor warnings. 
![css validation](assets/images/validator-css.png)

* Lighthouse in Chrome Developer Tools was used. There were some issues with performance and accessibility. Color choices were changed to to address accessibility and image files were compressed to improve performance. No other errors were found.

- Index.html ![index lighthouse](assets/images/lighthouse-index.png)
- gallery.html ![gallery lighthouse](assets/images/lighthouse-gallery.png)
- signup.html ![signup lighthouse](assets/images/lighthouse-signup.png)
- response.html ![response lighthouse](assets/images/lighthouse-response.png)

## Bugs

## Solved bugs
  - My ethos section on the homepage became unresponsive to different screen sizes.
    - I solved it by realizing I had inputted the incorrect id in my media query.
  - My background image was not appearing on my github page version of the site.
    - This was solved by inputting a relative filepath to the image.
  - My logo was underlining when it should not on all pages except the index.html. 
    - I realized I had forgotten to put an id on the a element for my sign up, gallery, and response pages. 
  - My performance on my website was not optimal.
    - I solved this by compressing all of my image files. 
  - My backgrounds on my homepage where getting cropped on the right side on mobile screens.
    - My footer was wider than the container for the rest of the page so I shrunk my footer to the same width. 
  - My images looked warped at certain screen widths. When I fixed that problem they became cropped in an unappealing way.
    - I fixed this by shrinking the width of the entire gallery section at certain screen sizes. 


  ***
## Unsolved bugs

## Manual Testing

| feature | action | expected result | tested | passed | comments |
| --- | --- | --- | --- | --- | --- |
| Navbar | | | | | |
| Logo |Click on the logo |The user is directed to the home page |yes |yes | |
| Home | Click on the "Home" link | The user is directed to the main page | Yes | Yes | - |
| Gallery | Click on the "Gallery" link | The user is directed to the gallery page | Yes | Yes | - |
| Sign Up | Click on the "Sign up" link | The user is directed to the sign up page | Yes | Yes | - |
| Footer | | | | | |
| Instagram icon in the footer | Click on the Instagram icon | The user is directed to the Instagram page | Yes | Yes | - |
| Facebook icon in the footer | Click on the Facebook icon | The user is directed to the Facebook page | Yes | Yes | - |
| Twitter icon in the footer | Click on the Twitter icon | The user is directed to the Twitter page | Yes | Yes | - |
| YouTube icon in the footer | Click on the YouTube icon | The user is directed to the YouTube page | Yes | Yes | - |
| Home page | | | | | |
| Gallery page | | | | | |
| Back to top button | Click on the back to top button  | The user is directed to the top of the gallery page | yes | yes | |
| Sign Up page | | | | | |
| First name input | Enter text | Text is entered | Yes | Yes | If user doesn't enter any text an error message appears |
| Last name input | Enter text | Text is entered | Yes | Yes | If user doesn't enter any text an error message appears |
| Email input | Enter email | Email is entered | Yes | Yes | If user doesn't enter email an error message appears. If user enters an invalid email, the error message appears |
| Choose a service checkbox | Click on the checkbox | The checkbox is checked | Yes | Yes | If user does not check a box an error message appears |
| "Submit" button | Click on the "Submit" button | The user is redirected to the response page | Yes | Yes | - |
| Response page | | | | | |
| Return to home button | Click on the return to home page link | The user is redirected to the home page | Yes | Yes | - |

---

# Deployment
The site was deployed to GitHub pages. The following steps were taken to do so:
1. Log in to [Github](https://github.com/)
2. Navigate to [dekeypetey40/Happy-Dog-Website](https://github.com/Dekeypetey40/Happy-Dog-Website) in the list of repositories
3. In the GitHub repository, navigate to the [Settings](https://github.com/Dekeypetey40/Happy-Dog-Website/settings) tab
4. In Settings select [Pages](https://github.com/Dekeypetey40/Happy-Dog-Website/settings/pages) on the left hand menu.
5. From the source section drop-down menu, select the main branch.
6. Once the main branch has been selected, click on the save button in the branch section. Wait for the link to be generated and then refresh the page.

---
Credits
## Media
  - Icon for my website was taken from [Flaticon](https://www.flaticon.com/)
