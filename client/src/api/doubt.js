import axios from "axios";
axios.defaults.withCredentials = true;

const serverUrl = 'https://umiam-kriti24.onrender.com';

export const allDoubts = async () => {
  const response = await axios.get(`${serverUrl}/api/doubts`);
 // console.log(response.data.doubts);
  return response.data.doubts;
};

export const userDoubts = async () => {
  const response = await axios.get(`${serverUrl}/api/user/doubts`);
  return response.data;
};

export const createDoubt = async (data) => {
 // console.log(data);
  const response = await axios.post(
    `${serverUrl}/api/doubts/create`,
    data
  );
  return response.data;
};

export const getRepliesOfDoubt = async (doubtId) => {
 // console.log(doubtId);
  const response = await axios.get(
    `${serverUrl}/api/doubts/${doubtId}/replies`
  );
  //console.log(response.data.requiredReplies)
  return response.data.requiredReplies;
};

export const replyDoubt = async (doubtId, data) => {
 // console.log(doubtId);
  const response = await axios.post(
    `${serverUrl}/api/doubts/${doubtId}/replies`,
    data
  );
  return response.data;
};

export const currentUserDoubts = async (id) => {
 // console.log(id);
  const response = await axios.get(
    `${serverUrl}/api/doubts/user/${id}`
  );
 // console.log(response.data, "jel");
  return response.data;
};
