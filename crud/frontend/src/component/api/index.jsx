import axios from 'axios';

export const serverUrl = "http://localhost:8000/api";

// get api
export const getRequest = async (endPoint) => {
    try{
  const res = await axios.get(serverUrl+endPoint);
  return res.data;
    }
  catch(err){
    console.log("api-err=>",err);
  }
};

// post api

export const postRequest = async (endPoint, value) => {
  try{
  const res = await axios.post(serverUrl+endPoint,value);
  return res.data;
  }
  catch(err){
    console.log("api-err=>",err);
  }
}; 

// post image api

export const postImage = async (endPoint, value) => {
  try{
  const res = await axios.post(serverUrl+endPoint,value);
  return res.data;
  }
  catch(err){
    console.log("api-err=>",err);
  }
};

// put api

export const putRequest = async (endPoint, value) => {
  try{
  const res = await axios.put(serverUrl+endPoint,value);
  return res.data;
  }
  catch(err){
    console.log("api-err=>",err);
  }
};

// delete api

export const deleteRequest = async (endPoint) => {
  try{
  const res = await axios.delete(serverUrl+endPoint);
  return res.data;
  }
  catch(err){
    console.log("api-err=>",err);
  }
};
