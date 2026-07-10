import { useState } from "react";

function App() {
  const [date, setDate] = useState<string>("");
  function sendMessage(id: number) {
    const content = [
      "Magda says she loves you!",
      "Magda says she misses you.",
      "Magda is hungry!",
      "Magda has a massive stinky poo poo",
      "Magda is having kinda anger issues",
      "Magda is fed up with lach and her bullshit",
    ];
    fetch("https://ntfy.sh/notifications_from_m", {
      method: "POST", // PUT works too
      body: content[id],
    });
  }
  function sendDate(date: string) {
    if (date === "") return;
    fetch("https://ntfy.sh/notifications_from_m", {
      method: "POST", // PUT works too
      body: `Magda wants to meet on ${date}! `,
    });
  }
  return (
    <>
      <div className="main">
        <div className="title">
          <div className="title-border"></div>
          <h1>I Love You!</h1>
          <p>Send me a message!</p>
        </div>
        <div className="controls">
          <div className="date">
            <h1>Date Picker</h1>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <button
              onClick={() => {
                sendDate(date);
              }}
            >
              Let's Meet!
            </button>
          </div>
          <div className="vl"></div>
          <div className="quick">
            <h1>Quick Messages</h1>
            <button
              onClick={() => {
                sendMessage(0);
              }}
            >
              I Love You!
            </button>
            <button
              onClick={() => {
                sendMessage(1);
              }}
            >
              I Miss You
            </button>
            <button
              onClick={() => {
                sendMessage(2);
              }}
            >
              I'm hungry
            </button>
            <button
              onClick={() => {
                sendMessage(3);
              }}
            >
              I need to shit
            </button>
            <button
              onClick={() => {
                sendMessage(4);
              }}
            >
              I'm so fucking angry
            </button>
            <button
              onClick={() => {
                sendMessage(5);
              }}
            >
              Lach jebana mam kurwa dosc
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
