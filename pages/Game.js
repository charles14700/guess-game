import React, { useState } from "react";
import Layout from "../components/Layout";
import useStore2 from "../store2";
import dynamic from "next/dynamic";

const Game = () => {
  const City = useStore2((state) => state.city);
  const updcity = useStore2((state) => state.updcity);
  const Trials = useStore2((state) => state.trials);
  const updtrials = useStore2((state) => state.updtrials);
  const FullName = useStore2((state) => state.fullname);
  const phoneno = useStore2((state) => state.phoneNo);

  const [started, setStarted] = useState(false);
  const [status, setStatus] = useState(false);
  const [answer, setAnswer] = useState(0);
  const [rightAnswer, setRightAnsweer] = useState(0);
  const [trials, settrials] = useState(0)
  const [win , setWin] = useState("Almost there hero")

  const submit = (e) => {
    e.preventDefault();

    updtrials(e.value);
    const formValid = +answer >= 0;
    if (!formValid) {
      return;
    }
    if (+answer === +rightAnswer) {
      setStatus("you got it");
      setStarted(false);
      settrials(0)
    setWin(`Congratulations ${FullName} you did it!`)
      
    } else if (+answer < +rightAnswer) {
      setStatus("too low");
    } else {
      setStatus("too high");
    }
  };

  const start = () => {
    setRightAnsweer(Math.ceil(Math.random() * 10));
    setStarted(true);
    setWin("Almost there hero")
  };

  return (
    <div className="bg-black h-screen w-full">
      <div className="relative top-[60px] mx-5 ">
        <Layout />
        <div className="flex justify-between">
          <div className="flex flex-col gap-y-2">
            <span className="text-[20px] text-pink-500 border w-fit rounded-lg px-3">
              Player name: {FullName}
            </span>
            <span className="text-[20px] text-pink-500 border w-fit rounded-lg px-3">
              phone number: {phoneno}
            </span>
          </div>
          <div className="">
            <span className="text-pink-500 text-[20px] border rounded-lg">
              Trials: {trials}
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-[25px] text-pink-500 text-center mt-5">
            Guess a number between 1 & 10 to play the game
          </h2>
          <div className="justify-center flex items-center relative top-[40px]">
            {started ? (
              <div>
                <form onSubmit={submit} className="flex gap-x-4">
                  <div className="flex gap-x-4 items-center">
                    <label className="text-bold text-white text-[18px]">
                      Player answer
                    </label>
                    <input
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      className="input select textarea"
                    />
                  </div>
                  <button
                    type="submit"
                    className="text-white primary-button"
                    onClick={() => settrials(trials + 1)}
                  >
                    check
                  </button>
                  
                </form>
                <div className="text-red-400 text-[20px] relative top-[50px] font-bold text-center">{status}</div>
              </div>
            ) : (
              <span
                className="text-[20px] p-4 bg-yellow-400 rounded-lg cursor-pointer"
                onClick={() => start()}
              >
                Start the game
              </span>
            )}
          </div>
          <div className="text-white relative text-center top-[300px] text-bold text-[30px] bg-orange-400 p-2 rounded-full mx-20">
            {win}
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Game), { ssr: false });
