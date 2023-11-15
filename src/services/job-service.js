import axios from 'axios';

const SERVER_ADDRESS = 'http://localhost:8080';

const JOB_SEARCH_API = 'https://65553f4e63cafc694fe79849.mockapi.io/api/v1/';

const JOB_API = `${SERVER_ADDRESS}/jobs`;

export const getAllJobs = async () => {
  const response = await axios.get(JOB_API);
  const jobs = response.data;
  return jobs;
};

export const getJob = async (jid) => {
  const response = await axios.get(`${JOB_API}/find/${jid}`);
  return response.data;
};

// const JOB_COMPANYS = ['apple', 'google', 'adobe', 'facebook', 'microsoft'];
const JOB_COMPANYS = ['apple', 'google'];

export const getAllJobsSearch = async () => {
  const urls = JOB_COMPANYS.map((url) => `${JOB_SEARCH_API}${url}`);
  const promises = urls.map((url) => axios.get(url));
  console.log(promises)

  return Promise.all(promises).then((values) => {
    const combinedData = values.reduce((acc, cur) => {
      return acc.concat(cur.data);
    }, []);
    return combinedData;
  });
};