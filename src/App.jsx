import { useEffect, useMemo, useState } from "react";
import { NavLink, Outlet, useLocation, Link } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import ClippyAssistant from "./components/ClippyAssistant";

// Enkel ikon för meddelanden
function BellIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M12 22a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22ZM19 17H5l1.2-1.2c.5-.5.8-1.2.8-1.9V10a5 5 0 1 1 10 0v3.9c0 .7.3 1.4.8 1.9L19 17Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function App() {
  const [user, setUser] = useState(null);

  const [messages, setMessages] = useState([
    {
      id: 1,
      teacher: "Anna Andersson",
      messages: [
        { from: "teacher", text: "Hej! Bra jobbat 👍", date: "Idag" },
        { from: "me", text: "Tack så mycket!", date: "Idag" },
      ],
      unread: true,
    },
    {
      id: 2,
      teacher: "Björn Berg",
      messages: [
        { from: "teacher", text: "Glöm inte examinationen!", date: "Igår" },
      ],
      unread: true,
    },
  ]);

  const unreadCount = useMemo(
    () => messages.filter((m) => m.unread).length,
    [messages]
  );

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location.pathname]);

  function handleAuthenticate(userData) {
    setUser(userData);
  }

  function handleLogout() {
    localStorage.removeItem("token");
    setUser(null);
  }

  function markAllAsRead() {
    setMessages((prev) => prev.map((m) => ({ ...m, unread: false })));
  }

  if (!user) {
    return <AuthPage onAuthenticate={handleAuthenticate} />;
  }

  return (
    <Layout>
      <header className="app-header">
        <h1>Folkuniversitetet</h1>

        <p className="app-header__user">
          Inloggad som <strong>{user.username}</strong>
        </p>

        <nav className="main-nav">
          <NavLink to="/">Start</NavLink>
          <NavLink to="/kurser">Mina Kurser</NavLink>
          <NavLink to="/kontakt">Kontakta lärare</NavLink>

          <div className="nav-messages-wrap">
  <NavLink
    to="/meddelanden"
    className={`nav-messages-link ${
      unreadCount > 0 ? "has-notifications" : ""
    }`}
  >
    <span className="nav-ico">
      <BellIcon />
    </span>

    <span>Meddelanden</span>

    {unreadCount > 0 && (
      <>
        <span className="message-badge message-badge--pulse">
          {unreadCount}
        </span>
        <span className="message-tooltip">
          Du har ett meddelande
        </span>
      </>
    )}
  </NavLink>

  <button
    type="button"
    className="nav-messages-toggle"
    onClick={() => setIsDropdownOpen((prev) => !prev)}
    aria-label="Öppna meddelandeöversikt"
  >
    ▾
  </button>

  {isDropdownOpen && (
    <div className="messages-dropdown">
      <div className="messages-dropdown__header">
        <strong>Senaste</strong>
        <Link to="/meddelanden" className="messages-dropdown__all">
          Visa alla
        </Link>
      </div>

      <ul className="messages-dropdown__list">
        {messages.slice(0, 3).map((chat) => {
          const lastMessage = chat.messages[chat.messages.length - 1];

          return (
            <li
              key={chat.id}
              className={`messages-dropdown__item ${
                chat.unread ? "is-unread" : ""
              }`}
            >
              <Link
                to="/meddelanden"
                className="messages-dropdown__link"
              >
                <div className="messages-dropdown__top">
                  <span className="messages-dropdown__from">
                    {chat.teacher}
                  </span>
                  <span className="messages-dropdown__date">
                    {lastMessage?.date}
                  </span>
                </div>

                <div className="messages-dropdown__subject">
                  Konversation med lärare
                </div>

                <div className="messages-dropdown__preview">
                  {lastMessage?.text}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
        
        /* Om det finns fler än 3 konversationer, visa en knapp för att markera alla som lästa */

      <div className="messages-dropdown__footer"> 
        <button
          type="button"
          className="messages-dropdown__markread"
          onClick={markAllAsRead}
        >
          Markera alla som lästa
        </button>
      </div>
    </div>
  )}
</div>

          <button className="logout-btn" onClick={handleLogout}>
            Logga ut
          </button>
        </nav>
      </header>

      <main className="app-main">
        <Outlet context={{ messages, setMessages, markAllAsRead, user }} />
      </main>

      <ClippyAssistant />
    </Layout>
  );
}