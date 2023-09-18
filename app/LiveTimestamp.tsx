"use client"


import TimeAgo from "timeago-react";

type Props = {
    time: string;
}

function LiveTimestamp({time}:Props) {
  return (
    <TimeAgo datetime={time}  />
  )
}

export default LiveTimestamp