# Zerodha Clone

A learning project inspired by the Zerodha trading platform, built while exploring React.js and the MERN stack.

The main focus of this project was frontend development, particularly understanding React components, props, state management, routing, and building reusable UI components.

## About the Project

This project recreates selected parts of the Zerodha website for educational purposes.

It consists of three separate parts:

- **Frontend:** A React-based landing page inspired by the Zerodha website.
- **Dashboard:** A separate React application featuring a trading dashboard interface.
- **Backend:** A basic Node.js and Express.js application connected to MongoDB, primarily supporting the dashboard.

The landing page and dashboard are independent applications with separate URLs. The backend is used for the dashboard, not the landing page.

## Tech Stack

**Frontend**
- React.js
- JavaScript
- HTML5
- CSS3
- Bootstrap
- Font Awesome

**Dashboard**
- React.js
- React Router
- Bootstrap
- JavaScript

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose

**Tools**
- Visual Studio Code
- Git & GitHub
- Postman

## Project Structure

```text
ZERODHA-CLONE/
│
├── frontend/       # Landing page (React)
│
├── dashboard/      # Trading dashboard (React)
│
├── backend/        # Backend APIs (Node.js & Express)
│
└── .gitignore
```

## Features

### Landing Page
- Zerodha-inspired website layout
- Reusable React components
- Navigation bar and footer
- Responsive UI elements

### Dashboard
- Dashboard layout and navigation
- Holdings section
- Positions section
- Orders section
- Funds section
- Reusable React components
- Basic integration with the backend

### Backend
- Express.js server
- MongoDB database connection
- Mongoose schemas and models
- Basic API endpoints for dashboard data

## Learning Objectives

This project helped me understand and practise:

- React functional components
- Props and component reusability
- React Hooks and state management
- React Router
- Component-based UI development
- Basic REST API development
- MongoDB and Mongoose
- Frontend and backend communication
- Git and GitHub workflows

## Project Limitations

This is an educational project and not a production-ready trading platform.

- The landing page and dashboard are separate applications.
- Backend functionality is basic and primarily supports the dashboard.
- User authentication and authorization (login/signup) are not implemented.
- It does not provide real-time stock market data or actual trading functionality.

## Learning Resources & Acknowledgement

This project was developed as part of my learning journey through online tutorials, documentation, and other learning resources.

The project takes inspiration from the Zerodha platform and educational coding resources. It is intended for learning and practice purposes only.

## Disclaimer

This project is not affiliated with, endorsed by, or associated with Zerodha. It is created solely for educational purposes.