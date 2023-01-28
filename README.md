# Scrimba - Basketball Scoreboard Project

This is my version of the basketball scoreboard project from module 3 in the Scrimba front end
developer career path.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- add points to each team depending on what is scored 
-start a new game at 0 points

### Screenshot

![](/screenshot.png)


### Links

- Solution URL: [https://github.com/Gnometoaster/footballl-scoreboard](https://github.com/Gnometoaster/footballl-scoreboard)
- Live Site URL: [https://dabears.netlify.app/](https://dabears.netlify.app/)

## My process

### Built with

- HTML 5
- CSS 
- Flexbox
-Javascript



### What I learned

Reinforced using javascript to grab html elements, attribute them to variables, and write functions using those variables to display what is in the element. Flexbox is becoming easier to write. Also wrote my first functional "if" statement and a not so functional "if-then"



```js
function newGame() {
    if(homeCount > awayCount) {
        alert("You know da Bears can't win, try again!" )
    }
    else {
    homeScoreEl.textContent = 0
    awayScoreEl.textContent = 0
    homeCount = 0
    awayCount = 0
    }
```


### Continued development

Still need to find out why my else-if stat,ent would not change the border of the score element
```js
function winner() {
    if(homeCount > awayCount) {
        homeScoreEl.style.border = "3px solid green"
    }else if(awayCount > homeCount) {
        awayScoreEl.style.border = "3px solid green"
    }
```

### Useful resources

- [Example resource 1](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - I kept this in an open tab the whole time and refernced it whenever i needed clarification on how to position something with flexbox


## Author

- Linkedin - [Add your name here](https://www.linkedin.com/in/james-bennett-0aa33aa7/))
- GitHub - [@yourusername](https://github.com/Gnometoaster)
- Twitter - [@yourusername](https://www.twitter.com/gnometoaster_)



