# React + TypeScript + Vite

# Areeb Event Booking Frontend 🎨

This is the frontend part of the Areeb Event Booking System. It was built using React + Vite + TypeScript, and styled with Tailwind CSS. The frontend allows users to browse, book events, and manage bookings — while providing an admin panel for event management.

---

## ✨ Features

- 🔐 User Authentication: Register and login functionality.
- 🏠 Event Listings: Displays all events in a responsive grid layout.
  - If the user already booked the event, a "Booked" label is shown instead of the "Book Now" button.

- 📄 Event Details Page:
  - Shows event name, description, date, time, category, venue, image, and price.
  - User can adjust quantity of tickets.
  - Upon booking, user is redirected to a "Congratulations" page. (go to cart and click confirm purchase)

- 🧾 Admin Panel:
  - Role-based access (Admin/User)
  - Protected Routes — only Admin can access the Admin Panel
  - Full CRUD for managing events

- 🖼 Image Upload: Admins can upload event images during creation or editing.
- 🏷 Event Categories: Events are categorized for better filtering and organization.
- 💤 Lazy Loading: Implemented for key pages and components to enhance performance.
- 🌙 Dark Mode Support
- 🌍 Multi-language Support: English and Spanish using i18next.
- 📱 Responsive Design: Fully responsive across mobile screens & desktop.

---

## 🌐 Live Demo

The frontend is deployed on Vercel.

🔗 Live Demo: [https://areeb-event-booking-frontend.vercel.app/] 

---

## 🧠 Planning & Design

- ✅ UI/UX Design: Custom-built UI designed from scratch.  
  [Design Link –  https://www.figma.com/design/3zpt4oK5HYUPNUfJIM90sL/Areeb-compitition?node-id=0-1&p=f&t=nEpzN1r5lEfk6EOK-0  ]
- ✅ User Flow: Mapped and finalized before implementation. ( The User flow is Attached in the same Figma design file )
- ✅ Architecture: Modular design with reusable components and clear folder structure.

---

## 🧰 Tech Stack

| Tool             | Description                            |
|------------------|----------------------------------------|
| React + Vite     | Modern web app setup with fast builds  |
| TypeScript       | Type-safe development                  |
| Redux Toolkit    | Local state management                 |
| React Query      | Remote server-state management         |
| Tailwind CSS     | Utility-first CSS for fast styling     |
| i18next          | Internationalization (i18n)            |
| React Router     | Routing system                         |
| Vercel           | Deployment platform                    |

---

##🤖

| AI Tool        | Usage                                        |
| -------------- | -------------------------------------------- |
| ChatGPT        | Logic planning, validation, guard setup      |
| Cursor IDE     | Inline AI coding and cleanup                 |
| Grok           | Refactoring and on-the-fly code assistance   |
| DeepSeek       | Best-practice implementation and suggestions |


---


