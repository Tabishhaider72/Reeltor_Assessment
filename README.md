# User Management System (Backend)

![Node.js](https://img.shields.io/badge/Node.js-v18.x-green)
![Express.js](https://img.shields.io/badge/Express.js-v4.x-blue)
![Firebase](https://img.shields.io/badge/Firebase-v9.x-orange)
![JWT](https://img.shields.io/badge/JWT-Authentication-yellow)

A robust backend application for managing users, authentication, and notifications using **Node.js**, **Express.js**, and **Firebase Firestore**. This project demonstrates clean code architecture, RESTful API design, and secure authentication using JWT.

---

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Setup Instructions](#setup-instructions)
4. [API Documentation](#api-documentation)
5. [Environment Variables](#environment-variables)
6. [Testing](#testing)
7. [Contributing](#contributing)
8. [License](#license)

---

## Features

- **User Authentication**:
  - Register new users.
  - Login with JWT-based authentication.
- **User Management**:
  - Fetch user profile.
  - Update user profile.
- **Notifications**:
  - Send notifications to multiple users.
  - Admin notifications with critical flags.
- **Security**:
  - Password hashing using bcrypt.
  - JWT-based authorization middleware.
- **Scalable Architecture**:
  - Modular code structure with separate controllers, models, and routes.
  - Firebase Firestore for database operations.

---

## Technologies Used

- **Backend**:
  - Node.js
  - Express.js
- **Database**:
  - Firebase Firestore
- **Authentication**:
  - JSON Web Tokens (JWT)
  - bcrypt for password hashing
- **Tools**:
  - Postman (API testing)
  - dotenv (environment variables)

---

## Setup Instructions

### Prerequisites

- Node.js (v18.x or higher)
- Firebase project with Firestore enabled
- Postman (for API testing)

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/user-management-system.git
   cd user-management-system/backend
