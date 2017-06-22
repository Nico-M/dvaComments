import React from 'react';
import styles from './Main.css';
import { Layout,Menu } from 'antd'


const { Header, Sider, Content } = Layout;

function Main(props) {
  return (
    <Layout>
      <Header className="header">
      <div className="header-logo">
      
      </div>
      <div className="header-login"></div>
      </Header>
      <Layout className="container">
        <Sider className="sider">
        <Menu theme="dark" >
          <Menu.Item key="ct_lists">合同列表</Menu.Item>
          <Menu.Item key="apply_cont">申请合同</Menu.Item>
          <Menu.Item key="delay_cont">合同延期</Menu.Item>
        </Menu>
        
        </Sider>
        <Content className="content">{
          props.children
        }</Content>
      </Layout>
    </Layout>

  );
}

export default Main;
