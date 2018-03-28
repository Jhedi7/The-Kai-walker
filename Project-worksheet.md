# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

|  Day | Deliverable | 
|---|---| 
|Day 1: Tue| Wireframes and Priority Matrix|
|Day 2: Wed| Project Approval /  Pseudocode / actual code|
|Day 3: Thur| Basic Clickable Model |
|Day 4: Fri| Working Prototype |
|Day 5: Sat| Final Working Project |
|Day 6: Sun| Bugs / Stylying / PostMVP |
|Day 7: Mon| Project Presentations |


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

My project will be a dog walking game. It'll be a mix between SpyHunter and Frogger! 

## Wireframes

Include images of your wireframes. 

in the project images folder! 

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

pic included



## Game Components

### Landing Page
What will a player see when they start your game?

I will be a page with a background img of a sort of 'Super Mario World' forest theme. It will welcome the player a the top, followed by some sort of smily dog face gif, followed by a 'Enter your name' form input, followed by a 'enter/Play now' button.

### Game Initialization
What will a player see when the game is started? 

When the game starts, it will be a top view of a small div/dog. The sides or, "scenery" will be the same 'Super Mario world' themed forest scrolling as you start to move the dog up the screen. 

### Playing The Game
What will be the flow of the game, what will the user be expeted to do and what will the user expect from the game:

The dog will be controlled by the arrow keys. Small divs (squirels and rats) will run across the screen from off-screen, from left to right and from right to left. you will have to walk the dog up the screen and either avoid the rats (they will cause you to lose points/the game) or try to 'eat' squriels to gain points and win the game!

### Winning The Game
What does it look like when the game ends, what determines winning or losing?

catching 5 sqirels wins the game and it takes you to a winners page. itll match the theme of the landing page. the page will congratulate you. it will display a play again button and another happy dog animation/gif.

eating 3 rats will cause you to lose the game. losing the game takes you to a loser page. the theme of this page may be slighly different (maybe a either an image or an 8bit image of the inside of a vets office) and it'lll tell you that the dog got sick and it will give you the option to play again.

### Game Reset
How will the user restart the game once it has been completed.

both the winner and loser pages will have 'play again' buttons.

## MVP 

Include the full list of features that will be part of your MVP 

a functional landing page, a functional game state page and a closing winner and loser pages.

## POST MVP

Include the full list of features that you are considering for POST MVP
## Functional Components 

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method. 

 - create a logic for selcting the dog div from the DOM and assigning it to the arrow keys.

 - create functions to rule the behavior of the criters (assign them to an object class)

 - create a function to work out the collision behavior between the divs.

 - a function to reset the game state from the 'play again and play now' buttons.

 - create a score keeper function.

 dear god i dont know what else


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| collision | H | 20hrs| 0hrs | 0hrs |
| rest of game logic | H | 10hrs| 0hrs | 0hrs |
| creating landing and end pages | M | 5hrs| 0hrs | 0hrs |
| creating game state page | M | 3hrs| 0hrs | 0hrs |
| Component 1 | H | 10hrs| 12hrs | 12hrs |
| Total |  | 10hrs| 12hrs | 12hrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  

## jQuery Discoveries
 Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
