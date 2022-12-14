import React, { Component } from 'react';
import axios from 'axios';

import './style.css';

import { Card } from 'antd';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'title',
            content: 'content'
        }
    }

    render() {
        return (
            <Card
                title={this.state.title}
            >
                <div className='detail' dangerouslySetInnerHTML={{__html: this.state.content}}></div>
            </Card>
        )
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        axios.get('http://www.dell-lee.com/react/api/detail.json?id=' + id)
        .then((res) => {
            const data = res.data.data;
            this.setState(data)
        })
    }
}

export default Detail;