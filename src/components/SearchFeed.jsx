import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/FetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  //change according to selected category
  // const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  //action on page load
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight={"bold"}
        mb={2}
        sx={{ color: "#fff" }}
      >
        Search Result for :
        <span style={{ color: "#f31503" }}> {searchTerm} </span>Videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
