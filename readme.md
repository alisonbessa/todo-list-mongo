# Todo List API with MongoDB and Mongoose

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/node.js-%3E%3D14.0.0-brightgreen.svg)
![Express](https://img.shields.io/badge/express-%5E4.17.1-yellow.svg)
![MongoDB](https://img.shields.io/badge/mongodb-%5E4.4.0-green.svg)
![Mongoose](https://img.shields.io/badge/mongoose-%5E6.0.0-orange.svg)

<details>
<summary>Table of Contents</summary>

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
  - [Endpoints](#endpoints)
    - [Create a Task](#create-a-task)
    - [Get All Tasks](#get-all-tasks)
    - [Get Task by ID](#get-task-by-id)
    - [Update a Task](#update-a-task)
    - [Toggle Task Completion](#toggle-task-completion)
    - [Delete a Task](#delete-a-task)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Future Features](#future-features)
- [License](#license)
- [Contact](#contact)

</details>

<details>
<summary>Introduction</summary>

Welcome to the **Todo List API**, a backend application built with **Node.js**, **Express**, **MongoDB**, and **Mongoose**. This API allows users to create, read, update, delete, and toggle the completion status of tasks, enabling efficient task management.

</details>

<details>
<summary>Features</summary>

- **Create Tasks:** Add new tasks with a title and description.
- **Read Tasks:** Retrieve all tasks or a specific task by ID.
- **Update Tasks:** Modify existing tasks' details.
- **Delete Tasks:** Remove tasks from the database.
- **Toggle Completion:** Easily mark tasks as completed or incomplete.
- **Error Handling:** Comprehensive error handling and validation.
- **Environment Configuration:** Secure configuration using environment variables.

</details>

</br>
<summary>Getting Started</summary>

Follow these instructions to set up and run the project on your local machine.

<details>
<summary>Prerequisites</summary>

Ensure you have the following installed:

- **[Node.js](https://nodejs.org/en/)** (v14 or higher)
- **[npm](https://www.npmjs.com/)** (comes with Node.js)
- **[MongoDB](https://www.mongodb.com/)** (local installation or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

</details>

<details>
<summary>Installation</summary>

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/todo-list-mongo.git
   cd todo-list-mongo
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

</details>

<details>
<summary>Environment Variables</summary>

Create a `.env` file in the root directory and add the following variables:

```env
PORT=3333
MONGO_URI=mongodb+srv://<DB_USER>:<DB_PASS>@cluster0.mongodb.net/<DB_NAME>?retryWrites=true&w=majority
```

- **PORT:** (Optional) The port number on which the server will run. Defaults to `3333` if not specified.
- **MONGO_URI:** Your MongoDB connection string. Replace `<DB_USER>`, `<DB_PASS>`, and `<DB_NAME>` with your MongoDB credentials and database name.

</details>

<details>
<summary>Running the Application</summary>

1. **Start MongoDB**

   - **Local MongoDB:** Ensure your MongoDB server is running.
   - **MongoDB Atlas:** Ensure your cluster is active and accessible.

2. **Start the Server**

   ```bash
   npm run start
   ```

   **Output:**

   ```
   Connecting to MongoDB with URI: mongodb+srv://<DB_USER>:<DB_PASS>@cluster0.mongodb.net/<DB_NAME>?retryWrites=true&w=majority
   Connected to MongoDB
   Server is running on port 3333
   ```

</details>

</details>

<details>
<summary>API Documentation</summary>

<details>
<summary>Endpoints</summary>

<details>
<summary>Create a Task</summary>

- **URL:** `/tasks`
- **Method:** `POST`
- **Description:** Create a new task.
- **Request Body:**
  ```json
  {
    "title": "Task Title",
    "description": "Task Description"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "task_id",
    "title": "Task Title",
    "description": "Task Description",
    "completed": false,
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
  ```

</details>

<details>
<summary>Get All Tasks</summary>

- **URL:** `/tasks`
- **Method:** `GET`
- **Description:** Retrieve all tasks.
- **Response:**
  ```json
  [
    {
      "_id": "task_id",
      "title": "Task Title",
      "description": "Task Description",
      "completed": false,
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    },
    ...
  ]
  ```

</details>

<details>
<summary>Get Task by ID</summary>

- **URL:** `/tasks/:id`
- **Method:** `GET`
- **Description:** Retrieve a task by its ID.
- **Response:**
  ```json
  {
    "_id": "task_id",
    "title": "Task Title",
    "description": "Task Description",
    "completed": false,
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
  ```

</details>

<details>
<summary>Update a Task</summary>

- **URL:** `/tasks/:id`
- **Method:** `PUT`
- **Description:** Update a task's details.
- **Request Body:**
  ```json
  {
    "title": "Updated Title",
    "description": "Updated Description"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "task_id",
    "title": "Updated Title",
    "description": "Updated Description",
    "completed": false,
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
  ```

</details>

<details>
<summary>Toggle Task Completion</summary>

- **URL:** `/tasks/:id/toggle`
- **Method:** `PATCH`
- **Description:** Toggle the completion status of a task.
- **Response:**
  ```json
  {
    "_id": "task_id",
    "title": "Task Title",
    "description": "Task Description",
    "completed": true,
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
  ```

</details>

<details>
<summary>Delete a Task</summary>

- **URL:** `/tasks/:id`
- **Method:** `DELETE`
- **Description:** Delete a task by its ID.
- **Response:**
  ```json
  {
    "message": "Task deleted successfully"
  }
  ```

</details>

</details>

</details>

<details>
<summary>Future Features</summary>

- **User Authentication:** Implement user registration and login functionality with JWT authentication.
- **Task Prioritization:** Add the ability to set priority levels for tasks (e.g., low, medium, high).
- **Due Dates:** Allow users to set due dates for tasks and send reminders.
- **Subtasks:** Enable users to create and manage subtasks within a main task.
- **Task Categories:** Introduce categories or tags for better task organization.
- **Search Functionality:** Implement a search feature to find tasks by title or description.
- **Recurring Tasks:** Allow users to create tasks that repeat at specified intervals.
- **File Attachments:** Enable users to attach files or images to tasks.
- **Collaborative Tasks:** Allow multiple users to collaborate on tasks.
- **Activity Log:** Maintain a log of all actions performed on tasks for auditing purposes.
- **Mobile App:** Develop a mobile application to manage tasks on the go.
- **Dark Mode:** Provide a dark mode option for the user interface.

</details>

<details>
<summary>Contact</summary>

- **Author:** Alison Bessa
- **Email:** alisonbessa@example.com
- **LinkedIn:** [linkedin.com/in/alisonbessa](https://linkedin.com/in/alisonbessa)
- **GitHub:** [github.com/alisonbessa](https://github.com/alisonbessa)

</details>
