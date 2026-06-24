function App() {
  function sendMessage() {
    fetch("https://ntfy.sh/notifications_from_m", {
      method: "POST", // PUT works too
      body: "test",
    });
  }
  return (
    <>
      <button onClick={sendMessage}>click me</button>
    </>
  );
}

export default App;
