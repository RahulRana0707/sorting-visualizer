import React from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
const Dropdown = ({ isOpen, setIsOpen, array, state, setState,nativeOpen,setNativeOpen}) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <button
        className="flex justify-between items-center px-3 py-2 rounded-lg glass shadow-css cursor-pointer"
        onClick={() => {
          setIsOpen((prev) => !prev);
          nativeOpen && setNativeOpen(false);
        }}
      >
        <div className="flex justify-start items-start gap-2 text-lg text-white font-semibold">
          <span>{state}</span>
        </div>
        {isOpen ? (
          <IoMdArrowDropup className="text-lg text-white font-semibold" />
        ) : (
          <IoMdArrowDropdown className="text-lg text-white font-semibold" />
        )}
      </button>
      <div>
        {isOpen ? (
          <>
            <ul className="flex justify-start items-center flex-col rounded-lg glass shadow-css cursor-pointer">
              {array.map((list,index) => {
                return (
                  <li
                  key={index}
                    className="w-full text-white font-bold flex justify-between items-center px-3 py-2 hover:bg-gray-300 hover:text-[#2864F6]"
                    onClick={() => {
                      setState(list.toLowerCase());
                      setIsOpen((prev) => !prev);
                    }}
                  >
                    {list}
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
