import React from "react";
import Marquee from "react-fast-marquee";

function Layout() {
  return (
    <div>
      <div className="fixed top-0 right-0 left-0 h-[50px] bg-blue-300">
        <h2 className="text-center text-[30px] font-bold text-pink-500">High Low Game</h2>

      </div>
      <div className="fixed bottom-0 right-0 left-0 h-[50px] bg-blue-300">
        <Marquee
          pauseOnClick={true}
          speed={50}
          className="  font-bold"
        >
            Hello, world welcome to the ultimate guessing game , click start and continue guessing numbers until you win
        </Marquee>
      </div>
    </div>
  );
}

export default Layout;
