# Task Manager REST API

![Task Manager Logo](https://github.com/sankytech12/Task-Manager-REST-API/blob/main/public/images/logo.png)

The Task Manager REST API is a powerful tool for managing tasks and to-do lists. This API allows you to create, read, update, and delete tasks, making it an essential component for any task management application. Whether you're building a personal task manager or integrating task management features into your application, this API has you covered.

**Table of Contents**
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Task Management**: Create, read, update, and delete tasks with ease.

- **User Authentication**: Secure endpoints with user authentication and authorization.

- **Task Categories**: Organize tasks into categories or tags for better organization.

- **Priority Levels**: Assign priority levels to tasks for effective task management.

- **Task Filtering**: Filter tasks based on various criteria, such as due date, status, and priority.

- **User-Friendly API**: Well-documented API with clear endpoints and response formats.

- **Customization**: Extend the API to suit your specific task management needs.

## API Endpoints

The Task Manager REST API provides the following endpoints:

- `POST /users`: Create a new user account.

- `POST /users/login`: Log in to an existing user account.

- `POST /users/logout`: Log out of the user account.

- `POST /users/logoutAll`: Log out of all active sessions.

- `GET /users/me`: Retrieve the user's profile.

- `PATCH /users/me`: Update the user's profile.

- `DELETE /users/me`: Delete the user's account.

- `POST /tasks`: Create a new task.

- `GET /tasks`: Retrieve all tasks.

- `GET /tasks/:id`: Retrieve a specific task by ID.

- `PATCH /tasks/:id`: Update a specific task by ID.

- `DELETE /tasks/:id`: Delete a specific task by ID.

- `GET /tasks/categories`: Retrieve all task categories.

- `GET /tasks/priorities`: Retrieve all task priorities.

- `GET /tasks/statuses`: Retrieve all task statuses.

- `GET /tasks/filter`: Filter tasks based on various criteria.

## Technologies

- **Node.js**: Server runtime environment.

- **Express.js**: Web framework for building RESTful APIs.

- **MongoDB**: NoSQL database for storing task data.

- **Mongoose**: ODM (Object-Document Mapping) for MongoDB.

- **JWT (JSON Web Tokens)**: For user authentication and authorization.

- **Swagger**: Documentation for API endpoints.

- **Postman**: Testing and exploring API endpoints.

## Installation

To set up the Task Manager REST API locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/sankytech12/Task-Manager-REST-API.git
