import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, Channel, Footer } from "./";
import { fetchFromAPI } from "../utilities/axiosApi";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <>
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'300px',
          background: 'black 100%',
          zIndex: 10,
        }} />
        <Channel channelDetail={channelDetail} marginTop="-130px" />
      </Box>
      <Box p={2} display="flex" flexWrap="wrap">
      <Box sx={{ mr: { sm: '100px' } }} marginLeft="-7em"/>
        <Videos videos={videos} />
      </Box>
    </Box>
    <Footer/>
    </>
  );
};

export default ChannelDetail;