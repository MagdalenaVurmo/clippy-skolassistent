import "../styles/KurserPage.scss";
import { useNavigate } from "react-router-dom";

export default function KurserPage() {
  const navigate = useNavigate();



  // KURSERNA
  // Här visas alla kurser som eleven är anmäld till. 
  // För varje kurs visas uppgifter, schema, skolmaterial, skolvideos, examinationer och även läxor.
  
  const courses = [
    {
      id: 1,
      title: "Frontendutveckling",
      teacher: "Anna Andersson",
      description:
        "Här arbetar vi med HTML, CSS, JavaScript och React. Du hittar uppgifter, schema, skolmaterial och videos här.",
      tasks: ["Bygg en React-komponent", "Styling med SASS", "Lämna in GitHub-länk"],
      schedule: "Måndag 09:00–12:00",
      material: ["Slides vecka 1", "Övningsuppgifter", "Kodexempel"],
      videos: ["Intro till React", "Props och state", "Routing i React"],
      exam: "Inlämning av projekt vecka 6",
      homework: "Fortsätt bygga elevportalen",
    },
    {
      id: 2,
      title: "Backendutveckling",
      teacher: "Björn Berg",
      description:
        "Här fokuserar vi på Node.js, Express, databaser och API:er.",
      tasks: ["Skapa API-route", "Koppla MongoDB", "Testa med Postman"],
      schedule: "Onsdag 13:00–16:00",
      material: ["API-dokumentation", "Databasövningar", "Mongoose-exempel"],
      videos: ["Intro till Express", "MongoDB Atlas", "REST API grunder"],
      exam: "Praktisk examination vecka 7",
      homework: "Bygg login med backend",
    },
    {
      id: 3,
      title: "UX / UI Design",
      teacher: "Sara Svensson",
      description:
        "Här jobbar vi med design, användarvänlighet och gränssnitt.",
      tasks: ["Skissa wireframes", "Färgpalett", "Responsiv design"],
      schedule: "Fredag 10:00–12:00",
      material: ["Designprinciper", "Wireframe-exempel", "Färgkontrastguide"],
      videos: ["Vad är UX?", "UI best practices", "Design för appar"],
      exam: "Presentation av prototyp",
      homework: "Förbättra navigationen i appen",
    },
  ];

  function handleOpenMaterial(course) {
    alert(`Här kan du senare öppna material för ${course.title}`);
  }

  function handleOpenVideo(course) {
    alert(`Här kan du senare öppna videos för ${course.title}`);
  }

  function handleMessageTeacher(course) {
    navigate("/meddelanden");
  }

  return (
    <section className="kurser-page">
      <div className="kurser-page__hero">
        <h2>Mina Kurser</h2>
        <p>
          Här hittar du dina kurser, uppgifter, schema, skolmaterial,
          skolvideos, examinationer och läxor.
        </p>
      </div>

      <div className="kurser-grid">
        {courses.map((course) => (
          <article key={course.id} className="course-card">
            <div className="course-card__header">
              <h3>{course.title}</h3>
              <span className="course-card__teacher">{course.teacher}</span>
            </div>

            <p className="course-card__description">{course.description}</p>

            <div className="course-card__section">
              <h4>Uppgifter</h4>
              <ul>
                {course.tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </div>

            <div className="course-card__section">
              <h4>Schema</h4>
              <p>{course.schedule}</p>
            </div>

            <div className="course-card__section">
              <h4>Skolmaterial</h4>
              <ul>
                {course.material.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="course-card__section">
              <h4>Skolvideos</h4>
              <ul>
                {course.videos.map((video, index) => (
                  <li key={index}>{video}</li>
                ))}
              </ul>
            </div>

            <div className="course-card__footer">
              <div>
                <strong>Examination:</strong>
                <p>{course.exam}</p>
              </div>

              <div>
                <strong>Läxa:</strong>
                <p>{course.homework}</p>
              </div>
            </div>

            <div className="course-card__actions">
              <button onClick={() => handleOpenMaterial(course)}>
                Öppna material
              </button>

              <button onClick={() => handleOpenVideo(course)}>
                Se video
              </button>

              <button
                className="course-card__message-btn"
                onClick={() => handleMessageTeacher(course)}
              >
                Skicka meddelande
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}