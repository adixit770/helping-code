import axios from 'axios';

const serverUrl = "http://spyss.dollopinfotech.com";

// get api
export const getRequest = async (endPoint) => {
    try{
  const res = await axios.get(serverUrl+endPoint);
  return res.data;
    }
  catch(err){
    return console.log("api-err=>",err);
  }
};

// post api

export const postRequest = async (endPoint, value) => {
  try{
  const res = await axios.post(serverUrl+endPoint,value);
  return res.data;
  }
  catch(err){
    return console.log("api-err=>",err);
  }
};

// put api

export const putRequest = async (endPoint, value) => {
  try{
  const res = await axios.put(serverUrl+endPoint,value);
  return res.data;
  }
  catch(err){
    return console.log("api-err=>",err);
  }
};

// delete api

export const deleteRequest = async (endPoint) => {
   
    try{
        const res = await axios.delete(serverUrl+endPoint);
        return res.data;
        }
        catch(err){
        return  console.log("api-err=>",err);
        }
  
    
};
