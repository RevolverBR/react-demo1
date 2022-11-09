import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import './style.css';

import AppHeader from './components/Header/index';
import Login from './components/Login/index';
import Vip from './components/Vip/index';
import ContentList from './containers/ContentList/index';
import Detail from './containers/Detail/index';

const { Header, Footer, Content } = Layout;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Layout style={{ minWidth: 1300 }}>
      <Header className='header'>
        <AppHeader />
      </Header>
      <Content className='content'>
        <Login />
        <Switch>
          <Route path='/vip' component={Vip} />
          <Route path='/detail/:id' component={Detail} />
          <Route path='/:id?' component={ContentList} />
        </Switch>
      </Content>
      <Footer className='footer'>
        footer
      </Footer>
    </Layout>
  </BrowserRouter>
);

