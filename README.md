# **INTRODUCTION**

----

The aim of this project is to utilise JavaScript, HTML & CSS to develop a fun-yet-challenging test for nerds everywhere: As Pokémon-spotting could arguably be considered one of the ultimate tests of nerd knowledge and geekdom, this project was originally envisioned as: **PokéDeX•Trainer**, ***Gotta ID 'em ALL!***

![Initial Project Doodlings](readme_media/planning_docs/portfolio_project_two_thinx.png)

However, given **Nintendo's** notorious [zero-tolerance approach to the use of their IPS](https://www.quora.com/Why-is-Nintendo-so-strict-about-copyright-laws), caution was obviously prudent. After seeking advice and following further [online research](https://www.buzzfeed.com/audreyworboys/fandom-logo-quiz), a different devious design was adopted for development: ***Behold the...***

![nerdOmeter header](readme_media/site_screens/pp02_header_default_lg.png)

---- 

# UCD Phase 1: STRATEGY 

## PROJECT GOALS

**nerdOmeter** aims to cater for nerds wishing to test their nerdiness and prove their fandom knowledge. 

## External User Goals: 

- To test their nerd knowledge using a simple-yet-stylish interactive online experience
- Identify a random selection of **Fandom franchises** from their logos alone
- Option to request features and leave feedback via a prominent contact method 

  Additional ***user expectations*** for consideration include:
  - Intuitive/conventional navigation elements
  - Familiar and/or easily understandable site structure
  - Responsive: access site easily on any device

## Site Owner Goals:

- Develop a simple-yet-stylish interactive online test for nerdiness
- Offer the opportunity for other nerdy types to make contact and offer feedback/suggestions 
  
  Additional ***stakeholder concerns*** for consideration: 
  - Geeky, retro feel with some animated element(s) preferred; page background/icons/logo
  - Provide clear credits and image information for all logos utilised in the test 
  - The ability to easily expand and/or change the test material 


## Potential Features:

Considering the goals, expectations and concerns detailed above, potential features for the **nerdOmeter** site should include:
- A stylish, retro feel with easy, intuitive navigation/controls - and some animation!
- To test user's knowledge in an engaging-yet-challenging experience 
- Provide a prominent contact method for user interaction
- Potential to easily expand/change test content
- Potential for a Rankings or Leaderboard feature

---- 

# UCD Phase 2: SCOPE

### Analysis and grading of *Phase One considerations* allows a simple ***Strategy Table*** to be generated:


| OPPORTUNITY/PROBLEM/FEATURE                | IMPORTANCE | VIABILITY/FEASIBILITY | ID    | 
|--------------------------------------------|:----------:|:---------------------:|:-------
| Intuitive interactive online experience    | 5          | 4                     | A     |
| Fun & challenging test of knowledge        | 5          | 4                     | B     |
| Prominent contact options                  | 5          | 5                     | C     |
| Potential to expand/change content         | 4          | 5                     | D     |
| Potential for Ranking/Leaderboard feature  | 3          | 2                     | E     |
| TOTAL                                      | 22         | 20                    |       |


![UCD Strategic Trade-Offs: Importance vs Feasibility](readme_media/planning_docs/uxd_strategic_tradeoffs.png)

## Strategic Trade-offs

Plotting the Strategy Table results provides a visible indication of what is feasibily within the scope of the project at this time. As I am unable to meet all requirements at present, I will aim to provide **nerdOmeter** initially as an MVP or Minimum Viable Product, therefore: 
  Due to time and current-skill limitations the site will be developed in phases:

  ***Initial Phase:*** Delivery of MVP, a fully functioning website, with the exception of
    
  - Potential expansion of test material (primarily to increase user-challenge) withheld and focusing on a smaller subset of images (15) and shorter test length (5) in order develop working proof-of-concept 
  
  - Provision of Leaderboard/Ranking feature to be considered as/when time allows

----

# UCD Phase 3: STRUCTURE

## **nerdOmeter** Layout 

Rather than relying on multiple HTML and CSS pages, this project aims to primarily utilise JavaScript to control and affect the transitions and functions of a single-page online experience. To this end, and after careful consideration and [research](https://stackoverflow.com/questions/40141361/can-i-use-multiple-main-elements-in-a-multipage-document), the decision was made to contravene a pre-HTML5 convention and to utilise more than one `<main>` tag in the index.html; however, through the use of the `display:'block'` and `display:'none'` attributes, there is only ever one `<main>` element visible at a time.

![stackoverflow](readme_media/planning_docs/pp02_multiple_mains.png)

---- 

# UCD Phase 4: SKELETON

## Initial Wireframes for **nerdOmeter**

Following current conventional practice, **nerdOmeter** was designed with a Mobile First approach.

----


![Balsamiq Start](readme_media/planning_docs/wireframes/m1_start-screen.png) 
![Balsamiq Game](readme_media/planning_docs/wireframes/m2_game-screen.png)
![Balsamiq Modal](readme_media/planning_docs/wireframes/m2a_game-screen_alt.png)

----

![Balsamiq Score](readme_media/planning_docs/wireframes/m3_score-screen.png)
![Balsamiq Feedback](readme_media/planning_docs/wireframes/m4__fback-screen.png)

All wireframes generated in [Balsamiq](https://balsamiq.com)

---- 

# UCD Phase 5: SURFACE

## DESIGN CHOICES

## Fonts

All fonts utilised in this project were sourced from and served by [**Google Fonts**](https://fonts.google.com)

- **Heading Font:** *Press Start 2P*
  
  *Press Start P2* is a cursive style font with a gamer-geek/retro-tech, pixellated appearance. It was chosen as it effectively conveys the nerdy aesthetic of both site focus and content.

- **Body Font:** *VT323*

  The monotype font *VT323* was chosen as a geeky, computer-themed compliment to *Press Start P2*.

![Google Fonts Choices](readme_media/site_screens/pp02_googlefonts.png)

## Colours

The **60:40:10 rule** was used when determining colours, which were chosen from the palette of the background video

  • 60% Background/Primary - **#191970** *Midnight Blue*
  
  • 40% Body Text/Secondary: **#fff** *White* chosen for excellent contrast with Primary
  
  • 10% Accent/Tertiary: **#00ffff** *Cyan* chosen as a clean, fresh contrast to Primary and compliment to Tertiary

## Imagery

### All icons utilised in **nerdOmeter** are credited within the site, via the modal link in the footer, in addition to this [nerdOmeter Image Credits PDF](readme_media/planning_docs/nerdOmeter.pdf) summary 

----

## TECHNOLOGIES

During the course of this project I have utilised the following technologies:

## Languages

- [**JavaScript**](https://www.javascript.com/) was used to add interactivity and enrich the User eXperience

- [**HTML5**](https://html.com/html5/) (HyperText Markup Language) was used for structuring & presenting site content

- [**CSS**](https://www.css3.info/) (Cascading Style Sheets) was used to provide styling to the HTML

## Tools

- [**favicon**](https://www.favicon.cc/) was used to create a unique favicon for **nerdOmeter**

- [**Git**](https://git-scm.com/) was used for version control (commit to Git and push to GitHub)

- [**Gitpod**](https://www.gitpod.io/) was used to write my code; an online IDE linked to the GitHub repository

- [**GitHub**](https://github.com/) was used to create the repository and store the project's code after being pushed from Git

- [**Chrome**](https://www.google.com/intl/en_uk/chrome/) used to debug & test source code using HTML5 and to test site responsiveness

- [**Balsamiq**](https://balsamiq.com) used to generate project site maps and wireframes

- [**Google Fonts**](https://fonts.google.com) used for all fonts utilised in the project

- [**amiresponsive**](http://ami.responsivedesign.is/) used to check how responsive the site is on different devices

- [**Web Page Test**](https://www.webpagetest.org/) used to test site performance

- - [**JSHint**](https://jshint.com/), [**W3C Markup**](https://validator.w3.org/) and [**W3C Jigsaw**](http://jigsaw.w3.org/css-validator/) used to validate source JavaScript, HTML and CSS code

## FEATURES

## Site-wide Features

- **Site-wide Header with Logo and Dynamic Subheader**

![Site-wide Logo & Dynamic Subheader](readme_media/site_screens/pp02_header_default_lg.png)

![Site-wide Logo & Dynamic Subheader Game Panel](readme_media/site_screens/pp02_header_game.png)

  - Visually balancing the top-left-aligned nav elements, the RJW Illustration logo is rendered top-right using Amatic SC, a cursive web font in a simple, hand-drawn style.
  - Featured on all website pages, the fully responsive header includes links to the Home page, Portfolio landing page and Contact page and is identical on each page to allow for easy navigation.
    - This allows the user to consistently navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button. 
  - The example below shows an underline in the site's chosen accent colour, Chartreuse, indicating the current **active** page.

- **Site-wide Animated Page Background**

  - The main Home page section consists of an original animated (.mp4) background created by RJW 
    - RJW intends to regularly update the background with fresh animations, encouraging visitors to return and check for new work playing
  - Pages containing copy have been styled with a dark tinted panel behind to reduce contrast between the white copy and underlying animation, this assists users by enhancing contrast and legibility 
  
![Neontrack mp4](readme_media)


- **Site-wide Footer** 

  - The footer section includes links to Instagram and Behance external sites and will open to a new tab, allowing easy navigation for the user. This is valuable to site users as it encourages them to keep connected via social media.
  - Additional site-wide breadcrumb-style nav links included in the footer allow easy user navigation to Home, Portfolio and Contact pages at the bottom of long gallery pages and pages on smaller, responsive-styled screens.

![Site-wide Footer](readme_media)

![Site-wide Footer Modal](readme_media)

## Home Page Features

- The Home page consists of two responsive elements:
  - ***Left [responsive: top]*** comprises of an 'About' heading above text on dark-tinted panel, containing brief information about RJW, encouraging getting in touch and thanking for visiting. Valuable to user relations as it conveys pertinent information in a friendly, approachable manner
  - ***Right [responsive: bottom]*** a paused and muted time-lapse video of RJW's digital art process for the 'Dizzy' illustration. Valuable to users as it provides an insight into RJW's methods and artistic process. 
    - In the interest of good UXD, THE VIDEO DOES NOT AUTOPLAY until user-invoked, looping thereafter until stopped 

![Home Page Copy Panel](/readme_media/rjwi_screens_site_features/rjwi_home_copy_panel.png) ![Home Page Time-lapse User-Invoked Video Panel](readme_media/rjwi_screens_site_features/rjwi_home_video_panel.png)


## Game Panel Features

  - The 

![Game panel](readme_media)

## Score Panel Features

  - The 

![Score panel](readme_media)

## Feedback Panel Features

  - The

![Feedback Panel](readme_media)

![Feedback Form Validation](readme_media)

## *Features Left to Implement*

- Identified as **Strategic Trade-offs** at ***UXD Phase 2***, a **Ranking System** and **Test Expansions** will be addressed, skills and time permitting, as and when possible.

----

# VERSION CONTROL

Managed within **GitHub** and **Gitpod** via regular commits pushed to GitHub remote servers:

## Gitpod Workspaces
1. Starting from GitHub, clone the Code Institute template by clicking Use This Template and copying to my repo. Launch Workspace by clicking GitPod button - this action is only performed once and the workspace is subsequently reopened through GitPod.

2. Start the Gitpod Workspace which opens an online IDE editor window.
    
    - Update GitHub by committing from GitPod

3. During editing save the code regularly, using git add ., git commit -m "commit message here" and git push Bash commands to push changes to the GitHub repository.

4. Meaningful commit messages allow easy roll-back of any changes to earlier versions.

# TESTING 

## AUTOMATED TESTING

## jshint Validator Testing 

- JavaScript
  - No errors were returned when passing through the [JSHint validator](https://jshint.com/)

![JSHint JS](readme_media)

## W3C Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org)

![W3C HTML](readme_media)

- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org)

![W3C CSS](readme_media)

**Google Developer Tools**

- I made use of the built-in **Chrome Dev Tools** to experiment and debug while coding, in addition to testing simulated responsive behaviour across a wide range of mobile and desktop devices, and finally checking all pages Performance using **Lighthouse**. 


**Response Testing**

In order to make sure that RJW Illustration was responsive to all device sizes, I used [amiresponsive](http://ami.responsivedesign.is/)

**WebPageTest**

- I used [WebPageTest](https://www.webpagetest.org/) set to London/Chrome as a final test for **nerdOmeter**.

    - Both Gallery pages were initally flagged for uncompressed images, which resulted in a second image overhaul, where I re-optimised, replaced and re-linked all .jpeg images with smaller fresh versions!

![WebPageTest Main](readme_media)


## MANUAL TESTING

In addition to my own testing a link to the project was shared to family & friends for rigorous testing across varied devices and screen sizes.

  - **Browsers** including: 
    - Chrome
    - Safari
    - Edge

  - **Devices** including: 
    - iPhone SE (Gen 1)
    - iPhone 11
    - iPhone 12 Mini
    - Google Pixel 4a
    - iPad Pro (2018)
    - iPad Air (2020)
    - MacBook Pro (2015)
    - Windows 10 PC 

## Manual Testing Results Summary

**Main Start Page**

| TEST | OUTCOME | PASS/FAIL |
|---|---|:---:|
| Header & Footer | Ensure all header, footer & nav elements behave as expected: Active/Hover states; | PASS |
|  | Ensure all styled responsive behaviour rules are met as expected | PASS |
|  | Ensure social media links behave as expected and open in new tabs | PASS |
| Background Video | Ensure appropriate behaviour across-site: loads & plays; response scaling; | PASS |

![Lighthouse Main](readme_media)

**Game panel**

| TEST | OUTCOME | PASS/FAIL |
|---|---|:---:|
| Video | Ensure expected behaviour: autoplay disabled, muted, loop enabled, plays on demand | PASS |
| Responsive | Ensure responsive behaviour rules are met as expected | PASS |

**Score panel**

| TEST | OUTCOME | PASS/FAIL |
|---|---|:---:|
| Gallery Covers | Ensure expected behaviour: Hover state | PASS |
| Responsive | Ensure responsive behaviour rules are met as expected | PASS |

**Feedback panel**

| TEST | OUTCOME | PASS/FAIL |
|---|---|:---:|
| Social media links | Ensure social media links behave as expected and open in new tabs | PASS |
| Responsive | Ensure responsive behaviour rules are met as expected | PASS |
| Form element | Ensure expected behaviour: Validation; confirmation | PASS |


## BUGS and FIXES

### **Bug:** 

# Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - Click the Pages section in the sidebar
  - From the source section drop-down menu, select the main branch
  - Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://alfa23.github.io/portfolio-project-two/ 


## **Credits**

• **All document fonts** sourced from google fonts: https://fonts.google.com/specimen/VT323?preview.text=nerdOmeter&preview.text_type=custom&category=Monospace#standard-styles

### **Content**

• **Background Video** sourced from: https://www.videezy.com/abstract/53213-3d-render-sci-fi-neon-corridor 

• **Consistent footer** behaviour controlled using learnt, borrowed and adapted css-grid code from: https://dev.to/niorad/keeping-the-footer-at-the-bottom-with-css-grid-15mf

• **Page background video** modified code from https://w3collective.com/fullscreen-video-background/

• **Modal box** for footer/image credits learnt, borrowed and adapted css-grid code from: https://www.w3schools.com/howto/howto_css_modals.asp 

