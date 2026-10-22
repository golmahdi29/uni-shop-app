"use client";

import { FaAngleUp } from "react-icons/fa6";

export default function GoToUp() {
  const goToUpHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="md:mt-28 mt-20 mb-10 flex gap-2 items-center justify-center text-sky-600 cursor-pointer hover:text-sky-500 transition-colors font-medium text-sm"
      onClick={goToUpHandler}
    >
      <div>رفتن به بالا</div>
      <div>
        <FaAngleUp />
      </div>
    </div>
  );
}
