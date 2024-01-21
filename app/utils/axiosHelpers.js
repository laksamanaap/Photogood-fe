import axios, { AxiosHeaders, AxiosRequestConfig } from "axios";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_DOMAIN,
  params: {
    token: "$2y$12$I.VLboReme8.LROhx1ehx.N7y6Mu5vkSD6ySemUJKdhUtTqyJRGMe", // Temporary, soon will be updated using localStorage or cookies
  },
});

export default client;
