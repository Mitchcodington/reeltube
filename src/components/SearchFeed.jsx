import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utilities/axiosApi";
import { Footer, Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <>
    <Box p={2} minHeight="95vh">
      <Typography variant="h6" fontWeight={900} color="white" mb={3}  ml={1} >
        Search Results for <span style={{ color: "white" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex" flexWrap="wrap" marginLeft={-1}>
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos videos={videos} />} 
      
      </Box>
    </Box>
    <Footer/>
    </>
  );
};

export default SearchFeed;