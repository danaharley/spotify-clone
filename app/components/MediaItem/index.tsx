import React from "react";
import Image from "next/image";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types/types";

interface MediaItemProps {
  data: Song;
  onClick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
  const imageUrl = useLoadImage(data);

  const handleClick = () => {
    if (onClick) return onClick(data.id);

    // return
  };

  return (
    <div
      className="flex w-full cursor-pointer items-center gap-x-3 rounded-md p-2 hover:bg-neutral-800/50"
      onClick={handleClick}
    >
      <div className="relative min-h-[48px] min-w-[48px] overflow-hidden rounded-md">
        <Image
          src={imageUrl || "/images/music-placeholder.png"}
          alt={data.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="truncate text-white">{data.title}</p>
        <p className="truncate text-sm text-neutral-400">By {data.author}</p>
      </div>
    </div>
  );
};

export default MediaItem;