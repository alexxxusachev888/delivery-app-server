
# Delivery App Server
The Delivery App Server is the back-end application for the Delivery App Client. It was created using Node.js with Express.js and interacts with MongoDB to provide RESTful API endpoints for data handling.

## Features
- Fetches all burger items
- Retrieves orders by phone number or email
- Creates new orders
## Tech Stack
The application uses a number of open-source projects and libraries:

- Node.js - JavaScript runtime built on Chrome's V8 JavaScript engine
- Express.js - Fast, unopinionated, minimalist web framework for Node.js
- Mongoose - Elegant MongoDB object modeling for Node.js
- Joi - Powerful data validation library
- Morgan - HTTP request logger middleware for Node.js
- Cors - Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options
- Dotenv - Module that loads environment variables from a .env file into process.env
- Nodemon - Utility that automatically restarts Node.js application when file changes are detected

## Getting Started
To get a local copy up and running, follow these steps:

Prerequisites
Node.js (version 14.20.1 or later) and npm (which comes with Node.js)
MongoDB
Installation
Clone the repository:

git clone https://github.com/your_username_/delivery-app-server.git
Change directory:

cd delivery-app-server

Install dependencies:

npm install
Create a .env file and add your MongoDB connection string:

DB_URL=<your-mongodb-connection-string>
Start the development server:

npm run start:dev
The server will be running on http://localhost:3000.

Contributing
Feel free to submit pull requests to help improve this project.

License
This project is licensed under the ISC License.