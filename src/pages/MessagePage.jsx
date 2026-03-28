import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import "../styles/MessagePage.scss";


// Meddelandesidan!
// Här ska man kunna se alla sina konversationer med lärarna 
// OCH även kunna skicka nya meddelanden till sin lärare.

export default function MessagePage() {
  const { messages, setMessages } = useOutletContext();
  const [activeChat, setActiveChat] = useState(null);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function openChat(chat) {
    setActiveChat(chat);
  }

  function sendMessage() {
    if (!input.trim()) return;

    setMessages((prev) =>
      prev.map((chat) =>
        chat.id === activeChat.id
          ? {
              ...chat,
              messages: [
                ...chat.messages,
                { from: "me", text: input, date: "Nu" },
              ],
            }
          : chat
      )
    );

    setInput("");
  }

  return (
    <div className="messages-page">

      {/* ❌ STÄNG-KNAPP */}
      <button
        className="close-btn"
        onClick={() => navigate("/")}
      >
        ✕
      </button>

      {/* SIDEBAR */}
      <div className="messages-sidebar">
        <h3>Lärare</h3>

        {messages.map((chat) => (
          <div
            key={chat.id}
            className="chat-card"
            onClick={() => openChat(chat)}
          >
            <strong>{chat.teacher}</strong>
            <p>{chat.messages[chat.messages.length - 1].text}</p>
          </div>
        ))}
      </div>

      {/* CHAT */}
      <div className="messages-chat">
        {!activeChat ? (
          <p>Välj en konversation</p>
        ) : (
          <>
            <h3>{activeChat.teacher}</h3>

            <div className="chat-box">
              {activeChat.messages.map((msg, i) => (
                <div
                  key={i}
                  className={`chat-message ${
                    msg.from === "me" ? "me" : "teacher"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="chat-input">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Skriv meddelande..."
              />
              <button onClick={sendMessage}>Skicka</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}