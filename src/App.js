import { useEffect, useState } from "react";
import Speech from "react-speech";
import ToggleButton from "react-toggle-button";

function App() {
  const [teste, setTeste] = useState(0);
  const [timer, setTimer] = useState(3500);
  const [max, setMax] = useState(6);
  const [min, setMin] = useState(0);
  const [automatic, setAutomatic] = useState(true);

  const handleClick = () => {
    let rand = Math.round(Math.random() * (min - max) + max);
    while (teste === rand) {
      rand = Math.round(Math.random() * (min - max) + max);
    }
    setTeste(rand);
  };

  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    let interval = 0;
    if (automatic) {
      interval = setInterval(() => setTime(Date.now()), timer);
      // document.querySelector(".rs-play").click();
      handleClick();
    }
    return () => {
      clearInterval(interval);
    };
  }, [time, automatic]);

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
        {automatic ? (
          <div>
            <button onClick={plusTimer}>+ Tempo</button>
            <button onClick={minusTimer}>- Tempo</button>
            <h4>Tempo ate Alternar: {timer} ms</h4>
          </div>
        ) : null}
        <button onClick={plusNumber}>+ Numeros</button>
        <button onClick={minusNumber}>- Numeros</button>
        <div
          style={{ display: "flex", justifyContent: "center", margin: "20px" }}
        >
          <ToggleButton
            value={automatic}
            onToggle={(value) => {
              setAutomatic((old) => !old);
            }}
          />
          {!automatic ? (
            <button onClick={handleClick}> New number</button>
          ) : null}
        </div>
        <h4>
          Range de Numeros: {min} - {max}
        </h4>
        <Speech id="teste" text={teste.toString()} />,
      </div>
    </div>
  );
}

export default App;
