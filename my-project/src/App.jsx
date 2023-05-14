import { useState } from "react";
import Canvas from "./Components/Canvas";
import BottomNavbar from "./Components/BottomNavbar";

export default function App() {
  const [speed,setSpeed] = useState("Set Speed")
  const[sorting,setSorting] = useState("Select Method")
  const [numbers, setNumbers] = useState([
    320, 465, 203, 190, 246, 408, 354, 422, 186, 399, 227, 312, 108, 425, 497,
    186, 431, 154, 392, 298, 112, 429, 206, 267, 318, 478, 315, 430, 131, 442,
  ]);
  const [range, setRange] = useState(30);
  const randomizeArray = () => {
    var arrayLength = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
    var array = [];

    for (var i = 0; i < arrayLength; i++) {
      var randomNumber = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
      array.push(randomNumber);
    }

    setNumbers(array);
    setRange(array.length);
  };
  return (
    <div className="w-full h-full flex flex-row-reverse">
      <Canvas numbers={numbers} setNumbers={setNumbers} />
      <BottomNavbar
        numbers={numbers}
        range={range}
        setRange={setRange}
        setNumbers={setNumbers}
        randomizeArray={randomizeArray}
        speed={speed}
        setSpeed={setSpeed}
        sorting={sorting}
        setSorting= {setSorting}
      />
    </div>
  );
}
