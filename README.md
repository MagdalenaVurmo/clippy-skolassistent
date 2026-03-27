# 🎓 Clippy Skolassistent

En elevportal byggd i React där studenter kan hantera kurser, kommunicera med lärare och få hjälp av en interaktiv assistent (Clippy).

---

## 🚀 Funktioner

- 🔐 Inloggning & registrering (med backend och MongoDB)
- 📚 Kurssida med:
  - Uppgifter
  - Schema
  - Skolmaterial
  - Videos
  - Examinationer & läxor
- 💬 Meddelandesystem mellan elev och lärare
  - Chat med historik
  - Skicka och svara på meddelanden
- 🔔 Notifikationer för nya meddelanden
- 🤖 Clippy-assistent som:
  - Ger tips
  - Ställer frågor
  - Berättar skämt
- 🎨 Responsiv och modern UI (SASS)

---

## 🛠️ Tekniker

### Frontend
- React
- React Router
- Axios
- SASS / SCSS

### Backend
- Node.js
- Express
- MongoDB Atlas
- JWT (autentisering)

---

## 🧠 Arkitektur

Applikationen är byggd som en fullstack-lösning:

- **Frontend (React)** hanterar UI och routing
- **Backend (Express)** hanterar API och autentisering
- **MongoDB** används som databas
- State hanteras med React hooks

---

## 💡 Funktionell design

- Navigation mellan sidor med React Router
- Dynamiska komponenter (meddelanden, kurser)
- UI-feedback (notiser, hover-effekter)
- Interaktiv assistent (Clippy)

---

## 📦 Installation

### 1. Klona projektet

```bash
git clone https://github.com/ditt-användarnamn/clippy-skolassistent.git

2. Installera dependencies
npm install

3. Starta projektet
npm run dev

Öppna i webbläsaren:

http://localhost:5173/