import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Feed,
  Navbar,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";
//#"70ac684616msh1226d54380229a3p1921d6jsnb6752204aa51"
const App = () => (
  <div>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </div>
);

export default App;
