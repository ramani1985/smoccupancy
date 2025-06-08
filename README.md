
# AI-Enhanced Real-Time Occupancy Planning System

This is a prototype for an AI-powered real-time occupancy planning system. Users can input natural language queries like:

> "Find me an available standing desk near the marketing team on the 3rd floor for tomorrow afternoon."

The system will parse the request using OpenAI and return suitable desk options based on availability, preferences, and policies.

---

## 📁 Project Structure

```
occupancy-planner/
├── backend/
│   ├── app.js
│   ├── routes/
│   ├── services/
│   └── test/
├── frontend/
│   ├── public/
│   └── src/
```

---

## 🚀 How to Run

### Backend

```bash
cd backend
npm install
OPENAI_API_KEY=your_key node app.js
```

### Frontend

```bash
cd frontend
npm install
npm start
```

### Run Tests

```bash
cd backend
npm test
```

---

## 🧠 Tech Stack

- Node.js + Express
- OpenAI GPT (via API)
- React.js
- Jest + Supertest (for backend testing)

