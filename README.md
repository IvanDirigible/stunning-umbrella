# SVG Logo Maker

This is a command-line application that takes in user input to generate a logo and save it as an SVG file.

### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Installation and Use

This application is not deployed, so its functionality is not easily accessible without some coding know-how and an API development platform:  
1. Download or clone the repository from GitHub with the link below.
2. In the terminal, install the necessary packages. Such as:
```bash
  npm install
```
3. Then it's as simple as entering the following into the terminal:
```bash
  npm start
```
4. Answer each of the questions, providing the desired text, text color, logo shape and background color. Text can be up to three characters. Logo shape options include circles, triangles, or squares. Colors can either be entered as keywords, or as hexidecimal numbers.

**Note:** You can also run tests with Jest to confirm everything is running as it should:
```bash
  npm test
```

## Mock-Up

The following image shows a mock-up of the generated SVG given the following input entered by the user: `SVG` for the text, `white` for the text color, `circle` from the list of shapes, and `green` for the shape color. Note that this is just an image of the output SVG and not the SVG file itself:

![Image showing a green circle with white text that reads "SVG.".](./lib/images/logo-demo.png)

## Links

* GitHub: https://ivandirigible.github.io/stunning-umbrella/

The following link demonstrates the application generating a new SVG logo:

* Screencastify: 

## Credits
List of 140+ browser-supported colors sourced from the following: https://www.w3schools.com/cssref/css_colors.php

## License
This project is licensed under the MIT license.  
License Link  
https://opensource.org/licenses/MIT   
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]