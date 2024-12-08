# Getting Started with Create React App

npx create-react-app . --template typescript //this help to create the app

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### Devops operations
I) Build stage

1) Build the image
    ### Build for local use
    docker build -t kf-sarlu:1.0.0 .

    ### Build for hub use
    docker build -t jeanfelixsagno/kf-sarlu:1.0.0 .
    docker push jeanfelixsagno/kf-sarlu:1.0.0


