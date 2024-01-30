import { CreateApi, fetchBaseQuery } from "@reduxjs/toolkit/query";


export const tasksApi = new createApi({
    reducerPath: 'tasks',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/tasks"
    }),
})