# Project Name

## Description

I had to build a multi view feedback form that stored the feedback to a database through a Node server. I started by building out the Node server and writing the POST route I'd need to get the client side data to the database. I then imported all of my react and redux dependencies that are required to provide global states and view routing. In App.js I imported HashRouter and created the basic route structure I'd need for each view of the form inputs and review. I then created the individual components for each view route. The inputs are all essentially structured the same with a an input box and next button that saves the input value to state, dispatches it to the called reducer on index.js, and switches to the next view on the button press. On the final review page I set the state to all of the reducers states carrying the inputted data and posted that data to the server on submit. The final page lets the user know that the feedback was submitted and has a button that if clicked resets the forms and brings the user back to the home page to start a new form if they choose.

## Usage

- User presses the Start button to begin the form
- User is brought to the feeling page and fills out the feeling input and hits next
- User is brought to the understanding and page fills out the understanding input and hits next again
- User is brought to the support page and fills out the support field and hits next again
- User is brought to the comments page and optionally can fill out the comments field and hits next once again
- User is brought to the review page to check their scores given and hit submit to send the feedback up
- User is brought to the reset page and thanked for their feedback and can reset the form to start another if they choose

## Built With

- JavaScript
- HTML
- CSS
- React
- Redux
- Node.js
- PostgreSQL

## Acknowledgement

I'd like to thank Prime Digital Academy for supplying me with the knowledge and resources to build this project.
