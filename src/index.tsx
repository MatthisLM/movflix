import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./assets/styles/tailwind.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import MainLayout from './layouts/MainLayout';
import { ConfigProvider } from 'antd';

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
      token: {
        /* here is your global tokens */
        colorTextBase:'white',
        colorBgContainer:'#171d22',
        colorBgElevated: '#171d22',
      },
      }}
    >
      <MainLayout>
        <BrowserRouter basename="/">
          <App /> 
        </BrowserRouter>
      </MainLayout>
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
