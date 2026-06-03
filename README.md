# Personal Task Manager

## Project Title & Brief Description

**Exercise Chosen:** Exercise 1 – Personal Task Manager

Personal Task Manager is a full-stack web application built using React.js, Node.js, Express.js, and MongoDB. The application allows users to create, view, update, delete, search, and filter personal tasks. Users can mark tasks as complete or incomplete, track active and completed tasks, and manage due dates through a modern, responsive user interface. Task data is stored in MongoDB for persistence and accessed through a RESTful API.

---

## Live Demo Links

Frontend: https://personal-task-tracker-sand.vercel.app/

Backend: https://your-backend-url.onrender.com

GitHub Repository: https://github.com/ravishkr7369/Personal_Task-Tracker

---

## Tech Stack

### Frontend

* React.js (Vite) – Fast development environment and component-based UI.
* Axios – HTTP client for API communication.
* CSS Modules – Scoped component styling.
* React Icons – Modern icon library.
* Framer Motion – Smooth animations and transitions.

### Backend

* Node.js – JavaScript runtime environment.
* Express.js – Backend framework for building REST APIs.
* MongoDB Atlas – Cloud database for persistent storage.
* Mongoose – ODM for MongoDB data modeling.

### Deployment

* Vercel – Frontend deployment.
* Render – Backend deployment.
* MongoDB Atlas – Database hosting.

---

## How to Run Locally

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/personal-task-manager.git

cd personal-task-manager
```

### 2. Setup Backend

```bash
cd backend

npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string
```

Start backend server:

```bash
npm run dev
```

Backend runs at:

```bash
http://localhost:5000
```

### 3. Setup Frontend

Open a new terminal:

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at:

```bash
http://localhost:5173
```

---

## API Documentation

### Get All Tasks

| Method | Endpoint   |
| ------ | ---------- |
| GET    | /api/tasks |

Response:

```json
[
  {
    "_id": "123456",
    "title": "Complete Assessment",
    "description": "Studio Graphene Task",
    "dueDate": "2026-06-05",
    "completed": false
  }
]
```

---

### Create Task

| Method | Endpoint   |
| ------ | ---------- |
| POST   | /api/tasks |

Request Body:

```json
{
  "title": "Complete Assessment",
  "description": "Studio Graphene Task",
  "dueDate": "2026-06-05"
}
```

Response:

```json
{
  "_id": "123456",
  "title": "Complete Assessment",
  "description": "Studio Graphene Task",
  "dueDate": "2026-06-05",
  "completed": false
}
```

---

### Update Task

| Method | Endpoint       |
| ------ | -------------- |
| PUT    | /api/tasks/:id |

Request Body:

```json
{
  "title": "Updated Task",
  "description": "Updated Description",
  "completed": true
}
```

Response:

```json
{
  "message": "Task Updated Successfully"
}
```

---

### Delete Task

| Method | Endpoint       |
| ------ | -------------- |
| DELETE | /api/tasks/:id |

Response:

```json
{
  "message": "Task Deleted Successfully"
}
```

---

## Project Structure

```bash
personal-task-manager/

├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   ├── TaskList.jsx
│   │   │   ├── FilterBar.jsx
│   │   │   └── DeleteModal.jsx
│   │   │
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   │
│   │   ├── services/
│   │   │   └── taskService.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── controllers/
│   │   └── taskController.js
│   │
│   ├── models/
│   │   └── Task.js
│   │
│   ├── routes/
│   │   └── taskRoutes.js
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── app.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## Next Steps

Given more time, I would implement the following improvements:

* User Authentication and Authorization (JWT)
* Task Categories and Priority Levels
* Drag-and-Drop Task Reordering
* Pagination for Large Task Lists
* Unit and Integration Testing using Jest
* Docker Configuration for Deployment
* Email Notifications for Upcoming Deadlines
* Dark/Light Theme Toggle
* Improved Accessibility and Keyboard Navigation
* CI/CD Pipeline using GitHub Actions

