import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { demoChannelTitle, demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => {
  if (channelDetail?.length) return "Loading Channel Details";
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "35px", md: "320px" },
        height: "326px",
        margin: "auto",
        marginTop: marginTop,
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title || demoChannelTitle}
            sx={{
              borderRadius: "50%",
              height: 180,
              width: 180,
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h5">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
          {/* <Typography variant="h6" className=" container-fluid">
            {channelDetail?.snippet?.description}
          </Typography> */}

          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
