"use client";

import React from "react";

import SongItem from "@/app/components/SongItem";
import { Song } from "@/types/types";
import useOnPlay from "@/hooks/useOnPlay";

interface PageContentProps {
  songs: Song[];
}

const PageContent: React.FC<PageContentProps> = ({ songs }) => {
  const onPlay = useOnPlay(songs);

  if (!songs.length) {
    return <div className="mt-4 text-neutral-400">No songs available</div>;
  }

  return (
    <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8">
      {songs.map((song) => (
        <SongItem
          key={song.id}
          data={song}
          onClick={(id: string) => onPlay(id)}
        />
      ))}
    </div>
  );
};

export default PageContent;
