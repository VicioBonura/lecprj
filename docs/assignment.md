# Esports
An Esports league website

## Aim
Create a website with various areas that display information about an Esports league, its tournaments, teams and players

## Requirements

### Structure and behavior
Create a website about an Esports league  
The website should have at least the following areas:

- homepage
- news page
- tournaments
- players
- join us (player application page)
- gallery
- about (about the league)

### General
All pages should include:

- the league's name and logo
- main navigation (switching between different pages/areas)
- secondary navigation (jumping to different sections in the same page)

### Homepage
The homepage should include a quick introduction to the website to help users identify what's it about and to navigate to more in-depth content.  
It should include a content area for the latest news posts (at least 3). The content area could be a sidebar or another container.  
It should also include some information from each of the other areas (tournaments, players, join us, gallery, about) as well as CTAs (call to action) to navigate to those areas

### Tournaments
This area should include a list of tournaments (at least 10). They should be grouped in three sections: past, current and future. Each should include at least a name, code, venues (location or city), image, date and a list of teams with the players of each team.  
Different tournaments can be based on the same game or on different games. The same tournament can take place in different years with the same or with different teams.  
The teams should include links to the players page and to the specific player for each team. The same teams can participate in different tournaments.
The tournaments page should be responsive, list in mobile view and cards on larger viewports

### Players
This area should include a list of teams and each team should include a list of players (at least 8 teams and 5 players per team). They should be grouped in two sections: active and retired. Each player should include at least a name, code, bio, photo, age, nationality, years of experience and links to tournaments in which the player has participated.  
The players page should be responsive, list in mobile view and cards on larger viewports

### Joinus
This area should contain an application form to gather information from future player candidates:
- First, middle (optional) and last names
- Desired tournaments (Choice of tournaments should match future tournaments in the tournaments area)
- Age, gender, hair and eye color (color picker or choose from a list)
- Contact information: email, phone numbers, address, etc
- Games (one or more games that the player us specialized in)
- A shot biography (max 255 characters)
- Any other information that you want
The form must be fully client-side validated

### Gallery
This section includes images from previous tournaments, future tournaments, team achievements and any other league related images  
You are free to design it as you see fit, however it should be fully responsive

### About
This section includes some information about the league, what it does, its history and any other relevant information  
You are free to design it as you see fit, however it should be fully responsive

### Responsiveness
All the pages of the website should be fully responsive and should be designed mobile-first.  
Responsiveness does not just mean that the website is functional at different viewport sizes but that the device and screen real estate are taken into consideration for the user experience (appropriate font sizes, element positioning, navigation aids, etc.)

### Optional
- create another area where you can embed some videos about the league on youtube or vimeo. Don't exaggerate this, think about performance and the user experience
- create another area called 'Venues' with a list of previous and possible venues for the tournaments. Provide some images and details for each. Link tournaments to venues.

### Important
- Use meaningful names (for files, classes, id's, etc.)
- The code should be well documented
- The code should be well indented
- The data structures should be effective and the code should be efficient
- You need to be able to explain each line of your code

### Bonus(extrapoints)
**Bonus 1**: Animations and transitions
Use transitions and animations to change the look and feel of your application in some instances, e.g. when switching from one breakpoint to another, or when the user interacts with your application (e.g. hover, focus, etc)

Transitions and animations should be appropriate to the situation and not exaggerated
- Using CSS transitions - CSS: Cascading Style Sheets
- Using CSS animations - CSS: Cascading Style Sheets
- css-tricks - animation
- This Ain't Disney: A practical guide to CSS transitions and animations

**Bonus 2**: Backend form handling
- build a small back-end server to process and display received player applications
- any back-end language may be used (php, python, nodeJS, etc)
- the readme.md file should include detailed information on how to run and access the back-end
- any web server (local or remote) may be used to host the application
- the back-end application should have a web page that displays the list of applications received. This page should be linked to from the front-end website

## Help
Plan your page structures and CSS selectors before starting  
Use a CSS reset stylesheet or write your own  
Divide your application logically into multiple HTML and maybe CSS files  

## Compatibility
The project should be tested and work properly on: Chrome, Firefox, Edge  
Compatibility with other browsers, especially mobile, is a nice bonus

## Libraries, frameworks and language features
- Do not use any external libraries or frameworks.
- You have to write all the code yourself.
- If you use any language features not seen in class, they have to be justifiable, correct and tested.

## Documentation and validation
### Comments and code documentation
- All HTML, CSS and JS files should contain comments and be well documented
- JSDoc header documentation for every file
- JSDoc documentation for every function
- CSS files (if used) should have a header and contain comments where needed
- HTML files should contain comments to indicate important sections
- Follow all comments and documentation requirements as detailed in the appendix

### Validation
- HTML files should be validated The W3C Markup Validation Service
- CSS files should be validated The W3C CSS Validation Service
- JS files should be checked with JSHint or ESLint

### Readme
Include a readme.md file that includes at least the following sections
- Introduction / Project description
- Usage (how to set up, run and use the application)
- Configuration and technical characteristics
- Files and project structure
- Features delivered
    - feature 1: description of feature 1
    - feature 2: description of feature 2
    - feature 3: missing
- Bonuses delivered
    - Bonus 1: description of bonus 1
    - Bonus 2: missing
- Browser compatibility
    - Chrome v##.##.##: tested and fully compatible
    - Opera v##.##.##: tested and partially compatible - feature x not working
    - Edge v##.##.##: not tested or not functional
    - The above are only examples, your application should be fully compatible as per the compatibility requirements
- External resources
    - Links and description of external resources
    - e.g. JSON files, APIs, DBs, etc
- License and contact information
- Authors: names, roles and team composition
- Changelog and version history
- Any other information that you think is important

**note:** "feature" means requirements or behaviors of this project as you have interpreted them from this document.

## Screenshots
No screenshots are provided. Develop your own style, look and feel