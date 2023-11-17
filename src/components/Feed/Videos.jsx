import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos, direction }) => {
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="start"
      gap={2}
    >
      {videos?.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;

/* here we wanna render a video card but there will be two diffrent videos that we are getting and even not a video
          for ecample if we search jsmastery we are gonna get a channel with its videos so we need to take in
          consideration  are we going to show the profile or the videoand that by ckecking wich  data does it return */
/* we are just saying if the item has an id the id points to a video id we wanna render a video component */
/* we are just saying if the item has an id the id points to a channel id we wanna render a channel component */
