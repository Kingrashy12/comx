# Project Name

## 🚀 Frontend Tech

### 🛠 Tech Stack

- **Next.js** - React framework for SSR & SSG
- **Tailwind CSS** - Utility-first CSS framework
- **Zod** - Schema validation for TypeScript

## 🔧 Backend Tech

### 🛠 Tech Stack

- **Express.js** - Fast, minimalist web framework for Node.js
- **Nexu.js** - A scalable backend library built on top of Express.js.
- **PostgreSQL** - Relational database system
- **Nodemailer** - Email sending library
- **JWT** - JSON Web Token for authentication

## 🛠 **Setup & Running Locally**

### 🔹 Frontend

To run the frontend:

1️⃣ Navigate to the frontend directory

```bash
cd frontend
```

2️⃣ Install dependencies

```bash
npm install
```

3️⃣ Run the development server

```bash
npm run dev
```

Frontend will be available at:

```arduino
http://localhost:3000
```

🔹 Backend
To run the backend:

1️⃣ Navigate to the backend directory

```bash
cd backend
```

2️⃣ Install dependencies

```bash
npm install
```

3️⃣ Generate the `.env` file with required keys

```bash
npx nexujs-cli mk env
```

⚠️ **Important**: The generated .env file will not include the following required variables. You must add them manually:

```bash
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

4️⃣ Run the backend server

```bash
npm run dev
```

Backend API will be available at:

```arduino
http://localhost:5000
```

## 🔥 API Routes

Since the backend uses **file-based routing**, here are the available API endpoints:

### 🔑 Auth Routes

- `POST /auth/register` → Register a new user
- `POST /auth/login` → Login user
- `POST /auth/reset-password` → Request password reset
- `POST /auth/reset-password/new-password` → Update password

### 🔢 OTP Routes

- `POST /otp/send` → Send OTP verification
- `PATCH /otp/verify` → Verify OTP
