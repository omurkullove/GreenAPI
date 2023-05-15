import React from 'react';
import { credentialsType } from 'types/index';
import { useNavigate } from 'react-router-dom';

import { Button, Input, Form, message } from 'antd';

const PreviewForm = () => {
  const navigate = useNavigate();

  const InputUIClassName =
    'w-3/4 px-[17px] py-[10px] m-[10px] placeholder:font-bold';

  // Save data to localStorage
  const SaveToLS = (values: credentialsType) => {
    message.success('Вы успешно вошли!');
    localStorage.setItem('credentials', JSON.stringify(values));
    navigate('/home-page');
  };

  return (
    <div className='border-2 w-min p-[20px] flex flex-col items-center bg-slate-100'>
      <div className='w-full text-center mx-[100px]'>
        <h1 className='text-3xl font-semibold'>Добро пожаловать!</h1>
        <h3 className='mt-[10px]'>Введите "idInstance" и "apiTokenInstance"</h3>
      </div>
      <Form
        className='w-full  text-center m-[20px]'
        name='basic'
        onFinish={SaveToLS}
      >
        <Form.Item
          name='idInstance'
          rules={[
            { required: true, message: 'Пожалуйста введите "idInstance" ' },
          ]}
        >
          <Input placeholder='idInstance' className={InputUIClassName} />
        </Form.Item>
        <Form.Item
          name='apiTokenInstance'
          rules={[
            {
              required: true,
              message: 'Пожалуйста введите "apiTokenInstance" ',
            },
          ]}
        >
          <Input placeholder='apiTokenInstance' className={InputUIClassName} />
        </Form.Item>
        <Form.Item
          name='phone'
          rules={[
            {
              required: true,
              message: 'Пожалуйста введите номер телефона ',
            },
          ]}
        >
          <Input placeholder='Номер телефона' className={InputUIClassName} />
        </Form.Item>
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            className='w-1/3 font-black border-2 bg-slate-300 mt-[20px]'
          >
            Войти !
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PreviewForm;
