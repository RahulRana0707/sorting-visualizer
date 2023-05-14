import { useState } from "react";
import Canvas from "./Components/Canvas";
import BottomNavbar from "./Components/BottomNavbar";
import { delay } from "./Utils/Delay";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  const [speed, setSpeed] = useState("set speed");
  const [sorting, setSorting] = useState("select method");
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
  const handleSort = (algoNumber, speed) => {
    let delayTime =
      speed === "4x speed"
        ? 50
        : speed === "3x speed"
        ? 100
        : speed === "2x speed"
        ? 150
        : 200;
    switch (algoNumber) {
      case "bubble sort":
        const bubbleSort = async () => {
          let len = numbers.length;

          for (let i = 0; i < len - 1; i++) {
            for (let j = 0; j < len - i - 1; j++) {
              await delay(delayTime);
              if (numbers[j] > numbers[j + 1]) {
                const temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
                setNumbers([...numbers]);
              }
            }
          }
        };
        bubbleSort();
        break;
      case "selection sort":
        const selectionSort = async () => {
          const sortedArray = [...numbers];

          for (let i = 0; i < sortedArray.length - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < sortedArray.length; j++) {
              if (sortedArray[j] < sortedArray[minIndex]) {
                minIndex = j;
              }
            }

            // Swap elements
            if (minIndex !== i) {
              await delay(delayTime); // Delay the swap by (i+1) seconds
              const temp = sortedArray[i];
              sortedArray[i] = sortedArray[minIndex];
              sortedArray[minIndex] = temp;
              setNumbers([...sortedArray]);
            }
          }
        };
        selectionSort();
        break;

      default:
        toast.warn("Select Sorting Mehod", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        break;
    }
  };
  return (
    <div className="relative w-full h-full flex flex-row-reverse">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
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
        setSorting={setSorting}
        handleSort={handleSort}
      />
    </div>
  );
}
