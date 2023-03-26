import React, { useEffect, useState } from "react";
import { Box, Stack} from "@mui/material";
import { fetchFromAPI } from "../utilities/axiosApi";
import { Videos, SubNav,Footer } from ".";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <>
    <Stack >
      <Box sx={{ height: { sx: "auto", md: "22vh" }, px: { sx: 0, md: 2} }}>
        <SubNav selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </Box>
    </Stack>
    <Videos videos={videos} />
    <Footer/>
    </>
  );
};

export default Feed;