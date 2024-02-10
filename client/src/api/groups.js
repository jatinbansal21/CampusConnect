import axios from 'axios';
axios.defaults.withCredentials = true

const serverUrl = 'https://umiam-kriti24.onrender.com';

export const allGroups = async () => {
    const response = await axios.get(`${serverUrl}/api/groups/`); 
  //  console.log(response.data.groups);
    return response.data.groups; 
}

export const getGroup = async (id) => {
  const response = await axios.get(`${serverUrl}/api/groups/${id}`); 
 // console.log(response.data);
  return response.data; 
}

export const createGroup = async (data) => {
  const response = await axios.post(`${serverUrl}/api/groups/create`,data); 
 // console.log(response.data);
  return response.data; 
}

export const createChat = async (data) => {
  //console.log(data);
  const response = await axios.post(`${serverUrl}/api/groups/group-chat`,data); 
  return response.data; 
}

export const getGroupChat = async (id) => {
  const response = await axios.get(`${serverUrl}/api/groups/group-chat/${id}`); 
 // console.log(response.data);
  return response.data.groupChat[0].chats; 
}

export const joinGroup = async (data) => {
  console.log(data);
  const response = await axios.post(`${serverUrl}/api/groups/group-join`, data); 
  // console.log(data);
  return response.data; 
}

