"use client";

import { useClient } from "@/hooks/useClient";
import React from "react";
import ReactPlayer from "react-player";
import { VideoSkeleton } from "../Skeleton";

const Player = ({ videoLink }: { videoLink: string }) => {
  const { isClient } = useClient();

  return (
    <div className="relative w-full h-[300px] md:h-[650px] rounded-2xl overflow-hidden my-6 md:my-8 z-10">
      {isClient ? (
        <>
          <div className="absolute top-0 left-0 w-full h-full -z-[1]">
            <VideoSkeleton />
          </div>

          <ReactPlayer width="100%" height="100%" url={videoLink} controls />
        </>
      ) : (
        <>
          <div className="w-full h-full">
            <VideoSkeleton />
          </div>
        </>
      )}
    </div>
  );
};
export default Player;
