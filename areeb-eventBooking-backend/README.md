<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Areeb Event Booking Backend 🔧

This is the backend service for the Areeb Event Booking System, built using **NestJS with TypeScript**, connected to **MongoDB Atlas**, and deployed on **Vercel**. It powers the authentication, event management, booking logic, role-based access, and image handling.

---

## ✨ Features

- 🔐 **Authentication & Authorization**
  - Secure user registration and login
  - Role-based access control (User, Admin)
  - JWT-based protected routes

- 📅 **Event Management**
  - Admins can create, update, delete, and list events
  - Users can view and book events
  - Supports categorization and detailed descriptions

- 🎟️ **Booking System**
  - Users can book events with quantity selection
  - Returns confirmation upon success

- 🖼️ **Image Uploading**
  - Cloudinary integration for image hosting
  - Admins can upload event images during creation or update

- 🧾 **Validation**
  - Comprehensive DTO validation using class-validator

- ☁️ **Cloud Deployment**
  - MongoDB hosted on **MongoDB Atlas**
  - Backend API deployed on **Vercel**
- ✖️ secure sensitive data using .env file 
---

## 🌐 API Base URL

🔗 https://areeb-event-booking-backend.vercel.app/  

---

## 📦 Tech Stack

| Tool             | Description                            |
|------------------|----------------------------------------|
| **NestJS**       | Scalable Node.js backend framework     |
| **TypeScript**   | Strict typing and developer tooling    |
| **MongoDB Atlas**| Cloud database for event & user data   |
| **Cloudinary**   | Media (image) management & delivery    |
| **JWT**          | Secure token-based authentication      |
| **Vercel**       | Serverless deployment                  |

---


| AI Tool            | Usage                                        |
| ------------------ | -------------------------------------------- |
| **ChatGPT**        | Logic planning, validation, guard setup      |
| **Cursor IDE**     | Inline AI coding and cleanup                 |
| **Grok**           | Refactoring and on-the-fly code assistance   |
| **DeepSeek**       | Best-practice implementation and suggestions |


## 🛠 Setup & Run Locally

### 1️⃣ Clone & Install

```bash
cd areeb-backend
npm install

