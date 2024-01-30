import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


type TTasks = {
    id: string;
    text: string;
}

export const tasksApi = createApi({
    reducerPath: 'tasks',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/"
    }),
    endpoints: (builder) => ({
        getAllTasks: builder.query<TTasks, any>({
            query: () => "tasks",
        })
    })
});

export const {useGetAllTasksQuery} = tasksApi