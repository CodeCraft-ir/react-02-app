import React, { useState } from "react";
import Counter from "./Components/Counter/Counter";
import Navbar from "./Components/Navbar/Navbar";
import ControlBtn from "./Components/ControlBtns/ControlBtn";

function App(props) {
  const [Counters, setCounters] = useState([0, 0, 0, 0]);
  const handelDeletCounter = (index) => {
    const newCounter = Counters.filter((v, i) => {
      return i != index;
    });
    setCounters(newCounter);
  };
  const handelPlusValue = (index) => {
    let newCounters =[...Counters];
    newCounters[index] = newCounters[index] + 1;
    setCounters(newCounters);
  };
  const handelDecriseValue = (index) => {
    let newCounters = [...Counters];
    newCounters[index] = newCounters[index] - 1;
    setCounters(newCounters);
  };
  const handelReset=(index)=>{
    setCounters([0,0,0,0])
  }
  return (
    <React.Fragment>
      <Navbar />
      <div className="Container flex flex-col gap-5 w-2/4 mx-auto justify-center">
        <ControlBtn functions={{handelReset} }/>
        {Counters.map((item, index) => {
          return (
            <Counter
              number={item}
              functions={ {handelDeletCounter,handelDecriseValue,handelPlusValue} }
              index={index}
              key={index}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default App;
