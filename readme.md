# Backend Application Repository 
This repository contains the backend application for the [Front end Application Repository]()

Backend application is a RESTful API built with Node.js and Express.js, It uses MongoDB as databsse

# Installation
1. Clone the repository
2. Run `npm install` to install the dependencies
3. Create a `.env` file in the root directory and add the following env variables:

    -`MONGODB_URI` : MongoDB connection string
    - `PORT`: Port Number for the server
4. Run `npm run dev` to start the server
## API Endpoints

## License

## Libraries Used

- mangoose: MongoDB object modelling tool. It is used to interact with MongoDB Database. We use this instead of mongoDB driver because it provides a simple schema-based solution to model our application data