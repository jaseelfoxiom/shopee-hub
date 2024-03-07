
import axios from "axios";
import { base_url } from "./Base_Url";

export const ApiCall = async (method, endPoint, data,params,) => {
  console.log("base_url", base_url);
  try {
    const token = localStorage.getItem("token");

    const response = await axios({
      method: method,
      url: `${base_url}${endPoint}`,
      data: data,
      params: params,
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${token}`,
    //   },
    });

    console.log("responseapicall", response);

    return {
      status: response?.status,
      data: response?.data,
      message: response?.data?.message || "",
    };
  } catch (error) {
    console.error("API Error:", error);

    // Handle specific error scenarios, if needed
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return {
        status: error.response.status,
        data: null,
        message: error.response.data.message || "Server Error",
      };
    } else if (error.request) {
      // The request was made but no response was received
      return {
        status: 500,
        data: null,
        message: "No response from server",
      };
    } else {
      // Something happened in setting up the request that triggered an Error
      return {
        status: 500,
        data: null,
        message: "Request setup error",
      };
    }
  }
};
