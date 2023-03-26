import React from "react";
import { Stack, Box } from "@mui/material";

import { Channel, Loading, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return <Loading />;
  
  return (
    <Stack direction={direction || "row"} flexWrap="wrap"marginLeft={2} alignItems="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <Channel channelDetail={item} />}
        </Box>
      ))}
    </Stack>
    
  );
}

export default Videos;