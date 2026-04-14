Web Content Ingestion API

A lightweight web application that allows users to submit URLs for ingestion, normalization, and processing. The system is built with FastAPI and PostgreSQL, with a simple frontend interface for interacting with the API.

Overview

This project simulates a production-style ingestion pipeline where users can submit a URL, have it normalized and validated, and then processed by a backend service.

The goal of this project is to demonstrate:

API design using FastAPI
Input validation and normalization
Backend data processing workflows
Integration between frontend and backend systems
Features
Accept user-submitted URLs via a web interface
Normalize inputs (e.g., google.com → https://google.com)
Validate URLs before processing
RESTful API endpoint for ingestion
Simple frontend for interaction and testing
Tech Stack

Backend

FastAPI
Python

Frontend

HTML
CSS
JavaScript (Fetch API)

Planned / In Progress

PostgreSQL for persistent storage
Redis for caching and deduplication
Background processing for async ingestion
Project Structure
web_ingestion_api/
│
├── app/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── ingest.py
│   └── parser.py
│
├── static/
│   ├── index.html
│   ├── styles.css
│   └── scripts.js
│
├── requirements.txt
└── README.md
How It Works
User enters a URL in the frontend
Input is normalized and validated in the browser
A POST request is sent to the FastAPI backend
The backend processes the request and returns a response
Example Request
POST /ingest
Content-Type: application/json

{
  "url": "https://google.com"
}
Example Response
{
  "status": "received",
  "url": "https://google.com"
}
Getting Started
1. Install dependencies
pip install -r requirements.txt
2. Run FastAPI server
uvicorn app.main:app --reload
3. Open frontend

Open index.html in your browser (or use Live Server).

Future Improvements
Add PostgreSQL persistence layer
Implement async job processing
Add Redis caching for URL deduplication and robots.txt rules
Improve parsing and content extraction
Add ingestion status tracking endpoints
Why This Project

This project was built to bridge the gap between scripting and production backend systems by focusing on:

Real-world API patterns
Data ingestion workflows
Clean separation between frontend and backend