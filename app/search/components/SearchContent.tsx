"use client";

import React from "react";

import { Song } from "@/types/types";
import MediaItem from "@/app/components/MediaItem";

interface SearchContentProps {
  songs: Song[];
}

export const SearchContent: React.FC<SearchContentProps> = ({ songs }) => {
  if (!songs.length) {
    return (
      <div className="flex w-full flex-col gap-y-2 px-6 text-neutral-400">
        No Songs found
      </div>
    );
  }
  return (
    <div className="flex w-full flex-col gap-y-2 px-6">
      {songs.map((song) => (
        <div key={song.id} className="flex w-full items-center gap-x-4">
          <div className="flex-1">
            <MediaItem data={song} onClick={() => {}} />
          </div>
        </div>
      ))}
    </div>
  );
};
