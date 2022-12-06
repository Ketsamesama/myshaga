import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from 'shared/api';
import type { IStateApp, IApps } from 'widgets/applications/Applications.type';

export const appliationsApi = createApi({
  reducerPath: 'appliations',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    getApplications: build.query<IApps[], string>({
      query: (page: string) => ({
        url: '/applications',
        params: {
          page,
        },
      }),
    }),
  }),
});

export const { useGetApplicationsQuery } = appliationsApi;
