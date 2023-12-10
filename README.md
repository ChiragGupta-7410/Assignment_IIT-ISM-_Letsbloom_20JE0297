# Assignment_IIT-ISM-_Letsbloom_20JE0297

## Common setup
### Clone the repo and install the dependencies.
    git clone https://github.com/ChiragGupta-7410/Assignment_IIT-ISM-_Letsbloom_20JE0297.git
    cd Assignment_IIT-ISM-_Letsbloom_20JE0297-main
    npm install

### Initializing Environment Variable
1. Create a .env file
2. Add the Following Code
    PORT = 4000
    MONGODB_URI = "your mongodb uri"

### Start the Server
    npm run start
Open http://localhost:4000 and take a look around.
If shows "Cannot GET /", then server is running.

## Mock Data
1. File "books.json" contains the mock data.
2. The Mock Data is automatically added to the MongoDB collection when run for the first time.
3. Check the MongoDB if mock data is seed or not.

## Documentation
1. "Letsbloom Developer Assignment Documentation" File contains the documentation.
2. Use Postman to check the API Endpoints.
### Brief Overview
#### Letsbloom Developer Assignment
A simple RESTful API for managing a library system.

##### GET
###### Get All Books
    http://localhost:4000/api/books
Retrieves a list of all books in the library from the database.
###### Responses
1. Status = 200
    Request Succesfull, Return an List of all books in json format
2. Status = 400
    Bad Request
﻿
##### POST
###### Add New Book
    http://localhost:4000/api/books
Used to add a new book to the library.
Parameter Required in JSON format
1. ISBN
2. Book Name
3. Book Description
4. Book Price
5. Stock Available
6. Book Rating

﻿Example
{
    "ISBN": 1111111111116,
    "name": "Book 15",
    "description": "Description 15",
    "price": 2,
    "stock": 50,
    "rating": 2.55
}
###### Responses
1. Status = 201
    Request Succesful, New Book Added
2. Status = 400
    Bad Request


##### PUT
###### Update Book Details
    http://localhost:4000/api/books/6575d23dd479bcf092be711a
Used to update the details of a specific book in the library.
Parameter Required
1. ID of the Book in the url
2. List of fields to change in JSON format

﻿Example
{
    "rating": 0.5
}
###### Responses
1. Status = 200
    Request Succesfull, Book Details Updated Successfully.
2. Status = 400
    Bad Request
3. Status = 404
    Book Not Found

