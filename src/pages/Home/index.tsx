import { Badge } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLazySetGetMessageQuery } from 'redux/api/API';
import { messageBody, userMessage } from 'types';

const Home = () => {
  const [chatList, setChatsList] = useState([]);

  const [getMessages, { data }] = useLazySetGetMessageQuery();

  useEffect(() => {
    getMessages('').then((Messages: any) => {
      const groupedArrays: any = Object.values(
        Messages.data?.reduce((groups: any, obj: any) => {
          const key = obj.chatId;
          if (!groups[key]) {
            groups[key] = [];
          }
          groups[key].push(obj);
          return groups;
        }, {})
      );
      setChatsList(groupedArrays);
    });
  }, [data]);

  const timestampFormatter = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;
    return formattedTime;
  };

  const naviagte = useNavigate();

  return (
    <main className='bg-slate-300 h-screen flex justify-center py-[30px] gap-x-[20px]'>
      <div className='w-1/3 h-full bg-white overflow-y-scroll flex flex-col items-center  rounded-md py-[40px]'>
        {chatList.length ? (
          chatList.map((item: messageBody[]) => (
            <div
              className='border-2 w-[90%] m-[10px] flex justify-between px-[10px] py-[5px] cursor-pointer transition-colors hover:bg-slate-200 rounded-lg  shadow-md'
              key={item[0].idMessage}
              onClick={() => naviagte(`/chat-page/${item[0].chatId}`)}
            >
              <div className='flex items-center gap-x-2'>
                <img
                  className='w-[65px] h-auto'
                  src='https://static.thenounproject.com/png/5034901-200.png'
                  alt='default-avatar'
                />
                <div className='flex flex-col'>
                  <h1 className='text-[15px]'>{item[0].chatId.slice(0, -5)}</h1>
                  <p className='text-[15px] overflow-y-hidden'>
                    {item[0].senderName}:<span>{item[0].textMessage}</span>
                  </p>
                </div>
              </div>
              <div className='flex items-center  flex-col justify-center gap-y-1'>
                <p className='font-black text-[10px] '>
                  {timestampFormatter(item[0].timestamp)}
                </p>
                <Badge
                  count={item.length ? item.length : 0}
                  color='green'
                  size='default'
                />
              </div>
            </div>
          ))
        ) : (
          <h1 className='mt-[20px]'>На данный момент новыx сообщений нет </h1>
        )}
      </div>
    </main>
  );
};

export default Home;
//   <h1>{item[0].chatId.slice(0, -5)}</h1>
