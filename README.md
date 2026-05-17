# Notes API

A simple RESTful Notes API built using Node.js, Express.js, and MongoDB.  
This project performs full CRUD (Create, Read, Update, Delete) operations on notes

## Features

- Create a new note
- Get all notes
- Get a single note by ID
- Update a note
- Delete a note
- MongoDB database integration
- REST API architecture
  
## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

## Project Structure

```bash
notes-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── notesController.js
│
├── models/
│   └── Notes.js
│
├── routes/
│   └── notesRoutes.js
│
├── .env
├── .gitignore
├── package.json
├── server.js
```

## Installation

### Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/Backend_Development.git
```

### Move into project folder

```bash
cd Backend_Development
```

### Install dependencies

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory and add:

```env
MONGO_URI=your_mongodb_connection_string
PORT= Server_
port
```

## Run the Server

### Development mode

```bash
npm run dev
```

### Normal mode

```bash
node server.js
```

## API Endpoints

### Create Note

```http
POST /api/notes
```

#### Request Body

```json
{
  "title": "First Note",
  "content": "This is my first note"
}
```

### Get All Notes

```http
GET /api/notes
```

### Get Single Note

```http
GET /api/notes/:id
```

### Update Note

```http
PUT /api/notes/:id
```

#### Request Body

```json
{
  "title": "Updated Title",
  "content": "Updated content"
}
```

### Delete Note

```http
DELETE /api/notes/:id
```

## MongoDB Connection

MongoDB is connected using Mongoose.

Example connection:

```javascript
mongoose.connect(process.env.MONGO_URI)
```

## Future Improvements

- User authentication
- JWT authorization
- Notes categories/tags
- Pagination
- Search functionality

## Author

Developed by Keerti
