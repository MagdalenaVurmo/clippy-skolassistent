
Här är mitt Examens Arbete för Javascriptsutvecklare på Folkuniversitetet i Göteborg.

# 🎓 Clippy – Din skolassistent

En Single Page Application byggd i React där elever kan få en överblick över sin skolvardag. Applikationen innehåller en interaktiv assistent inspirerad av Clippy som hjälper och peppar användaren.

---

## 📌 Om projektet

Detta projekt är ett proof-of-concept för en elevportal där skolinformation samlas på ett och samma ställe. Syftet är att göra det enklare för elever att hålla koll på sina studier samtidigt som användarupplevelsen görs mer engagerande genom en interaktiv assistent.

---

## ✨ Funktionalitet

- 🔐 Inloggningssida (frontend)
- 🧷 Interaktiv assistent (Clippy)
  - Ger uppmuntrande meddelanden
  - Kan berätta skämt
  - Visar och döljer sig via knapp
- 📅 Kommande examinationer
- 📚 Läxor med deadlines
- 📄 Skolmaterial
- 🎥 Skolvideos
- 📧 Kontakt med lärare (mail-länkar)

---

## 🧠 Clippy

Clippy är inspirerad av Microsofts tidigare digitala assistent och används i projektet som en interaktiv figur som guidar och motiverar användaren. Målet är att skapa en mer personlig och engagerande upplevelse.

---

## 🛠️ Tekniker

- React (SPA)
- React Router
- JavaScript (ES6+)
- SASS (modulär styling)
- CSS-animationer
- Git & GitHub

---

## 📂 Projektstruktur

src/
components/
ClippyAssistant.jsx
Layout.jsx

pages/
HomePage.jsx
TipsPage.jsx
FavoritesPage.jsx
AboutPage.jsx
AuthPage.jsx

data/
schoolData.js

styles/
main.scss
_clippy.scss
_layout.scss
_pages.scss
_auth.scss


## 🚀 Kom igång

### 1. Klona projektet

```bash
git clone https://github.com/ditt-användarnamn/clippy-skolassistent.git

2. Installera dependencies
npm install

3. Starta projektet
npm run dev

Öppna i webbläsaren:

http://localhost:5173/