# MERN Image Gallery

This MERN (MongoDB, Express.js, React, Node.js) application is a feature-rich image gallery with user authentication, cloud image upload, image views tracking, and Redux integration.

## Tasks Implemented

1. **User Authentication:**
   - Users can register and log in securely using session management.

2. **Image Upload Functionality:**
   - Utilizes React JS for a seamless image upload experience.
   - Users can add image titles and descriptions.

3. **Cloud Integration for Image Storage:**
   - Implemented API for uploading images to a cloud service (e.g., AWS/Cloudinary).

4. **Image Display:**
   - Created an API to fetch and display uploaded images at the frontend.

5. **Image Views Tracking:**
   - Developed an API to save and display the number of times an image has been viewed.

6. **Redux Integration:**
   - Connected the app with Redux to manage state, particularly for reading image files.

7. **Deployment:**
   - Deployed the application on Heroku with a dummy domain.

## Project Structure

- `/server`: Backend files, including models, routes, and server setup.
- `/client`: Frontend React app with components, actions, and reducers.
- `/models`: MongoDB model definitions.
- `/routes`: Express.js route handlers.
- `/uploads`: Folder for storing uploaded images.

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/alikeayush/mern-project.git
   

1. Setup and Run
   cd mern-project/server
   npm install
   npm startcd mern-projecty/client
   npm install
   npm start

