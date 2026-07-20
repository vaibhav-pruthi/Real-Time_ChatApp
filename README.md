# 🧠 Real-Time Messaging Application
The Real-Time Messaging Application is a full-stack project that enables users to send and receive messages in real-time. It features a robust backend with Express.js, MongoDB, and Socket.IO, and a responsive frontend built with React, Zustand, and Vite. The application provides a seamless user experience, allowing users to register, login, and engage in conversations with other users.

## 🚀 Features
* User registration and login functionality
* Real-time messaging between users
* Conversation management with message history
* User authentication and authorization
* Responsive and intuitive user interface
* Robust backend with Express.js and MongoDB
* Real-time communication with Socket.IO

## 🛠️ Tech Stack
* Frontend:
	+ React
	+ Zustand
	+ Vite
	+ Socket.IO-client
* Backend:
	+ Express.js
	+ MongoDB
	+ Mongoose
	+ Socket.IO
	+ Bcryptjs
	+ Jsonwebtoken
* Dependencies:
	+ react-router-dom
	+ js-cookie
	+ cors
	+ cookie-parser
	+ @vitejs/plugin-react

## 📦 Installation
To get started with the project, follow these steps:
1. Clone the repository: `git clone https://github.com/your-repo/real-time-messaging-app.git`
2. Install dependencies: `npm install` or `yarn install`
3. Start the backend server: `npm run start:backend` or `yarn start:backend`
4. Start the frontend development server: `npm run start:frontend` or `yarn start:frontend`

## 💻 Usage
1. Register a new user by visiting `http://localhost:3001` and filling out the registration form.
2. Login to the application using the registered credentials.
3. Start a conversation with another user by clicking on their name in the user list.
4. Send and receive messages in real-time.

## 📂 Project Structure
```markdown
.
├── Backend
│   ├── index.js
│   ├── models
│   │   ├── conversation.model.js
│   │   ├── message.model.js
│   │   └── user.model.js
│   ├── routes
│   │   ├── message.route.js
│   │   └── user.route.js
│   ├── controllers
│   │   ├── message.controller.js
│   │   └── user.controller.js
│   └── SocketIO
│       └── server.js
├── Frontend
│   ├── public
│   ├── src
│   │   ├── App.jsx
│   │   ├── context
│   │   │   ├── AuthProvider.jsx
│   │   │   └── SocketContext.jsx
│   │   ├── components
│   │   │   ├── Conversation.jsx
│   │   │   ├── Message.jsx
│   │   │   └── User.jsx
│   │   ├── hooks
│   │   │   └── useConversation.js
│   │   └── main.jsx
│   └── vite.config.js
└── package.json
```



## 🤝 Contributing
Contributions are welcome! If you'd like to contribute to the project, please fork the repository and submit a pull request.

