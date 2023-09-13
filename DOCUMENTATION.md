///////////////////////////////////
Person API Documentation
//////////////////////////////

Welcome to the Person API documentation. This API allows you to manage people's data, including creating, reading, updating, and deleting person records.


//////////////////////
Table of Contents
/////////////////////
Endpoints
Request/Response Format
Sample Usage
Known Limitations
Setup and Deployment

//////////////////////////
Endpoints
/////////////////////////
GET /api: Retrieve a list of all people.
GET /api/:id: Retrieve details of a specific person by ID.
POST /api: Create a new person.
PUT /api/:id: Update details of a specific person by ID.
DELETE /api/:id: Delete a person by ID.

////////////////////////////
Request/Response Format
///////////////////////////

Create a New Person (POST /api)
*******************************
Request Body Format:

{
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com"
}
Response Format (Success):

{
  "_id": "<person_id>",
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com",
  "createdAt": "<timestamp>",
  "updatedAt": "<timestamp>",
  "__v": 0
}
//
Response Format (Error):

{
  "message": "Validation failed: age: Age must be a positive number."
}

///////////////////////////////////////////////////


Retrieve All People (GET /api)
*********************************

Response Format (Success):

[
  {
    "_id": "<person_id>",
    "name": "John Doe",
    "age": 30,
    "email": "john@example.com",
    "createdAt": "<timestamp>",
    "updatedAt": "<timestamp>",
    "__v": 0
  },
  {
    "_id": "<person_id>",
    "name": "Jane Smith",
    "age": 25,
    "email": "jane@example.com",
    "createdAt": "<timestamp>",
    "updatedAt": "<timestamp>",
    "__v": 0
  }
]
//
Response Format (Error):

{
  "message": "Internal server error."
}
/////////////////////////////////////////


Retrieve a Specific Person (GET /api/:id)
***********************************************

Response Format (Success):

{
  "_id": "<person_id>",
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com",
  "createdAt": "<timestamp>",
  "updatedAt": "<timestamp>",
  "__v": 0
}
//
Response Format (Error - Person Not Found):

{
  "message": "Person not found."
}

Update a Specific Person (PUT /api/:id)
******************************************

Request Body Format (Partial Update):

{
  "name": "Updated Name"
}
Response Format (Success):

{
  "_id": "<person_id>",
  "name": "Updated Name",
  "age": 30,
  "email": "john@example.com",
  "createdAt": "<timestamp>",
  "updatedAt": "<timestamp>",
  "__v": 0
}
//
Response Format (Error - Person Not Found):

{
  "message": "Person with this ID <person_id> was not found."
}
//
Response Format (Error - Validation Failed):

{
  "message": "Validation failed: age: Age must be a positive number."
}

Delete a Specific Person (DELETE /api/:id)
**********************************************

Response Format (Success):

{
  "message": "Person with this ID <person_id> has been deleted."
}
//
Response Format (Error - Person Not Found):

{
  "message": "Person not found."
}



////////////////////
Sample Usage
////////////////////

Create a New Person
Request:

POST /api
Content-Type: application/json

{
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com"
}
//
Response (Success):

{
  "_id": "<person_id>",
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com",
  "createdAt": "<timestamp>",
  "updatedAt": "<timestamp>",
  "__v": 0
}
//
Response (Error):

{
  "message": "Validation failed: age: Age must be a positive number."
}
//
//
Retrieve All People
**********************
Request:

GET /api
Response (Success):
[
  {
    "_id": "<person_id>",
    "name": "John Doe",
    "age": 30,
    "email": "john@example.com",
    "createdAt": "<timestamp>",
    "updatedAt": "<timestamp>",
    "__v": 0
  },
  {
    "_id": "<person_id>",
    "name": "Jane Smith",
    "age": 25,
    "email": "jane@example.com",
    "createdAt": "<timestamp>",
    "updatedAt": "<timestamp>",
    "__v": 0
  }
]
Response (Error):
{
  "message": "Internal server error."
}

Retrieve a Specific Person
****************************
Request:

GET /api/<person_id>
Response (Success):

{
  "_id": "<person_id>",
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com",
  "createdAt": "<timestamp>",
  "updatedAt": "<timestamp>",
  "__v": 0
}
Response (Error):

{
  "message": "Person not found."
}
//

Update a Specific Person
*************************
Request:

PUT /api/<person_id>
Content-Type: application/json

{
  "name": "Updated Name"
}
//
Response (Success):

{
  "_id": "<person_id>",
  "name": "Updated Name",
  "age": 30,
  "email": "john@example.com",
  "createdAt": "<timestamp>",
  "updatedAt": "<timestamp>",
  "__v": 0
}
//
Response (Error - Person Not Found):
{
  "message": "Person with this ID <person_id> was not found."
}
//
Response (Error - Validation Failed):

{
  "message": "Validation failed: age: Age must be a positive number."
}

//
Delete a Specific Person
*******************************
Request:

DELETE /api/<person_id>
Response (Success):

{
  "message": "Person with this ID <person_id> has been deleted."
}
//
Response (Error - Person Not Found):

{
  "message": "Person not found."
}



//////////////////////////////
Known Limitations
////////////////////////////

Age must be a positive number.
No authentication or authorization mechanisms are implemented in this version.

///////////////////////////
Setup and Deployment
///////////////////////////
Clone the project from GitHub.
Install dependencies using npm install.
Create a .env file with your MongoDB connection URI and other environment variables.
Run the API using node app.js.
The API will be accessible at http://localhost:3000.





