"use client";

import React from "react";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

interface LibraryProps {}

const Library: React.FC<LibraryProps> = () => {
  const onClick = () => {};

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 py-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-base font-medium text-neutral-400">Your Library</p>
        </div>
        <AiOutlinePlus
          size={20}
          className="cursor-pointer text-neutral-400 transition hover:text-white"
          onClick={onClick}
        />
      </div>
      <div className="mt-4 flex flex-col gap-y-2 px-3">List of songs</div>
    </div>
  );
};

export default Library;
