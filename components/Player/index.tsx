"use client";

import { useClient } from "@/hooks/useClient";
import React from "react";
import ReactPlayer from "react-player";
import { VideoSkeleton } from "../Skeleton";

const Player = ({ videoLink }: { videoLink: string }) => {
  const { isClient } = useClient();

  return (
    <div className="relative w-full max-w-[800px] h-[450px] rounded-2xl overflow-hidden my-6 md:my-8">
      {isClient ? (
        <ReactPlayer width="100%" height="100%" url={videoLink} />
      ) : (
        <VideoSkeleton />
      )}
    </div>
  );
};
export default Player;
