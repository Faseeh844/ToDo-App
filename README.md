# ToDo-App

A full-stack To-Do List application built with React, Node.js, Express, and MongoDB.

## Features

- Add, update, complete, and delete tasks
- Persistent storage with MongoDB
- RESTful API backend
- Responsive and clean UI

## Tech Stack

- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** MongoDB (Atlas or local)
- **Other:** dotenv, cors

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas account or local MongoDB instance

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/ToDo-App.git
   cd ToDo-App
   ```

2. **Backend Setup:**
   ```sh
   cd server
   npm install
   ```
   - Create a `.env` file in the `server` folder:
     ```
     MONGO_URI=your_mongodb_connection_string
     PORT=5000
     ```

   - Start the backend server:
     ```sh
     npm start
     ```

3. **Frontend Setup:**
   ```sh
   cd ../client
   npm install
   npm start
   ```

4. **Open your browser:**  
   Visit [http://localhost:3000](http://localhost:3000)

## API Endpoints

- `GET    /api/todos`         - Get all todos
- `POST   /api/todos`         - Create a new todo
- `PUT    /api/todos/:id`     - Update a todo
- `DELETE /api/todos/:id`     - Delete a todo

## Complete Folder Structure

```
ToDo-App/
│
├── client/                        # React frontend
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── components/
│       │   ├── ToDoItem.jsx
│       │   └── ToDoList.jsx
│       ├── App.js
│       ├── index.js
│       └── App.css
│   ├── package.json
│   └── ...
│
├── server/                        # Express backend
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── todoController.js
│   ├── models/
│   │   └── Todo.js
│   ├── routes/
│   │   └── todos.js
│   ├── .env
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── README.md
└── ...
```

