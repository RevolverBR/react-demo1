import React, { Component } from 'react';
import './style.css';
import { Button, Modal, Input, message } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false,
            modal: false,
            username: '',
            password: ''
        }

        this.showModal = this.showModal.bind(this);
        this.loginOut = this.loginOut.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.changeUsername = this.changeUsername.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.checkLogin = this.checkLogin.bind(this);
    }

    showModal() {
        this.setState({
            modal: true
        })
    }

    hideModal() {
        this.setState({
            modal: false
        })
    }

    changeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    changePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    loginOut() {
        axios.get('http://www.dell-lee.com/react/api/logout.json', {
            withCredentials: true
        })
            .then(res => {
                const { logout } = res.data.data;
                if (logout) {
                    this.setState({
                        login: false
                    })
                }
            })
    }

    checkLogin() {
        const { username, password } = this.state;
        const url = `
            http://www.dell-lee.com/react/api/login.json?user=${username}&password=${password}
        `
        axios.get(url, {
            withCredentials: true
        }).then(res => {
            const { login } = res.data.data;
            if (login) {
                message.success('登录成功');
                this.setState({
                    login: true,
                    modal: false
                })
            } else {
                message.error('登录失败')
            }
        })
    }

    render() {
        const { login } = this.state;

        return (
            <div className='login'>
                {
                    login ?
                        <Button type='primary' onClick={this.loginOut}>quit</Button>
                        :
                        <Button type='primary' onClick={this.showModal}>login</Button>
                }
                <Link to='/vip'>
                    <Button type='primary' style={{ marginLeft: 10 }}>VIP</Button>
                </Link>
                <Modal title="login" open={this.state.modal} onOk={this.checkLogin} onCancel={this.hideModal}>
                    <p>Some contents...</p>
                    <Input
                        placeholder='请输入用户名'
                        type='text'
                        style={{ marginBottom: 10 }}
                        value={this.state.username}
                        onChange={this.changeUsername}
                    />
                    <Input
                        placeholder='请输入密码'
                        type='password'
                        value={this.state.password}
                        onChange={this.changePassword}
                    />
                </Modal>
            </div>
        )
    }

    componentDidMount() {
        axios.get('http://www.dell-lee.com/react/api/isLogin.json', {
            withCredentials: true
        })
            .then(res => {
                const { login } = res.data.data;
                this.setState({
                    login
                })
            })
    }
}

export default Login;