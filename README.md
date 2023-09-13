# Person API

The Person API is a RESTful API for managing information about people. You can perform basic CRUD (Create, Read, Update, Delete) operations on person records.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [Create a New Person](#create-a-new-person)
  - [Retrieve All People](#retrieve-all-people)
  - [Retrieve a Specific Person](#retrieve-a-specific-person)
  - [Update a Specific Person](#update-a-specific-person)
  - [Delete a Specific Person](#delete-a-specific-person)
- [API Documentation](#api-documentation)
- [Known Limitations](#known-limitations)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- MongoDB installed or access to a MongoDB database
- Git (optional, for cloning the repository)

## Installation

1. Clone the repository (if you haven't already):

   ```bash
   git clone https://github.com/your-username/person-api.git


1. Navigate to the project directory:
cd person-api

2. Install the project dependencies:
    npm install

3. Create a .env file in the project root directory and add your MongoDB connection URI. 
    ATLAS_URL=mongodb://username:password@your-cluster.mongodb.net/


### Usage

# Start the API

To start the API, run the following command:
    npm start

The API will be accessible at http://localhost:3000.

### Create a New Person

To create a new person, send a POST request to /api with the person's details in the request body. Here's an example using cURL:

    curl -X POST -H "Content-Type: application/json" -d '{
    "name": "John Doe",
    "age": 30,
    "email": "john@example.com"
    }' http://localhost:3000/api

## Retrieve All People

To retrieve a list of all people, send a GET request to /api. Here's an example using cURL:

    curl http://localhost:3000/api

## Retrieve a Specific Person

To retrieve details of a specific person by their ID, send a GET request to /api/:id, replacing :id with the person's ID. Here's an example using cURL:

    curl http://localhost:3000/api/<person_id>


## Update a Specific Person

To update details of a specific person by their ID, send a PUT request to /api/:id, replacing :id with the person's ID, and include the updated information in the request body. Here's an example using cURL:

    curl -X PUT -H "Content-Type: application/json" -d '{
    "name": "Updated Name"
    }' http://localhost:3000/api/<person_id>

## Delete a Specific Person

To delete a specific person by their ID, send a DELETE request to /api/:id, replacing :id with the person's ID. Here's an example using cURL:

    curl -X DELETE http://localhost:3000/api/<person_id>

## API Documentation

For detailed API documentation, including request and response formats, please refer to the API Documentation file.

## Known Limitations

Age must be a positive number.
No authentication or authorization mechanisms are implemented in this version.


This README.md file provides instructions on setting up, running, and using your API, along with examples using cURL. You can further customize and enhance this documentation as needed.



