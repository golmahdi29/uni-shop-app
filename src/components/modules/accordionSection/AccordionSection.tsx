"use client";

import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function AccordionSection({ title, children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/20 md:border-none pb-4 md:pb-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between md:cursor-default"
      >
        <span className="font-bold text-lg">{title}</span>

        <IoChevronDown
          className={`md:hidden transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`
          overflow-hidden transition-all duration-300
          ${
            open
              ? "max-h-96 mt-4"
              : "max-h-0 md:max-h-96 md:mt-4"
          }
        `}
      >
        {children}
      </div>
    </div>
  );
}