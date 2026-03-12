# Mission 10 — Bowling League

IS413 Enterprise Application Development
Lincoln Adams

A full-stack web app that displays bowler and team data from a SQLite database via a .NET 10 REST API and a React/TypeScript frontend.

---

## Prerequisites

- [.NET 10 SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/) (v18 or later)

---

## Setup & Running

You need **two terminals** open simultaneously — one for the backend, one for the frontend.

### Terminal 1 — Backend

```bash
cd backend
dotnet run
```

The API will start at `http://localhost:5001`. You should see output like:

```
Now listening on: http://localhost:5001
```

### Terminal 2 — Frontend

```bash
cd frontend
npm install
npm run dev
```

The React app will start at `http://localhost:5173`.

---

## Viewing the App

Open your browser and go to:

```
http://localhost:5173
```

The page displays a table of all bowlers in the league, including their team name, address, and contact info pulled live from the database.

---

## Project Structure

```
Mission10_BowlingLeague/
├── backend/
│   ├── Controllers/        # BowlersController — GET /api/bowlers
│   ├── Models/             # Bowler, Teams models and EF Core DbContext
│   ├── BowlingLeague.sqlite  # SQLite database (included)
│   └── Program.cs          # App configuration, CORS, DB connection
└── frontend/
    ├── src/
    │   ├── components/     # BowlerTable, Heading, Footer
    │   ├── services/       # bowlerApi.ts — fetch logic
    │   └── types/          # Bowler TypeScript type
    ├── .env                # API URL (pre-configured)
    └── .env.example        # Template if .env needs to be recreated
```

---

## Notes

- The SQLite database is included in the repo — no migrations or seeding needed.
- The `.env` file is pre-configured to point at `http://localhost:5001/api/bowlers`.
- If the backend starts on a different port, update `VITE_API_URL` in `frontend/.env` and restart `npm run dev`.
