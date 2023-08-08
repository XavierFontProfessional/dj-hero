# DJ Hero

Welcome to the DJ Hero project! This project is a React-based application that simulates a DJ mixer interface.

## Overview

The main application is structured around the `App.js` file, which renders the `Pista` component. The `Pista` component is responsible for displaying musical notes that can be interacted with.

### Components

- **Pista**: This component manages and displays a series of musical notes. It uses the `notes.js` file to get the data for each note. The notes are displayed with varying heights, backgrounds, and margins.

- **Note**: Represents an individual musical note. It takes in properties such as height, background color, and margin-top to render the note.

### Notes Data

The data for the notes is stored in the `notes.js` file. Each note has a unique key, margin-top value, height, and background color.

## Dependencies

The project uses the following main dependencies:

- React (version 18.2.0)
- React DOM (version 18.2.0)
- React Scripts (version 5.0.1)

## Scripts

- `start`: Starts the development server.
- `build`: Builds the app for production.
- `test`: Runs the test suite.
- `eject`: Ejects the app from the create-react-app setup.

## Development

To start the development server, run:

\```bash
npm start
\```

This will start the app on `localhost:3000`.

## Contributing

The project is still under development. If you'd like to contribute, please fork the repository and create a pull request.
