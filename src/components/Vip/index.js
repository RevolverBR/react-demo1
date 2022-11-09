import axios from 'axios';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './style.css'

class Vip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true
        }
    }

    render() {
        if (this.state.login) {
            return <div className='vip'>vip</div>
        } else {
            return <Redirect to='/' />
        }
    }

    componentDidMount() {
        axios.get('http://www.dell-lee.com/react/api/isLogin.json', {
            withCredentials: true
        })
            .then(res => {
                this.setState({ login: true })
                console.log(this.state.login)
            })
    }
}

export default Vip;