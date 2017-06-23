# gatsby-starter-default
The default Gatsby starter

Install this starter (assuming Gatsby is installed) by running from your CLI:
```
gatsby new gatsby-example-site
```
## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

## Information for Dan

Hi Dan - well done yesterday, we covered a great deal and today your tasks are:

- Take a look at pages/index.js as I fixed this last night to show the JumboTron on the homepage, basically this file is the homepage's main content area (excluding nav, header, footer). I have added comments there and provided clues on what it needs next
- You will quickly see from my comments that we shall create a simple component for the events part of the page. Using the Umbraco based site as a guide, we shall copy that code to a new component called EventsList, more detail below:

### Create the EventsList component

- Create a new file under the components folder called "EventsList.js"
- Quickest way of getting the code going, is to copy the contents of IntroBlock.js into the new file
- Delete the JSX template in the render() method, basically the HTML bit
- change the name IntroBlock to EventsList - you will change this in two places, one for the class line and again at the very bottom in the export
- Extract the code from the old site for the events section into the appropriate place
- rename all class to className

### Using the EventsList component in the index.js

- Go back to the initial index.js page and uncomment the lines where the component is imported and then where it is used in the template part of the code

$ npm start

Test your changes

Commit them, push them!
