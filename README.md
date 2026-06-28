# AgroVision AI

AgroVision AI is an AI-powered smart agriculture platform that helps farmers monitor crop health, detect crop-related issues, and make better farming decisions using modern web technologies.

## Project Tech Stack

### Frontend

* React JS
* Vite
* Tailwind CSS
* React Router DOM

### Backend

* Python
* FastAPI
* Uvicorn
* Python Dotenv

## Project Structure

```text
AgroVisionAI/
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   ├── .env.example
│   └── venv/
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
├── README.md
└── .gitignore
```

## Frontend Features

* Home page
* About page
* Dashboard page
* Login page
* Component showcase page
* Responsive UI
* Reusable UI components
* Dark/Light mode toggle
* Toast notification
* Loader component
* Modal component

## Backend Features

The backend is built using FastAPI and provides REST API endpoints for crop data.

### API Endpoints

```text
GET     /                         Backend health check
GET     /api/crops                Get all crops
GET     /api/crops/{crop_id}      Get single crop by ID
POST    /api/crops                Create a new crop
PUT     /api/crops/{crop_id}      Update crop by ID
DELETE  /api/crops/{crop_id}      Delete crop by ID
GET     /api/crops/search         Search crop by name
```

## How to Run Frontend Locally

1. Install dependencies:

```bash
npm install
```

2. Start the frontend development server:

```bash
npm run dev
```

3. Open the frontend in browser:

```text
http://localhost:5173
```

## How to Run Backend Locally

1. Navigate to the backend folder:

```bash
cd backend
```

2. Create a virtual environment:

```bash
python -m venv venv
```

3. Activate the virtual environment:

```bash
venv\Scripts\activate
```

4. Install backend dependencies:

```bash
pip install -r requirements.txt
```

5. Start the FastAPI backend server:

```bash
python -m uvicorn main:app --reload
```

6. Open the backend API documentation:

```text
http://127.0.0.1:8000/docs
```

7. Backend base URL:

```text
http://127.0.0.1:8000
```

## Environment Variables

The backend uses environment configuration. A sample file is provided:

```text
backend/.env.example
```

Example variables:

```env
APP_NAME=AgroVision AI API
ENVIRONMENT=development
API_HOST=127.0.0.1
API_PORT=8000
```

The actual `.env` file should not be committed to GitHub.

## Frontend-Backend Connection

The frontend Dashboard page connects to the FastAPI backend using the following endpoint:

```text
http://127.0.0.1:8000/api/crops
```

The Dashboard displays live crop data fetched from the backend API.

## GitHub Repository

```text
https://github.com/riyachaudhari912/agrovision-ai
```

## Intern Details

```text
Intern ID: TBI-26100926
Project Name: AgroVision AI
Domain: Full Stack Development
```
