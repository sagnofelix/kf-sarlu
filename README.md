# Getting Started with Create React App

npx create-react-app . --template typescript //this help to create the app

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### Devops operations
I) Build stage

1) Building the image : docker build -t jeanfelixsagno/kf-sarlu:latest .
2) Push the image : docker push jeanfelixsagno/kf-sarlu:latest

II) Deployment Stage
docker-compose up -d



