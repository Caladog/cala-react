import { history } from 'umi';
import { message } from 'antd';

//console.log("session", sessionStorage.getItem('token'));

//TODO:TOKEN 验证，request 封装

const token = sessionStorage.getItem('token');

if (token) {
    history.push('/home');
    message.success('成功登录系统！');
} else {
    history.push('/user/login');
}