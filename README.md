# Web Content Ingestion API

> A FastAPI-based service for URL ingestion, normalization, and processing with a lightweight frontend interface.

---

## Overview

This project simulates a production-style ingestion pipeline where users can submit a URL, have it normalized and validated, and then processed by a backend service.

The goal of this project is to demonstrate:
- API design using FastAPI
- Input validation and normalization
- Backend data processing workflows
- Integration between frontend and backend systems

---

## Features

- Accept user-submitted URLs via a web interface
- Normalize inputs (e.g., `google.com` → `https://google.com`)
- Validate URLs before processing
- RESTful API endpoint for ingestion
- Simple frontend for interaction and testing

---

## Tech Stack

**Backend**
- FastAPI
- Python

**Frontend**
- HTML
- CSS
- JavaScript (Fetch API)

**Planned / In Progress**
- PostgreSQL for persistent storage
- Redis for caching and deduplication
- Background processing for async ingestion

---

## Project Structure


web_ingestion_api/
│
├── app/
│ ├── main.py
│ ├── database.py
│ ├── models.py
│ ├── schemas.py
│ ├── ingest.py
│ └── parser.py
│
├── static/
│ ├── index.html
│ ├── styles.css
│ └── scripts.js
│
├── requirements.txt
└── README.md



---

## How It Works

1. User enters a URL in the frontend  
2. Input is normalized and validated in the browser  
3. A POST request is sent to the FastAPI backend  
4. The backend processes the request and returns a response  

---

## Example Request

```http
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