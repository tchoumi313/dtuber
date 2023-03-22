import axios from "axios";

const BASE_URL = "https://yt-api.p.rapidapi.com/dl";
//"https://youtube-video-stream-download.p.rapidapi.com/api/v1/Youtube/getVideoUrls";

/* const options = {
  //method: "GET",
  //url: 'https://youtube-video-download-info.p.rapidapi.com/dl',
  //params: { id: "UxxajLWwzqY" },
  headers: {
    "X-RapidAPI-Key": "c8565a1d17msh0f92ae73e1605b4p158570jsnb9a220ae652a",
    "X-RapidAPI-Host": "youtube-video-download-info.p.rapidapi.com",
  },
}; */

const options = {
  //method: 'GET',
  //url: 'https://youtube-video-stream-download.p.rapidapi.com/api/v1/Youtube/getVideoUrls/oWUVQ1Nq7FQ',
  headers: {
    "X-RapidAPI-Key": "70ac684616msh1226d54380229a3p1921d6jsnb6752204aa51", //"c8565a1d17msh0f92ae73e1605b4p158570jsnb9a220ae652a",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com", //"youtube-video-stream-download.p.rapidapi.com",
  },
};

export const DownloadWithAPI = async (id) => {
  // console.log(id);
  // const navigate = useNavigate();
  //const { data } = await axios.get(`${BASE_URL}/?id=${id}`, options);
  //console.log(data?.link?.[243][0]);
  const { data } = await axios.get(`${BASE_URL}?id=${id}`, options);
  //navigate(`${data?.link?.[243][0]}`);
  //const link = data?.urls?.videos?.[2].url;
  // console.log(link);
  return data?.formats[2].url; //JSON.stringify(link, null, 2);
};
