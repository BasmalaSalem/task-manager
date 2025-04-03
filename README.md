# Task Manager Application

A full-stack task management application with user authentication, built with Quasar (Vue.js) frontend and Node.js/Express backend.

## Features

**Frontend:**

- User authentication (Register/Login)
- Create, view, and delete tasks
- Responsive UI with Quasar components
- JWT-based session management
- Protected routes and navigation guards

**Backend:**

- REST API with Express.js
- JWT authentication middleware
- MySQL database integration
- Sequelize ORM for data modeling
- Error handling and validation
- Swagger API documentation

## Technologies

**Frontend:**

- Quasar Framework (Vue 3)
- Pinia (State Management)
- Axios (HTTP Client)
- Vue Router

**Backend:**

- Node.js
- Express.js
- Sequelize (ORM)
- MySQL
- JSON Web Tokens (JWT)
- Swagger UI

## Prerequisites

- Node.js v18+
- MySQL 8+
- Quasar CLI (`npm install -g @quasar/cli`)

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager

```

### 2. Backend Setup

cd server
npm install

# Create .env file

cp .env.example .env

# Configure .env with your MySQL credentials:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=task_manager
JWT_SECRET=your_secret_key

# Initialize database:

mysql -u root -p
CREATE DATABASE task_manager;
CREATE USER 'task_user'@'localhost' IDENTIFIED BY 'secure_password';
GRANT ALL PRIVILEGES ON task_manager.\* TO 'task_user'@'localhost';
FLUSH PRIVILEGES;

### 3. Frontend Setup

cd ../client
npm install

### Running the Application

# Backend:

cd server
npm run dev

# Frontend:

cd client
quasar dev
