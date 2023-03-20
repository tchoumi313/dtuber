import { Link } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
  demoChannelTitle,
  demoChannelUrl,
} from "../utils/constants";

import { DownloadWithAPI } from "../utils/DownloadWithApi";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  const [link, setLink] = useState(null);
  //const navigate = useNavigate();
  useEffect(() => {
    DownloadWithAPI(videoId).then((data) => {
      setLink(data);
    });
  }, [videoId]);
  const handleClicked = (e) => {
    //const link =
    DownloadWithAPI(videoId);
    /* e.preventDefault();
    console.log(link);
    navigate(`${link}`); */
  };
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 2,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px", md: "320px" }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: 106 }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight={"bold"} color="#fff">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight={"bold"} color="gray">
            {snippet?.channelTitle.slice(0, 60) ||
              demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: 2 }} />
          </Typography>
        </Link>
        <Link to={`${link}`}>
          <Typography variant="h6" color={"#EE1606EE"}>
            Download
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
