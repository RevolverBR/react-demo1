import React, { Component, Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import './style.css';
import logo from '../../img/logo.png';

import { Menu } from 'antd';
import * as Icon from '@ant-design/icons';


class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    // headerlist
    getMenuItems() {
        return this.state.list.map(item => {
            var icon = item.icon;
            icon = React.createElement(Icon[icon]);

            return (
                <Menu.Item key={item.id} icon={icon} className="header-menu">
                    <Link to={`/${item.id}`}>
                        {item.title}
                    </Link>
                </Menu.Item>
            )
        })
    }

    // 请求headerlist
    componentDidMount() {
        axios.get('https://www.fastmock.site/mock/d0e4895a8b9567f3c10b69b3c4a03ce9/react/api/headerlist')
            .then((res) => {
                this.setState({
                    list: res.data.data
                })
            })
    }

    render() {
        return (
            <Fragment>
                <Link to="/">
                    <img className="header__logo" src={logo} alt="logo" />
                </Link>

                <Menu mode="horizontal" defaultSelectedKeys={['mail']} className="header-menus">
                    {this.getMenuItems()}
                </Menu>
            </Fragment>
        )
    }
}

export default AppHeader;