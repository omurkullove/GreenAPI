export type credentialsType = {
  idInstance: string;
  apiTokenInstance: string;
  phone: string;
};

export type userMessage = {
  chatId: string;
  message: string;
};

export type messageBody = {
  chatId: string;
  idMessage: string;
  senderId: string;
  senderName: string;
  textMessage: string;
  timestamp: number;
  type: string;
  typeMessage: string;
};
export type chatList = {
  list: messageBody[];
};

export type HistoryMessageType = {
  type: string;
  idMessage: string;
  timestamp: number;
  typeMessage: string;
  chatId: string;
  textMessage: string;
  statusMessage: string;
  sendByApi: boolean;
  senderId?: number;
  senderName?: string;
};
