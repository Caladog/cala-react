import React, { useState } from 'react';
import { history } from 'umi';
import { Card, Form, Input, Button, Checkbox, Typography, Avatar } from 'antd';
import { UserOutlined, LockOutlined, AntDesignOutlined } from '@ant-design/icons';
const { Title } = Typography;

export default () => {
  const onFinish = (values) => {
    console.log('Success:', values);
    sessionStorage.setItem("token", "12359184231");
    history.push('/home');
  };


  return (
    <Card style={{ width: 400, margin: '0 auto', top: 'calc(50% - 300px)', padding: '20px 30px 0',backgroundColor:'rgba(255,255,255,0.8)', borderRadius: '15px'  }}>
      <Title level={3}><Avatar size={36} icon={<AntDesignOutlined />} style={{margin:'0 30px',background:'#1890ff'}}/>系 统 登 录</Title>
      <Form style={{ marginTop:'30px'}}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message:false,
            },
          ]}
        >
          <Input prefix={<UserOutlined />} type="text" placeholder="帐号" size="large"/>
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message:false,
            },
          ]}
        >
          <Input prefix={<LockOutlined />} type="password"  placeholder="密码" size="large" />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住密码</Checkbox>
          </Form.Item>

          <a href="" style={{ float: 'right' }}>
            忘记密码
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large" shape="round" style={{ width: '100%' }}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
