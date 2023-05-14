import React, { useState } from "react";
import NavTop from "./NavTop";
import { Slider, Typography } from "@mui/material";
import Dropdown from "./Dropdown";
const BottomNavbar = ({
  numbers,
  setNumbers,
  range,
  setRange,
  randomizeArray,
  speed,
  setSpeed,
  sorting,
  setSorting,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const handleRangeChange = (e) => {
    const newRange = parseInt(e.target.value);
    setRange(newRange);

    const newNumbers = [];
    for (let i = 0; i < newRange; i++) {
      const randomNumber = Math.floor(Math.random() * 401) + 100;
      newNumbers.push(randomNumber);
    }
    setNumbers(newNumbers);
  };
  const handleSort = () => {
    const len = numbers.length;

    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        setTimeout(() => {
          if (numbers[j] > numbers[j + 1]) {
            const temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
            setNumbers([...numbers]);
          }
        }, (i * len + j) * 20); // Delay between iterations
      }
    }
  };
  return (
    <aside className="flex flex-col justify-between w-[17%] px-2 py-4 h-full rounded-r-lg bg-[#2864F6] shadow-css">
      <section className="flex justify-start flex-col gap-4">
        <NavTop />
        <div className="w-full px-4 flex justify-start items-start flex-col gap-4">
          <span className="text-white font-bold text-lg">Length : {range}</span>
          <Slider
            max={100}
            min={30}
            value={range}
            onChange={handleRangeChange}
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
            sx={{
              color: "white",
            }}
          />
        </div>
        <button
          className="w-full px-3 py-2 rounded-lg glass shadow-css cursor-pointer text-white font-semibold capitalize"
          onClick={randomizeArray}
        >
          Randomize
        </button>
        <Dropdown
          state={speed}
          setState={setSpeed}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          nativeOpen={sortOpen}
          setNativeOpen={setSortOpen}
          array={["Normal", "2X Speed", "3X Speed", "4X Speed"]}
        />
        <Dropdown
          state={sorting}
          setState={setSorting}
          isOpen={sortOpen}
          setIsOpen={setSortOpen}
          nativeOpen={isOpen}
          setNativeOpen={setIsOpen}
          array={["Quick Sort", "Merge Sort"]}
        />
      </section>
      <button
        className="w-full py-2 bg-white rounded-lg text-xl text-[#2864F6] font-semibold"
        onClick={handleSort}
      >
        Get Sorted
      </button>
    </aside>
  );
};

export default BottomNavbar;
