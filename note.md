memory game

1. start with a mock
Theme: programming languages
cards = ['html','css','js','php','python','kotlin','c','java']
8 unique cards - x2 to match
attributes of each card
- id would be the name of the programming language
- image url

[
  {id: "html", img: "$49.99"},
  {id: "css", img: "$49.99"},
  {id: "js", img: "$49.99"},
  {id: "php", img: "$49.99"},
  {id: "python", img: "$49.99"},
  {id: "kotlin", img: "$49.99"},
  {id: "c", img: "$49.99"},
  {id: "java", img: "$49.99"},
];

Step 1: Break UI into components
a. Game - the entire game page
b. Header - the header of the page which includes the title at the left and scoreboard at the right
c. GameTable - a 4x4 table or grid to display the images for matching
d. GameTableCell

- Game
    - Header
    - GameTable
        - GameTableCell

Step 2: Build static version
- don't use state
- components only have render methods

Step 3: Identify UI state
Data in our application:
- source: programming language array of objects
- input: input card selected by user
- randomized: randomized list of our source

Let’s go through each one and figure out which one is state. Ask three questions about each piece of data:
1. Is it passed in from a parent via props? If so, it probably isn’t state.
2. Does it remain unchanged over time? If so, it probably isn’t state.
3. Can you compute it based on any other state or props in your component? If so, it isn’t state.

- scoreboard values: highest score and current score
