import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    fetch("/api/message")
      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);

  return <h1>Frontend Connected vaishnavi → {msg}</h1>;
}

export default App;
