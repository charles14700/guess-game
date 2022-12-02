import React, { useState } from "react";


function Game() {
  const [started, setStarted] = useState(false);
  const [status, setStatus] = useState(false);
  const [answer, setAnswer] = useState(0);
  const [rightAnswer, setRightAnsweer] = useState(0);
  console.log(rightAnswer);

  const submit = (e) => {
    e.preventDefault();
    const formValid = +answer >= 0;
    if (!formValid) {
      return;
    }
    if (+answer === +rightAnswer) {
      setStatus("you got it");
      setStarted(false);
    } else if (+answer < +rightAnswer) {
      setStatus("too low");
    } else {
      setStatus("too high");
    }
  };

  const start = () => {
    setRightAnsweer(Math.ceil(Math.random() * 10));
    setStarted(true);
  };

  if (started) {
    return (
      <div className="mt-5">
        <form onSubmit={submit}>
          <div>
            <label>answer</label>
            <input value={answer} onChange={(e) => setAnswer(e.target.value)} />
          </div>
          <button type="submit">check</button>
        </form>
        <p>{status}</p>
      </div>
    );
  } else {
    return (
      <div>
        <button type="button" onClick={start}>
          start
        </button>
        <p>{status}</p>
      </div>
    );
  }
}

export default Game;
