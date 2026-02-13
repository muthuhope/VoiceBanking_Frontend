# Voice Banking System - Frontend
React-based frontend application for the Voice Banking System.  
This application provides an interactive UI for performing banking operations, including voice-enabled transactions.

## Tech Stack
- React.js
- JavaScript (ES6+)
- React Router
- CSS
- Web Speech API (Speech Recognition & Speech Synthesis)
- REST API Integration
- 
## Features
- User Registration
- User Login
- Dashboard Overview
- Account Balance View
- Send Money Module
- Transaction History (Credit/Debit Highlighted)
- Multilingual Voice Support
- Voice Confirmation for Transactions
- Responsive Modern UI

## Project Structure
src/
│
├── pages/           # Login, Register, Dashboard, Account, Transactions
├── components/      # VoiceAssistant and reusable components
├── styles/          # CSS files
├── api.js           # API integration helper
└── App.jsx          # Main router setup

## Setup Instructions

### 1. Clone Repository
git clone https://github.com/YOUR_USERNAME/VoiceBanking-Frontend.git
cd VoiceBanking-Frontend

### 2️. Install Dependencies
npm install

### 3️. Start Development Server
npm run dev
Application will run at:```
http://localhost:5173

## Voice Feature
This project uses the **Web Speech API** for:
- Speech Recognition
- Speech Synthesis

Supported Languages:
- English
- Hindi
- Tamil
- Telugu
- Malayalam
- 
## Backend Integration
Ensure backend is running at:
http://localhost:8080
API calls are configured in:
src/api.js

## Future Improvements
- JWT Authentication Handling
- Dark Mode UI
- AI-based Intent Detection
- Real-Time Notifications
- Mobile Optimization

## Author
Muthukumaran M








