import { useEffect, useState } from "react";

function App() {
  const [teste, setTeste] = useState(0);
  const handleClick = () => {
    const min = 0;
    const max = 6;
    const rand = Math.round(Math.random() * (0 - 6) + 6);
    setTeste(rand);
  };

  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 3500);
    handleClick();
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <div style={{ height: "100%", width: "100%", textAlign: "center" }}>
      <h4>Random whole number every 5 seconds </h4>
      <div>
        <h1>{teste}</h1>
      </div>
    </div>
  );
}

export default App;
