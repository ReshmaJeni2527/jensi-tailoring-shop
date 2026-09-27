# Jensi Tailoring Shop — Full-Stack Website

A complete, responsive business website with a working MongoDB-backed appointment
booking system, built for Jensi Tailoring Shop.

- **Frontend:** React (Vite) + Tailwind CSS + React Router
- **Backend:** Node.js + Express
- **Database:** MongoDB + Mongoose

No login, cart, checkout, or e-commerce features — this is a brand + appointment site only.

---

## 1. Project structure

```
jensi-tailoring/
├── backend/
│   ├── config/db.js                    MongoDB connection
│   ├── models/Appointment.js           Appointment schema
│   ├── controllers/appointmentController.js
│   ├── routes/appointmentRoutes.js
│   ├── server.js                       Express app entry point
│   ├── .env.example                    Copy to .env and fill in
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── assets/                     Your logo, mother's photo, blouse photos
│   │   ├── components/                 Navbar, Hero, About, Services, Designs,
│   │   │                               Gallery, Appointment, Contact, Footer, Reveal
│   │   ├── pages/Home.jsx              Assembles all sections
│   │   ├── services/api.js             Axios calls to the backend API
│   │   ├── App.jsx / main.jsx / index.css
│   ├── .env.example                    Optional: only needed if backend URL changes
│   ├── tailwind.config.js
│   └── package.json
│
└── README.md (this file)
```

---

## 2. Install and configure the backend

```bash
cd backend
npm install
cp .env.example .env
```

Open `.env` and set:

```
MONGODB_URI=mongodb://127.0.0.1:27017/jensi_tailoring
PORT=5000
CLIENT_ORIGIN=http://localhost:5173
```

**To use MongoDB Atlas (cloud) instead of local MongoDB:**
1. Create a free cluster at https://www.mongodb.com/cloud/atlas
2. Create a database user and get your connection string.
3. Paste it into `MONGODB_URI`, e.g.:
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/jensi_tailoring?retryWrites=true&w=majority
   ```

**To use local MongoDB instead:** install MongoDB Community Server and make sure
`mongod` is running, then use `mongodb://127.0.0.1:27017/jensi_tailoring`.

Run the backend:

```bash
npm run dev     # with nodemon (auto-restarts on changes)
# or
npm start       # plain node
```

You should see:
```
MongoDB connected: ...
Server running on http://localhost:5000
```

---

## 3. Install and run the frontend

In a **second terminal**:

```bash
cd frontend
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

You do **not** need a frontend `.env` file unless you deploy the backend somewhere
other than `http://localhost:5000` — in that case, copy `.env.example` to `.env`
and set `VITE_API_URL` to your backend's `/api` URL.

---

## 4. Test the appointment form end-to-end

1. With both servers running, go to the **Book an Appointment** section.
2. Fill in all fields and submit.
3. You should see a green success message: *"Thank you! Your appointment request
   has been submitted successfully. We will contact you soon."*
4. Verify it was saved to MongoDB by visiting:
   ```
   http://localhost:5000/api/appointments
   ```
   in your browser, or with:
   ```bash
   curl http://localhost:5000/api/appointments
   ```
   You should see your submitted appointment in the JSON response, with
   `"status": "Pending"`.

**Validation to try:**
- Leave a field empty → inline error appears, nothing is sent to the server.
- Enter a phone number that isn't a valid 10-digit Indian mobile number → error shown.
- Enter an invalid email → error shown.
- Pick a date in the past → error shown (both in the browser and, as a safety net,
  on the server).

---

## 5. Where to edit content before publishing

| What to change | File |
|---|---|
| Mother's real phone, WhatsApp, email, address, hours, social links | `frontend/src/components/Contact.jsx` (look for `[PLACEHOLDER]` values at the top of the file) |
| Footer contact details | `frontend/src/components/Footer.jsx` |
| About Us story/experience text | `frontend/src/components/About.jsx` |
| Google Maps embed | `frontend/src/components/Contact.jsx` (replace the `[MAP PLACEHOLDER]` block with an `<iframe>` using your shop's real Google Maps embed link) |
| Services offered / descriptions | `frontend/src/components/Services.jsx` |
| Design names/descriptions or to add more blouse photos | `frontend/src/components/Designs.jsx` and `Gallery.jsx` — add new images to `frontend/src/assets/` and import them the same way as the existing ones |

**Note on the logo:** the uploaded logo file reads "MJRG Tailoring Shop," while this
project uses the shop name "Jensi Tailoring Shop" everywhere in the text/branding,
as specified in your instructions. If you'd like the logo image itself updated to
say "Jensi Tailoring Shop," replace `frontend/src/assets/logo.png` with a corrected
version — the code doesn't need to change, since it just references the file name.

---

## 6. Building for production

```bash
cd frontend
npm run build
```

This outputs static files to `frontend/dist/`, which you can deploy to any static
host (Netlify, Vercel, etc.). Deploy `backend/` to a Node host (Render, Railway,
etc.) with your real `MONGODB_URI` set as an environment variable there, and update
`VITE_API_URL` in the frontend to point to that backend's URL before building.

---

## 7. API reference

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/appointments` | Create a new appointment. Body: `{ name, phone, email, service, date, time, address, message }` |
| `GET` | `/api/appointments` | List all appointments, newest first (for verification/testing) |

All responses are JSON with a `success` boolean and a `message`. `POST` responses
also include the saved `data` object.
