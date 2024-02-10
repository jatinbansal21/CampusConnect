import axios from "axios";
import handleAxiosError from "../Error/Error";

const serverUrl = 'https://umiam-kriti24.onrender.com';

export const allCourses = async () => {
  try {
    const response = await axios.get(`${serverUrl}/api/courses/get`);

    return response.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};

export const CoursesById = async (authorId) => {
  try {
    const response = await axios.get(
      `${serverUrl}/api/courses/getById/` + authorId
    );

    return response.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};

export const allFeedbacks = async (courseId) => {
  try {
    const response = await axios.get(
      `${serverUrl}/api/courses/getFeedbacks/` + courseId
    );

    return response.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};

export const createCourse = async (data) => {
  try {
    const response = await axios.post(
      `${serverUrl}/api/courses/create`,
      data
    );
  //  console.log(response.data);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

export const createFeedback = async (courseId, data) => {
  try {
    const response = await axios.post(
      `${serverUrl}/api/courses/feedback/` + courseId,
      data
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

export const updateCourse = async (courseId, data) => {
  try {
    const response = await axios.put(
      `${serverUrl}/api/courses/update/` + courseId,
      data
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

export const currentUser = async () => {
  try {
    const response = await axios.get(`${serverUrl}/api/user/userData`);
    return response.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};

export const getUser = async (id) => {
    const response = await axios.get(`${serverUrl}/api/user/find/`+id);
    // console.log(response.data.user[0])
    return response.data.user[0];
}

