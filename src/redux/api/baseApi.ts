import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    // baseUrl: "http://localhost:1200/api/v1",
    baseUrl: "https://visit-mars-backend-flame.vercel.app/api/v1",
    credentials: "include",
    // prepareHeaders: (headers, {getState}) => {
    //     const token = (getState() as RootState).auth.token;
    //     if (token) {
    //         headers.set("Authorization", `${token}`);
    //     }
    //     return headers;
    // }
});

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery,
    tagTypes: ["application"],
    endpoints: () => ({})
})