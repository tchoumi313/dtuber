import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/FetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then(
      (data) => setChannelDetail(data?.items[0]),
      [id]
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        console.log(data);
        setVideos(data?.items);
      },
      [id]
    );
  });
  console.log(channelDetail, videos);

  return (
    <Box minHeight={"95vh"}>
      <Box>
        <div
          style={{
            background:
              "radial-gradient(circle, rgba(49,49,166,1) 27%, rgba(14,212,217,1) 34%, rgba(49,49,166,1) 51%)",

            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box display={"flex"} p={2}>
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
