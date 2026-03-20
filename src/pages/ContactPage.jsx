import { useOutletContext } from "react-router-dom";
import "../styles/ContactPage.scss";

export default function AboutPage() {
  const teachers = [
    {
      id: 1,
      name: "Anna Andersson",
      subject: "Programmering 1",
      phone: "070-123 45 67",
      email: "anna@skola.se",
      teams: "anna.andersson@skola.se",
      skype: "anna.andersson",
    },
    {
      id: 2,
      name: "Björn Berg",
      subject: "Databaser",
      phone: "070-987 65 43",
      email: "bjorn@skola.se",
      teams: "bjorn.berg@skola.se",
      skype: "bjorn.berg",
    },
    {
      id: 3,
      name: "Sara Svensson",
      subject: "HTML & CSS",
      phone: "070-555 44 33",
      email: "sara@skola.se",
      teams: "sara.svensson@skola.se",
      skype: "sara.svensson",
    },
  ];

  return (
    <section className="page about">
      <h2>Kontakta din lärare</h2>
      <p>
        Här kan du hitta all information om dina lärare och hur du kontaktar dem.
        Clippy finns om du behöver hjälp med något!
      </p>

      <section className="contact-cards">
        {teachers.map((t) => (
          <article key={t.id} className="contact-card">
            <div className="contact-card__top">
              <div>
                <h3 className="contact-card__name">{t.name}</h3>
                <p className="contact-card__subject">{t.subject}</p>
              </div>

              <a className="contact-card__cta" href={`mailto:${t.email}`}>
                ✉️ Maila
              </a>
            </div>

            <div className="contact-card__grid">
              <div className="contact-row">
                <span className="contact-ico" aria-hidden="true">📞</span>
                <span className="contact-label">Telefon</span>
                <a className="contact-link" href={`tel:${t.phone.replace(/\s/g, "")}`}>
                  {t.phone}
                </a>
              </div>

              <div className="contact-row">
                <span className="contact-ico" aria-hidden="true">📧</span>
                <span className="contact-label">Email</span>
                <a className="contact-link" href={`mailto:${t.email}`}>
                  {t.email}
                </a>
              </div>

              <div className="contact-row">
                <span className="contact-ico" aria-hidden="true">💬</span>
                <span className="contact-label">Teams</span>
                <a
                  className="contact-link"
                  href={`https://teams.microsoft.com/l/chat/0/0?users=${encodeURIComponent(t.teams)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Chatta i Teams
                </a>
              </div>

              <div className="contact-row">
                <span className="contact-ico" aria-hidden="true">🎥</span>
                <span className="contact-label">Skype</span>
                <a className="contact-link" href={`skype:${t.skype}?chat`}>
                  Starta Skype-chat
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
}