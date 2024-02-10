import axios from "axios";
axios.defaults.withCredentials = true;

const serverUrl = 'https://umiam-kriti24.onrender.com';

export const getUser = async (storedToken) => {
  try {
    const token = storedToken;
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios.get(`${serverUrl}/api/user`, config);
 //   console.log(response.data.user[0]);
    return response.data.user[0];
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const updateUser = async (userId, data) => {
 // console.log(userId);
  const response = await axios.put(
    `${serverUrl}/api/user/update/${userId}`,
    data
  );
  return response.data;
};

export const findAllUsers = async () => {
  const response = await axios.get(`${serverUrl}/api/user`);
//  console.log(response.data);
  return response.data.users;
};

export const findUser = async (id) => {
  const response = await axios.get(`${serverUrl}/api/user/find/${id}`); 
 // console.log(response.data.user);
  return response.data.user; 
}
