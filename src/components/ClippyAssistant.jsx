import { useState } from "react";

const CLIPPY_MESSAGES = [
  { type: "plain", text: "Behöver du hjälp med något? Jag finns här! 🤓" },
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

  const isAskJoke = message.type === "askJoke";

  return (
    <div className="clippy">
      {/* BUBBLA */}
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

            {/* Visa “Ny hälsning” när det inte är skämt-fråga,
                eller efter att skämtet är besvarat */}
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

      {/* SJÄLVA CLIPPY-KROPPEN */}
      <div className="clippy__body">
        <div className="clippy__wire" />
        <div className="clippy__loop clippy__loop--top" />
        <div className="clippy__loop clippy__loop--bottom" />

        <div className="clippy__face">
          <div className="clippy__eye clippy__eye--left">
            <div className="clippy__pupil" />
          </div>
          <div className="clippy__eye clippy__eye--right">
            <div className="clippy__pupil" />
          </div>
        </div>
      </div>

      {/* KNAPP FÖR ATT VISA/GÖMMA BUBBLAN */}
      <button className="clippy__toggle" onClick={toggleOpen}>
        💬
      </button>
    </div>
  );
}
