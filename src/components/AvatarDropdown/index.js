import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Menu, Dropdown } from 'antd';
import React from 'react';
import { history } from 'umi';

export default (props) => {
    const currentUser = { name: "系统管理员", avatar: "" };

    const logout = ()=>{
        sessionStorage.removeItem('token');
        history.push('/user/login');
    }

    const menuHeaderDropdown = (
        <Menu>
            <Menu.Item key="center">
                <UserOutlined />
                <span style={{ margin: '0 10px' }}>个人中心</span>
            </Menu.Item>
            <Menu.Item key="settings">
                <SettingOutlined />
                <span style={{ margin: '0 10px' }}>个人设置</span>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="logout">
                <LogoutOutlined />
                <span style={{ margin: '0 10px' }} onClick={logout}>退出登录</span>
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <Dropdown overlay={menuHeaderDropdown}>
                <span >
                    <Avatar size="small" style={{ backgroundColor: props.bgColor }} src={currentUser.avatar} >
                        DOG
                    </Avatar>
                    <span style={{ margin: '0 10px' }}>{currentUser.name}</span>
                </span>
            </Dropdown>
        </>
    );
}