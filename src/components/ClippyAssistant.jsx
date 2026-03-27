import { useState, useEffect } from "react";

const CLIPPY_MESSAGES = [
  { type: "plain", text: "HEJ! Jag är Clippy! Behöver du hjälp med något? Jag finns här! 🤓" },
  { type: "plain", text: "Vilken underbar dag det är idag. ☀️" },
  { type: "plain", text: "Du är bäst! Vet du det? 💪" },
  {
    type: "plain",
    text: "Kom ihåg att ta pauser när du pluggar, hjärnan behöver vila också. 🧠",
  },
  { type: "askJoke", text: "Vill du höra ett skämt? 😏" },
];

const JOKES = [
  "Varför tog eleven med sig en stege till skolan? För att gå i högstadiet! 😆",
  "Vad sa datorn till eleven? Du har för många fönster öppna, ta en paus! 💻",
  "Varför älskar programmerare kaffe? För att de inte gillar sleep-läge. ☕",
];

function getRandomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

export default function ClippyAssistant() {
  const [isOpen, setIsOpen] = useState(true);
  const [message, setMessage] = useState(getRandomItem(CLIPPY_MESSAGES));
  const [joke, setJoke] = useState("");
  const [hasAnsweredJoke, setHasAnsweredJoke] = useState(false);
  const [eyePos, setEyePos] = useState({ x: 0, y: 0 });

  function toggleOpen() {
    setIsOpen((prev) => !prev);
  }

  function showNewMessage() {
    const next = getRandomItem(CLIPPY_MESSAGES);
    setMessage(next);
    setJoke("");
    setHasAnsweredJoke(false);
  }

  function handleJokeAnswer(wantsJoke) {
    setHasAnsweredJoke(true);

    if (wantsJoke) {
      setJoke(getRandomItem(JOKES));
    } else {
      setJoke("");
    }
  }

  useEffect(() => {
    function handleMouseMove(e) {
      const x = (e.clientX / window.innerWidth - 0.5) * 8;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;
      setEyePos({ x, y });
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const isAskJoke = message.type === "askJoke";

  return (
    <div className="clippy">
      <div className={`clippy__bubble ${isOpen ? "" : "is-hidden"}`}>
        <div className="clippy__bubble-arrow" />

        <div className="clippy__bubble-content">
          <p className="clippy__text">{message.text}</p>

          {joke && <p className="clippy__text">{joke}</p>}

          <div className="clippy__actions">
            {isAskJoke && !hasAnsweredJoke && (
              <>
                <button
                  className="clippy__btn clippy__btn--primary"
                  onClick={() => handleJokeAnswer(true)}
                >
                  Ja, gärna!
                </button>

                <button
                  className="clippy__btn"
                  onClick={() => handleJokeAnswer(false)}
                >
                  Nej tack
                </button>
              </>
            )}

            {(!isAskJoke || hasAnsweredJoke) && (
              <button
                className="clippy__btn clippy__btn--primary"
                onClick={showNewMessage}
              >
                Ny hälsning
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="clippy__body">
        <div className="clippy__clip clippy__clip--outer" />
        <div className="clippy__clip clippy__clip--inner" />

        <div className="clippy__face">
          <div className="clippy__eye">
            <div
              className="clippy__pupil"
              style={{
                left: `calc(50% + ${eyePos.x}px)`,
                top: `calc(50% + ${eyePos.y}px)`,
              }}
            />
          </div>

          <div className="clippy__eye">
            <div
              className="clippy__pupil"
              style={{
                left: `calc(50% + ${eyePos.x}px)`,
                top: `calc(50% + ${eyePos.y}px)`,
              }}
            />
          </div>
        </div>
      </div>

      <button className="clippy__toggle" onClick={toggleOpen}>
        💬
      </button>
    </div>
  );
}