# 🚀 QuickChat

**QuickChat** is a real-time chat application featuring **image steganography**, built with the **MERN stack** and **Socket.IO** for seamless communication.  
It allows users to exchange text and image messages instantly — with support for hiding secret messages inside images using steganography.

---

## 🧠 Tech Stack

- **Frontend:** React  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Atlas)  
- **Real-time:** Socket.IO (WebSockets)  
- **Image Uploads:** Multer + Cloudinary  
- **Other:** Docker, Optimistic UI Rendering, Message Queue System  

---

## ⚙️ Project Flow

### 🧩 Authentication
Users must first sign up or log in using JWT-based authentication.  
Once authenticated, users can send and receive real-time messages.

---

### 💬 Messaging Logic

- **Text messages** are sent and received instantly using WebSockets.  
- **Image messages** take longer to upload — so a **message queue** ensures smooth UX.  
- **Optimistic rendering** updates the chat instantly while the message uploads in the background.

---

### 🖼️ Image Upload Workflow

1. User uploads an image — it appears **instantly** in the UI using **optimistic rendering**.  
2. Image is sent to the backend using **Multer** and temporarily stored in the backend folder.  
3. Backend uploads the image to **Cloudinary**.  
4. After successful upload, the **local image is deleted**, and the **Cloudinary URL** is saved to the database.  

---

### 🔐 Steganography Feature

Hide secret messages inside images using a custom key! 🕵️‍♂️  

**To encode a message:**

1. Select an image.  
2. In the message box, type the following format:  @stego&key=yourkey&text=your_hidden_message
3. Click **Send** — the image will be encoded with the hidden text and sent like a normal message.

**To decode a message:**

1. Download the image.  
2. Click the **Decode** button in the navbar.  
3. Upload the encoded image and enter the same key.  
4. The hidden message will be revealed! 🔓

---

## 🧾 API Endpoints

### 🔑 Auth Routes

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST   | `/api/auth/login` | Log in existing user |
| POST   | `/api/auth/signup` | Register new user |
| GET    | `/api/auth/logout` | Log out user |
| GET    | `/api/auth/check-auth` | Verify authentication |
| PUT    | `/api/auth/update-profile` | Update user profile picture |

### 💬 Message Routes

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET    | `/api/message/users` | Get all users |
| GET    | `/api/message/:id` | Get all messages of a specific user |
| POST   | `/api/message/send/:id` | Send message to a specific user |

---

## 🔧 Environment Variables

Create a `.env` file in the **backend** directory and configure the following:

```bash
PORT=3000
MONGODB_URL=your_mongodb_atlas_url
SECRET=your_jwt_secret
ENV=development
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret


🧑‍💻 Running Locally (Without Docker)
1️⃣ Clone the repository
git clone https://github.com/anthonyanup21/quickchat.git
cd quickchat

2️⃣ Run the Backend
cd backend
npm install
npm run dev

3️⃣ Run the Frontend
cd ../frontend
npm install
npm run dev


The app should now be running locally — usually at:

Frontend: http://localhost:5173

Backend: http://localhost:3000

🐳 Running Locally with Docker
🧰 Prerequisites

Docker Desktop
 installed and running

Update the environment variables in the DockerCompose.yml file with your credentials (MongoDB, Cloudinary, JWT secret, etc.)

Example in DockerCompose.yml:

environment:
  - PORT=3000
  - MONGODB_URL=your_mongodb_atlas_connection_url
  - SECRET=your_jwt_secret
  - ENV=development
  - CLOUDINARY_CLOUD_NAME=your_cloud_name
  - CLOUDINARY_API_KEY=your_cloudinary_api_key
  - CLOUDINARY_API_SECRET=your_cloudinary_api_secret


🚀 Steps to Run

cd quickchat
docker compose -f DockerCompose.yml up -d

This will build and start both frontend and backend containers automatically.

Frontend: http://localhost:5173

Backend: http://localhost:3000


🛑 To Stop the Containers
docker compose down


 
