import React, { useState } from "react";
import NavTop from "./NavTop";
import { Slider } from "@mui/material";
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
  handleSort
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
  return (
    <aside className="relative flex flex-col justify-between w-[17%] px-2 py-4 h-full rounded-r-lg bg-[#2864F6] shadow-css">
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
          array={["Normal", "2x speed", "3x speed", "4x speed"]}
        />
        <Dropdown
          state={sorting}
          setState={setSorting}
          isOpen={sortOpen}
          setIsOpen={setSortOpen}
          nativeOpen={isOpen}
          setNativeOpen={setIsOpen}
          array={["selection sort", "bubble sort"]}
        />
      </section>
      <button
        className="w-full py-2 bg-white rounded-lg text-xl text-[#2864F6] font-semibold"
        onClick={() => {
          handleSort(sorting,speed);
        }}
      >
        Get Sorted
      </button>
    </aside>
  );
};

export default BottomNavbar;
