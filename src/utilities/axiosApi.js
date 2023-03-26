import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    regionCode: 'US',
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '86ec46e63emsh1cd3e03737b82c8p1e222bjsn2efafd9629c6',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  },
};

// '0ee90e378dmsh6016e6ffd930776p11eed6jsn244d79c20b87'
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};