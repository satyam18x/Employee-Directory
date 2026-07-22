# Employee Directory

A simple Employee Directory web application built using **React.js**, **Node.js**, **Express.js**, and **Tailwind CSS**. This project allows users to manage employee records with basic CRUD (Create, Read, Update, Delete) operations and search functionality.

## Features

- View all employees
- Add a new employee
- Edit existing employee details
- Delete an employee
- Search employees by name
- Responsive user interface
- Data stored in a local JSON file

## Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- CORS
- File System (JSON Storage)

## Project Structure

```
EmployeeDirectory/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── data/
│   │   └── Employees.json
│   ├── app.js
│   └── package.json
│
└── README.md
```

## Installation

### Clone the Repository

```bash
git clone https://github.com/satyam18x/Employee-Directory.git
```

Move into the project directory

```bash
cd Employee-Directory
```

---

## Frontend Setup

Navigate to the client folder

```bash
cd client
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## Backend Setup

Open another terminal.

Navigate to the server folder

```bash
cd server
```

Install dependencies

```bash
npm install
```

Start the backend server

```bash
node app.js
```

Backend runs at:

```
http://localhost:5000
```

---

## API Endpoints

### Get All Employees

```
GET /employees
```

### Add Employee

```
POST /employees
```

### Update Employee

```
PUT /employees/:id
```

### Delete Employee

```
DELETE /employees/:id
```

---

## Application Workflow

1. View all employee records.
2. Search employees by name.
3. Click **Add Employee** to add a new employee.
4. Click **Edit** to update employee details.
5. Click **Delete** to remove an employee.
6. Employee data is stored in the `Employees.json` file.
