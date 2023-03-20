import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: { maxResults: "50" },
  headers: {
    "X-RapidAPI-Key": "c8565a1d17msh0f92ae73e1605b4p158570jsnb9a220ae652a", //process.env.REACT_APP_RAPID_API_KEY, //"70ac684616msh1226d54380229a3p1921d6jsnb6752204aa51",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
/*
axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
*/

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
