import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "./";
import { Link } from "react-router-dom";
import { fetchFromAPI } from "../utils/FetchFromAPI";

const Feed = () => {
  //change according to selected category
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  //action on page load
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid rgba(41, 43, 41, 0.623)",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Link to={`mailto:tchouminzikeubd@gmail.com`}>
          <Typography
            className="copyright"
            variant="body2"
            sx={{ mt: "1.5", color: "#fff", padding: "10px" }}
          >
            Copyright 2023 DDTech Art
          </Typography>
        </Link>
      </Box>
      <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight={"bold"}
          mb={2}
          sx={{ color: "#fff" }}
        >
          {selectedCategory} <span style={{ color: "#f31503" }}>Videos</span>
        </Typography>
        {videos.length > 0 && <Videos videos={videos} />}
        {videos.length === 0 && (
          <Typography variant="h2" sx={{ color: "#fff" }}>
            API MAX REQUEST REACH. COME BACK TOMORROW PLEASE!!
          </Typography>
        )}
      </Box>
    </Stack>
  );
};

export default Feed;
