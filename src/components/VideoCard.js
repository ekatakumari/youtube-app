import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul className="flex flex-col">
        <l1 className="font-bold py-2">{title}</l1>
        <l1>{channelTitle}</l1>
        <l1>{statistics.viewCount} Views</l1>
      </ul>
    </div>
  );
};

export default VideoCard;
