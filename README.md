# Image uploading website

This documentation provides an overview of a full-stack project built using React for the client-side and Node.js for the server-side. The project allows users to register and upload images, view registered users' data, and delete user records. Below are the key components and their functionalities.

## Client-Side (React)

### App.js
This component serves as the main entry point for the React application. It sets up the routing using `react-router-dom` to navigate between different pages/components. The `Header` and `Home` components are rendered based on the defined routes.

### Header.js
The `Header` component represents the navigation bar at the top of the application. It uses `react-bootstrap` components to create a responsive and stylized navigation menu.

### Home.js
The `Home` component displays a list of registered users and their associated data, including their username, registration date, and uploaded image. It fetches user data from the server using Axios and renders it dynamically. Users can delete individual records by clicking on the "Delete" button.

### Register.js
The `Register` component allows users to register by entering their username and uploading an image file. Upon submission, the data is sent to the server using Axios and stored in the MySQL database.

## Server-Side (Node.js)

### app.js
The `app.js` file is the entry point for the server-side code. It initializes the Express server, establishes a database connection, and defines necessary middleware. It also sets up routing by using the defined `router.js` file.

### router.js
The `router.js` file defines the server's API routes and their corresponding functionalities using Express Router. It handles HTTP requests for registering new users, retrieving user data, and deleting user records. It utilizes `multer` for handling image file uploads and `moment` for managing dates.

### db/connection.js
The `connection.js` file establishes a connection with the MySQL database using the `mysql2` library. It uses the connection details from environment variables (`.env` file) for enhanced security. The file exports the created connection instance to be used in other modules.

## Additional Dependencies

- `react-router-dom`: A routing library for React applications.
- `axios`: A promise-based HTTP client used for making requests from the client-side to the server-side.
- `react-bootstrap`: A UI component library for styling the React application.
- `multer`: A middleware for handling file uploads in Node.js.
- `moment`: A JavaScript library for parsing, validating, manipulating, and displaying dates.

## Prerequisites

To run the project locally, make sure you have the following software and dependencies installed:

- Node.js
- MySQL database

## Getting Started

1. Clone the project repository.
2. In the root directory, run `npm install` to install the required dependencies for both the client and server.
3. Create a `.env` file in the server directory and provide the necessary environment variables for the database connection (e.g., `USERS`, `HOST`, `PASSWORD`, `DATABASE`).
4. Start the server by running `npm start` in the server directory.
5. In a separate terminal, navigate to the client directory and start the React development server by running `npm start`.
6. Access the application in your web browser at `http://localhost:3000`.

## Conclusion

This React and Node full-stack project allows users to register, upload images, view registered user data, and delete user records. The React client-side interacts with the Node.js server-side, which utilizes MySQL for data storage. The provided code includes components for navigation, user registration, data fetching, and deletion. Feel

 free to explore and extend the project based on your requirements.

Please note that this documentation provides a high-level overview of the project structure and functionality. For detailed implementation and customization, refer to the provided code files.


