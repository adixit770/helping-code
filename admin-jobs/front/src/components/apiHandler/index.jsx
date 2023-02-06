import axios from "axios";

export const serverUrl = "http://localhost:8000/api";

// get api
const getRequest = async (endPoint) => {
  try {
    const res = await axios.get(serverUrl + endPoint);
    return res.data;
  } catch (err) {
    console.log("api-err=>", err);
  }
};

// post api

const postRequest = async (endPoint, value) => {
  try {
    const res = await axios.post(serverUrl + endPoint, value);
    console.log("api handeler==>", res);
    return res.data;
  } catch (err) {
    console.log("api-err=>", err);
  }
};

// put api

const putRequest = async (endPoint, value) => {
  try {
    const res = await axios.put(serverUrl + endPoint, value);
    return res.data;
  } catch (err) {
    console.log("api-err=>", err);
  }
};

// delete api

const deleteRequest = async (endPoint) => {
  try {
    const res = await axios.delete(serverUrl + endPoint);
    return res.data;
  } catch (err) {
    console.log("api-err=>", err);
  }
};

export { getRequest, postRequest, putRequest, deleteRequest };
