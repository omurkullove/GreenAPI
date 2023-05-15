import { credentialsType } from 'types';

export const CREDENTIALS: credentialsType = JSON.parse(
  localStorage.getItem('credentials') || '{}'
);
