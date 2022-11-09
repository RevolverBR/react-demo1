import React, { Component, Fragment } from 'react';
import axios from 'axios';

import { List } from 'antd';
import { Link } from 'react-router-dom';


class ContentList extends Component {
    componentWillReceiveProps(nextProps) {
        const id = nextProps.match.params.id;
        axios.get('http://www.dell-lee.com/react/api/list.json?id=' + id)
            .then((res) => {
                this.setState({
                    data: res.data.data
                })
            })
    }

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <Fragment>
                <List
                    style={{ background: '#FFF' }}
                    bordered
                    dataSource={this.state.data}
                    renderItem={item => (
                        <List.Item>
                            {/* <Typography.Text mark></Typography.Text> {item.title} */}
                            <Link to={`/detail/${item.id}`}>
                                {item.title}
                            </Link>
                        </List.Item>
                    )}
                />
            </Fragment >
        )
    }

    componentDidMount() {
        let url = 'http://www.dell-lee.com/react/api/list.json';
        const id = this.props.match.params.id;
        if (id) {
            url = url + '?id=' + id
        }
        axios.get(url)
            .then((res) => {
                this.setState({
                    data: res.data.data
                })
            })
    }
}

export default ContentList;