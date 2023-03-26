import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utilities/fixedData";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  <Card sx={{ width: { xs: '98%', sm: '358px', md: "280px", }, boxShadow: "none", marginRight:"1em", background:"#0f0f0f"}}>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
      <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
        sx={{ width: { xs: '100%', sm: '358px'}, height: 150 }} 
       />
    </Link>
   
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <Typography variant="p" fontWeight="bold" color="#ebeff1" fontSize="0.8rem">
          {snippet?.title.slice(0, 70) || demoVideoTitle.slice(0, 70)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" color="gray" fontSize="0.7rem">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
  
  </Card>
);

export default VideoCard