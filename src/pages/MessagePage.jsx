import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export default function MeddelandenPage() {
  const { messages, markAllAsRead } = useOutletContext();

  // När sidan öppnas → markera alla som lästa
  useEffect(() => {
    markAllAsRead();
  }, [markAllAsRead]);

  return (
    <section className="page">
      <h2>Meddelanden</h2>

      {messages.length === 0 ? (
        <p>Inga meddelanden just nu.</p>
      ) : (
        <ul className="messages-list">
          {messages.map((m) => (
            <li key={m.id} className={`messages-list__item ${m.unread ? "is-unread" : ""}`}>
              <div className="messages-list__top">
                <strong>{m.from}</strong>
                <span className="messages-list__date">{m.date}</span>
              </div>
              <div className="messages-list__subject">{m.subject}</div>
              <div className="messages-list__preview">{m.preview}</div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}