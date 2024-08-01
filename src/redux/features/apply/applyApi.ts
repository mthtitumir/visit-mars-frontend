import { baseApi } from "../../api/baseApi";

const applyApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addApplication: builder.mutation({
            query: (data) => ({
                url: `/applications`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ["application"]
        })
    }),
});

export const { useAddApplicationMutation } = applyApi;