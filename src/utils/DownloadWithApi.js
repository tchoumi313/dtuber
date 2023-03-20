import axios from "axios";

const BASE_URL = "https://youtube-video-download-info.p.rapidapi.com/dl";

const options = {
  //method: "GET",
  //url: 'https://youtube-video-download-info.p.rapidapi.com/dl',
  //params: { id: "UxxajLWwzqY" },
  headers: {
    "X-RapidAPI-Key": "c8565a1d17msh0f92ae73e1605b4p158570jsnb9a220ae652a",
    "X-RapidAPI-Host": "youtube-video-download-info.p.rapidapi.com",
  },
};

export const DownloadWithAPI = async (id) => {
  // console.log(id);
  // const navigate = useNavigate();
  const { data } = await axios.get(`${BASE_URL}?id=${id}`, options);
  //console.log(data?.link?.[243][0]);
  //navigate(`${data?.link?.[243][0]}`);
  const link = data?.link?.[243][0];

  return link; //JSON.stringify(link, null, 2);
};
