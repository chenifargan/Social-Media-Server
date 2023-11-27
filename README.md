
# Full-Stack Social Media Platform

## Overview

This Full-Stack Social Media Platform is a comprehensive application built to facilitate seamless social interaction and content sharing among users. Leveraging cutting-edge technologies such as ReactJS, NodeJS with ExpressJS, Sequelize ORM, and MySQL, our platform offers a feature-rich experience.

## Key Features

### User Authentication and Profiles

- Secure user authentication system with login and password change functionalities.
- Personalized user profiles displaying relevant information and settings.

### Content Creation and Management

- Intuitive interfaces for creating and managing posts, including options to delete, like, and comment.
- Seamless post creation and deletion, ensuring a smooth content management experience.

### Interactive Features

- Real-time comment creation and deletion, enabling dynamic interactions between users.
- Like and unlike functionality for posts, fostering user engagement and feedback.

### Robust Backend and Database Integration

- Utilizes NodeJS and ExpressJS for a robust backend structure, ensuring reliability and scalability.
- Integration with MySQL database using Sequelize ORM for efficient data management.

## Technologies Used

- **Frontend:** ReactJS for a dynamic and responsive user interface.
- **Backend:** NodeJS with ExpressJS for handling server-side operations and API requests.
- **Database:** MySQL database for storing user data, posts, comments, and other content.
- **ORM:** Sequelize utilized as the Object-Relational Mapping tool for interacting with the MySQL database.

## Purpose

Our Full-Stack Social Media Platform aims to provide a seamless and engaging social experience for users. It emphasizes ease of use, robust functionality, and a modern interface to encourage interaction, content creation, and community engagement.

## Future Enhancements

Continual improvements and enhancements are planned for the platform, including additional features such as direct messaging, content discovery algorithms, enhanced user profiles, and more interactive elements to elevate the social experience.


## Setting Up the Database

Follow these steps to configure the database connection and create a schema.

---

### Step 1: Configure Database Connection

1. **Locate the `config.json` file within the server directory.**

2. **Open `config.json` using a text editor.**

3. **Find the field named `"password"` or similar and enter your SQL database password within the quotation marks. Save the changes.**

---

### Step 2: Creating a Schema in SQL

1. **Access your SQL database management tool or command-line interface.**

2. **Use the appropriate command or interface to create a new database/schema.**

   - Using SQL command: `CREATE DATABASE mydatabase;`

   - Alternatively, use your SQL client's GUI to create a new schema.

   > **Note:** Make sure the database/schema name in the `config.json` matches the one you created.

---

### Step 3: Running the Server

1. **Navigate to the server directory in your terminal.**

2. **Install dependencies if needed: `npm install`.**

3. **Start the server: `npm start` or `node server.js`.**
