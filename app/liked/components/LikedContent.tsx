"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import LikeButton from "@/app/components/LikeButton";
import MediaItem from "@/app/components/MediaItem";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types/types";
import useOnPlay from "@/hooks/useOnPlay";

interface LikedContentProps {
  songs: Song[];
}

const LikedContent: React.FC<LikedContentProps> = ({ songs }) => {
  const router = useRouter();
  const { isLoading, user } = useUser();
  const onPlay = useOnPlay(songs);

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [isLoading, user, router]);

  if (!songs.length) {
    return (
      <div className="flex w-full flex-col gap-y-2 px-6 text-neutral-400">
        No liked songs.
      </div>
    );
  }
  return (
    <div className="flex w-full flex-col gap-y-2 p-6">
      {songs.map((song: any) => (
        <div key={song.id} className="flex w-full items-center gap-x-4">
          <div className="flex-1">
            <MediaItem onClick={(id: string) => onPlay(id)} data={song} />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default LikedContent;
