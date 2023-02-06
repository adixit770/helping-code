import axios from "axios";
// BackendUrl =>
export const serUrl = "http://localhost:8080/razerpay";
////////////////

// Get Api =>
export const getApiHandler = async (endPoint) => {
  try {
    const res = await axios.get(serUrl + endPoint);
    console.log("getApiRequest=>", res.data);
    return res.data;
  } catch (err) {
    console.log("getApiResponseErr=>", err);
  }
};
/////////////

// Post Api =>
export const postApiHandler = async (endPoint, amount) => {
  try {
    const res = await axios.post(serUrl + endPoint, amount);
    return res.data;
  } catch (err) {
    console.log("postApiResponseErr++++==>", err);
  }
};
//////////////

// Post File Api =>
// export const postFileApiRequest = async (endPoint, params) => {
//   try {
//     const res = await axios.post(serUrl + endPoint, params);
//     console.log("postApiRequest=>", res);
//     return res.data;
//   } catch (err) {
//     console.log("postApiResponseErr=>", err);
//   }
// };
//////////////

// Put Api =>
// export const putApiRequest = async (endPoint, params) => {
//   try {
//     const res = await axios.put(serUrl + endPoint, params);
//     console.log("putApiRequest=>", res);
//     return res.data;
//   } catch (err) {
//     console.log("postApiResponseErr=>", err);
//   }
// };
//////////////

// Delete Api =>
// export const deleteApiRequest = async (endPoint) => {
//   try {
//     const res = await axios.delete(serUrl + endPoint);
//     console.log("deleteApiRequest=>", res);
//     return res.data;
//   } catch (err) {
//     console.log("deleteApiResponseErr=>", err);
//   }
// };
////////////////
