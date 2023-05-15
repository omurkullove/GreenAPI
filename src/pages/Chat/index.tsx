import { Button, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  useSetGetChatHistoryMutation,
  useSetSendMessageMutation,
} from 'redux/api/API';
import { HistoryMessageType } from 'types';

const Chat = () => {
  const { id } = useParams();

  const [getHistory, { data }] = useSetGetChatHistoryMutation();
  const [history, setHistory] = useState<HistoryMessageType[]>([]);
  const [value, setValue] = useState('');

  const [submitMessage, {}] = useSetSendMessageMutation();

  const handleGetHistory = async () => {
    const params = {
      chatId: id,
      count: 10,
    };
    try {
      await getHistory(params).then((res: any) => {
        setHistory(res.data);
        const key = 'senderName';
        const arr = res.data.filter((item: HistoryMessageType) =>
          item.hasOwnProperty(key)
        );
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGetHistory();
  }, []);

  // ВСЕ РАБОТАЕТ, ПРОСТО У МЕНЯ ЛИМИТ УСТАНОВИЛСЯ НА ЗАПРОСЫ, 466/429 ОШИБКА :(
  // ВСЕ РАБОТАЕТ, ПРОСТО У МЕНЯ ЛИМИТ УСТАНОВИЛСЯ НА ЗАПРОСЫ, 466/429 ОШИБКА :(
  // ВСЕ РАБОТАЕТ, ПРОСТО У МЕНЯ ЛИМИТ УСТАНОВИЛСЯ НА ЗАПРОСЫ, 466/429 ОШИБКА :(
  // ВСЕ РАБОТАЕТ, ПРОСТО У МЕНЯ ЛИМИТ УСТАНОВИЛСЯ НА ЗАПРОСЫ, 466/429 ОШИБКА :(
  // ВСЕ РАБОТАЕТ, ПРОСТО У МЕНЯ ЛИМИТ УСТАНОВИЛСЯ НА ЗАПРОСЫ, 466/429 ОШИБКА :(
  // ВСЕ РАБОТАЕТ, ПРОСТО У МЕНЯ ЛИМИТ УСТАНОВИЛСЯ НА ЗАПРОСЫ, 466/429 ОШИБКА :(
  // ВСЕ РАБОТАЕТ, ПРОСТО У МЕНЯ ЛИМИТ УСТАНОВИЛСЯ НА ЗАПРОСЫ, 466/429 ОШИБКА :(
  // ВСЕ РАБОТАЕТ, ПРОСТО У МЕНЯ ЛИМИТ УСТАНОВИЛСЯ НА ЗАПРОСЫ, 466/429 ОШИБКА :(
  // ВСЕ РАБОТАЕТ, ПРОСТО У МЕНЯ ЛИМИТ УСТАНОВИЛСЯ НА ЗАПРОСЫ, 466/429 ОШИБКА :(
  // ВСЕ РАБОТАЕТ, ПРОСТО У МЕНЯ ЛИМИТ УСТАНОВИЛСЯ НА ЗАПРОСЫ, 466/429 ОШИБКА :(
  // ВСЕ РАБОТАЕТ, ПРОСТО У МЕНЯ ЛИМИТ УСТАНОВИЛСЯ НА ЗАПРОСЫ, 466/429 ОШИБКА :(
  // ВСЕ РАБОТАЕТ, ПРОСТО У МЕНЯ ЛИМИТ УСТАНОВИЛСЯ НА ЗАПРОСЫ, 466/429 ОШИБКА :(
  // ВСЕ РАБОТАЕТ, ПРОСТО У МЕНЯ ЛИМИТ УСТАНОВИЛСЯ НА ЗАПРОСЫ, 466/429 ОШИБКА :(
  // ВСЕ РАБОТАЕТ, ПРОСТО У МЕНЯ ЛИМИТ УСТАНОВИЛСЯ НА ЗАПРОСЫ, 466/429 ОШИБКА :(
  // ВСЕ РАБОТАЕТ, ПРОСТО У МЕНЯ ЛИМИТ УСТАНОВИЛСЯ НА ЗАПРОСЫ, 466/429 ОШИБКА :(
  // ВСЕ РАБОТАЕТ, ПРОСТО У МЕНЯ ЛИМИТ УСТАНОВИЛСЯ НА ЗАПРОСЫ, 466/429 ОШИБКА :(
  // ВСЕ РАБОТАЕТ, ПРОСТО У МЕНЯ ЛИМИТ УСТАНОВИЛСЯ НА ЗАПРОСЫ, 466/429 ОШИБКА :(
  // ВСЕ РАБОТАЕТ, ПРОСТО У МЕНЯ ЛИМИТ УСТАНОВИЛСЯ НА ЗАПРОСЫ, 466/429 ОШИБКА :(
  // ВСЕ РАБОТАЕТ, ПРОСТО У МЕНЯ ЛИМИТ УСТАНОВИЛСЯ НА ЗАПРОСЫ, 466/429 ОШИБКА :(
  // ВСЕ РАБОТАЕТ, ПРОСТО У МЕНЯ ЛИМИТ УСТАНОВИЛСЯ НА ЗАПРОСЫ, 466/429 ОШИБКА :(
  // ВСЕ РАБОТАЕТ, ПРОСТО У МЕНЯ ЛИМИТ УСТАНОВИЛСЯ НА ЗАПРОСЫ, 466/429 ОШИБКА :(
  // ВСЕ РАБОТАЕТ, ПРОСТО У МЕНЯ ЛИМИТ УСТАНОВИЛСЯ НА ЗАПРОСЫ, 466/429 ОШИБКА :(
  // ВСЕ РАБОТАЕТ, ПРОСТО У МЕНЯ ЛИМИТ УСТАНОВИЛСЯ НА ЗАПРОСЫ, 466/429 ОШИБКА :(
  // ВСЕ РАБОТАЕТ, ПРОСТО У МЕНЯ ЛИМИТ УСТАНОВИЛСЯ НА ЗАПРОСЫ, 466/429 ОШИБКА :(
  // ВСЕ РАБОТАЕТ, ПРОСТО У МЕНЯ ЛИМИТ УСТАНОВИЛСЯ НА ЗАПРОСЫ, 466/429 ОШИБКА :(
  // ВСЕ РАБОТАЕТ, ПРОСТО У МЕНЯ ЛИМИТ УСТАНОВИЛСЯ НА ЗАПРОСЫ, 466/429 ОШИБКА :(

  const timestampFormatter = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;
    return formattedTime;
  };

  const handleSubmit = async () => {
    try {
      const data = {
        chatId: id ?? '',
        message: value,
      };
      const params = {
        chatId: id,
        count: 10,
      };
      await submitMessage(data);
      await getHistory(params);
      setValue('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className='bg-slate-300 h-screen flex flex-col justify-center items-center '>
      <div className='h-[10%] bg-white text-black] w-[85%] px-[20px] py-[10px] rounded-t-lg'>
        <h1>ID чата : {id}</h1>
      </div>
      <div className='w-[85%] h-[75%] bg-white flex flex-col bg-wallpaper '>
        <div className=' h-[93%]   flex flex-col-reverse overflow-y-scroll px-[20px] py-[20px]'>
          {history?.map((message) => (
            <div
              className={`flex ${
                message.type === 'outgoing' ? 'justify-end' : 'justify-start'
              }`}
              key={message.idMessage}
            >
              <div
                className={`text-black ${
                  message.type === 'outgoing' ? 'bg-green-200' : 'bg-white'
                } rounded-lg px-[10px] py-[5px] w-fit mt-[10px] max-w-xs  min-w-[200px] flex-col `}
              >
                {message?.senderName ? <p>{message.senderName} :</p> : ''}

                {message.textMessage ? message.textMessage : 'аудиосообщение*'}
                <div className='text-[15px] text-end'>
                  {timestampFormatter(message.timestamp)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='h-[15%] flex bg-slate-200  py-[15px] px-[20px] gap-x-3'>
          <Input
            className='text-lg'
            placeholder='Отправить сообщение'
            value={value}
            onChange={(e: any) => setValue(e.target.value)}
          />
          <Button className='font-black h-full bg-white' onClick={handleSubmit}>
            Отправить
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Chat;
