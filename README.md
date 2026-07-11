# Customer Care Registry

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application developed to efficiently register, manage, and track customer complaints. The system provides a centralized platform for customers to submit issues, monitor complaint status, and manage their complaints through a secure authentication system.

## Project Overview

A Customer Care Registry is a centralized system that records and manages customer interactions, issues, and feedback. It enables businesses to streamline support processes, track customer inquiries, and maintain a structured record of complaints.

This application helps improve customer support by allowing users to:

- Register and securely log into the system
- Submit customer complaints
- View all submitted complaints
- Update complaint details
- Delete complaints
- Track complaint status
- View complaint statistics through an interactive dashboard
- Access a personalized user profile

By maintaining a structured complaint history, the system improves organization, enables better complaint tracking, and provides useful insights into customer issues.

---

## Features

### User Authentication
- User Registration
- Secure Login
- Password Encryption using bcrypt
- JWT Authentication
- Protected Routes

### Complaint Management
- Register New Complaint
- View Personal Complaints
- Update Existing Complaints
- Delete Complaints
- Complaint Status Tracking

### Dashboard
- Total Complaints
- Pending Complaints
- In Progress Complaints
- Resolved Complaints

### User Profile
- View User Details
- Member Since Information
- Complaint Statistics

### Search & Filter
- Search complaints by title
- Filter complaints based on status

---

## Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- React Icons
- CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Authentication
- JSON Web Token (JWT)
- bcrypt.js

---

## Project Structure

```
Customer-Care
│
├── client
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── assets
│   ├── package.json
│
├── Server
│   ├── controllers
│   ├── database
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/your-username/Customer-Care.git
```

### Backend Setup

```bash
cd Server
npm install
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the **Server** folder.

```
PORT=5000

MONGO_URI=Your_MongoDB_Connection_String

JWT_SECRET=Your_JWT_Secret
```

---

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register User |
| POST | `/api/auth/login` | Login User |
| GET | `/api/auth/profile` | Get User Profile |

### Complaints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/complaints` | Add Complaint |
| GET | `/api/complaints` | Get User Complaints |
| PUT | `/api/complaints/:id` | Update Complaint |
| DELETE | `/api/complaints/:id` | Delete Complaint |

### Dashboard

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/dashboard` | Dashboard Statistics |

---

## Future Enhancements

- Admin Dashboard
- Assign Complaints to Support Staff
- Email Notifications
- Complaint Priority Levels
- File Upload Support
- Analytics & Reports
- Real-time Notifications
- Customer Feedback & Ratings

---

## Learning Outcomes

This project demonstrates practical implementation of:

- MERN Stack Development
- RESTful API Development
- JWT Authentication
- CRUD Operations
- MongoDB Integration
- React Routing
- Protected Routes
- Axios API Integration
- State Management using React Hooks
- Secure Password Hashing
- Responsive User Interface Design
