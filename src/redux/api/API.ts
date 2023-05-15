import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HistoryMessageType, credentialsType, userMessage } from 'types';
import { CREDENTIALS } from 'utils';

export const whatsAppAPI = createApi({
  reducerPath: 'whatsAppAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.green-api.com' }),
  endpoints: (build) => ({
    setSendMessage: build.mutation<userMessage, userMessage>({
      query: (data) => ({
        url: `waInstance${CREDENTIALS.idInstance}/SendMessage/${CREDENTIALS.apiTokenInstance}`,
        method: 'POST',
        body: data,
      }),
    }),
    setGetMessage: build.query({
      query: () => ({
        url: `waInstance${CREDENTIALS.idInstance}/lastIncomingMessages/${CREDENTIALS.apiTokenInstance}/?minutes=360`,
      }),
    }),
    setGetChatHistory: build.mutation({
      query: (params) => ({
        url: `waInstance${CREDENTIALS.idInstance}/GetChatHistory/${CREDENTIALS.apiTokenInstance}/?count=10`,
        method: 'POST',
        body: params,
      }),
    }),
  }),
});

export const {
  useSetSendMessageMutation,
  useSetGetMessageQuery,
  useLazySetGetMessageQuery,
  useSetGetChatHistoryMutation,
} = whatsAppAPI;
