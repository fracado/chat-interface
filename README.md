# Chat Interface App

This project fetches messages from an api and displays them in a chat interface, as well as allowing to send messages.

You can find the published app here: [Chat Interface App](https://chat-interface-app.netlify.app)

## How to start the app

### Install packages

From the project directory, run `npm install` to install the application dependencies.

### Add credentials

In the project root directory, create a `.env` file with the following content:
```
REACT_APP_CHAT_API_TOKEN=<token>
```

Replace the `<token>` with your token.

### Run the app
    
Run `npm start` to start the development server.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Outlook

As a future outlook, I would like to make the following additions:
- loading only limited messages up to (relative) timestamp on page load and loading all when scrolling to top of the page
- error handling for invalid input
- tests for components and helper functions
