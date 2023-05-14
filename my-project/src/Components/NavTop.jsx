import React from "react";

const NavTop = () => {
  return (
    <div className="flex justify-start items-start gap-2 mb-8">
      <strong className="w-10 h-10 rounded-lg glass text-lg text-white grid place-content-center logo-shadow">
        VS
      </strong>
      <div className="flex justify-start items-start flex-col gap-1">
        <h3 className="text-sm text-white font-bold">VisualSort</h3>
        <h4 className="text-xs text-white font-semibold lowercase">
          rr8407084@gmail.com
        </h4>
      </div>
    </div>
  );
};

export default NavTop;
