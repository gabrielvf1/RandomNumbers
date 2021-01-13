import { useEffect, useState } from "react";

function App() {
  const [teste, setTeste] = useState(0);
  const [timer, setTimer] = useState(3500);
  const [max, setMax] = useState(6);
  const [min, setMin] = useState(0);

  const handleClick = () => {
    const rand = Math.round(Math.random() * (min - max) + max);
    setTeste(rand);
  };

  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), timer);
    handleClick();
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  const plusTimer = () => {
    setTimer((old) => {
      console.log(old);
      return old + 500;
    });
  };

  const minusTimer = () => {
    setTimer((old) => {
      console.log(old);
      return old - 500 > 0 ? old - 500 : old;
    });
  };

  const plusNumber = () => {
    setMax((old) => {
      console.log(old);
      return old + 1;
    });
  };

  const minusNumber = () => {
    setMax((old) => {
      console.log(old);
      return old - 1 >= 0 ? old - 1 : old;
    });
  };

  return (
    <div style={{ height: "100%", width: "100%", textAlign: "center" }}>
      <h4>Random Numbers</h4>
      <div>
        <h1>{teste}</h1>
        <button onClick={plusTimer}>+ Tempo</button>
        <button onClick={minusTimer}>- Tempo</button>
        <h4>Tempo ate Alternar: {timer} ms</h4>
        <button onClick={plusNumber}>+ Numeros</button>
        <button onClick={minusNumber}>- Numeros</button>
        <h4>
          Range de Numeros: {min} - {max}
        </h4>
      </div>
    </div>
  );
}

export default App;
