import ClippyAssistant from "../components/ClippyAssistant.jsx";

import {
  exams,
  homework,
  materials,
  videos,
  teachers,
} from "../data/schoolData.js";

export default function HomePage() {
  return (
    <section className="page home dashboard">
      {/* Övre rad: Clippy + kort sammanfattning */}
      <div className="dashboard__top">
        <ClippyAssistant />

        <div className="dashboard__welcome">
          <h2>Välkommen till din elevsida</h2>
          <p>
            Här ser du dina kommande examinationer, läxor, material, videos och
            hur du kan kontakta dina lärare. Clippy finns här om du behöver
            hjälp eller bara vill höra ett skämt. ✨
          </p>
        </div>
      </div>

      {/* Grid med alla sektioner */}
      <div className="dashboard__grid">
        {/* Examinationer */}
        <section className="dashboard__card">
          <h3>Kommande examinationer</h3>
          <ul className="dashboard__list">
            {exams.map((exam) => (
              <li key={exam.id} className="dashboard__item">
                <strong>{exam.subject}</strong>
                <span>
                  {exam.date} – {exam.time}
                </span>
                <span>Rum: {exam.room}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Läxor */}
        <section className="dashboard__card">
          <h3>Läxor</h3>
          <ul className="dashboard__list">
            {homework.map((hw) => (
              <li key={hw.id} className="dashboard__item">
                <strong>{hw.subject}</strong>
                <span>{hw.title}</span>
                <span>Inlämning: {hw.dueDate}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Material */}
        <section className="dashboard__card">
          <h3>Skolmaterial</h3>
          <ul className="dashboard__list">
            {materials.map((m) => (
              <li key={m.id} className="dashboard__item">
                <strong>{m.course}</strong>
                <span>{m.title}</span>
                <a href={m.link}>Öppna material</a>
              </li>
            ))}
          </ul>
        </section>

        {/* Videos */}
        <section className="dashboard__card">
          <h3>Skolvideos</h3>
          <ul className="dashboard__list">
            {videos.map((v) => (
              <li key={v.id} className="dashboard__item">
                <strong>{v.course}</strong>
                <span>{v.title}</span>
                <a href={v.link}>Spela video</a>
              </li>
            ))}
          </ul>
        </section>

        {/* Kontakta lärare */}
        <section className="dashboard__card dashboard__card--full">
          <h3>Kontakta lärare</h3>
          <ul className="dashboard__list dashboard__list--teachers">
            {teachers.map((t) => (
              <li key={t.id} className="dashboard__item dashboard__item--teacher">
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.subject}</span>
                </div>
                <a href={`mailto:${t.email}`} className="dashboard__button">
                  Maila
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
