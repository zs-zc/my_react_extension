import React, { Component } from 'react'
import axios from 'axios'
import "./index.css"
export default class Cinema extends Component {
    state = {
        cinemaData: [],
        cinemaDataBF: [],// 备份
    }
    componentDidMount() {
        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            console.log(res.data, '影院数据');
            this.setState({
                cinemaData: res.data.data.cinemas,
                cinemaDataBF: res.data.data.cinemas
            })
        }).catch((err) => {
            console.log(err, 'err');
        })
    }
    render() {
        const { cinemaData } = this.state
        return (
            <div className='cinema'>
                <input type="text" className='cinema_input' onInput={this.handleInput} />
                <ul>
                    {
                        cinemaData.map(item => {
                            return <li key={item.cinemaId}>
                                <h2>{item.name}</h2>
                                <span>{item.address}</span>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
    handleInput = (event) => {
        console.log(event, event.target.value);
        let newList = this.state.cinemaDataBF.filter(item => item.name.toUpperCase().includes(event.target.value.toUpperCase()) || item.address.toUpperCase().includes(event.target.value))
        console.log(newList, '009');
        this.setState({ cinemaData: newList })
    }
}
