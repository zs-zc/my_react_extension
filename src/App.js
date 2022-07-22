import React, { Component } from 'react'
import "./app.css"
import FirstWork from './components/FirstWork'
import Mine from "./components/Mine"
import Cinema from "./components/Cinema"
export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        text: "首页"
      },
      {
        id: 2,
        text: "影院"
      }, {
        id: 3,
        text: "我的"
      }
    ],
    currentIndex: 0,
  }
  showComponent = () => {
    switch (this.state.currentIndex) {
      case 0:
        return <FirstWork />
      case 1:
        return <Cinema />
      case 2:
        return <Mine />

    }
  }
  render() {
    const { list, currentIndex } = this.state
    return (
      <div>
        {/*这是一种方式，还可以调用函数  */}
        {/* {currentIndex === 0 && <FirstWork />}
        {currentIndex === 1 && <Cinema />}
        {currentIndex === 2 && <Mine />} */}
        {this.showComponent()}
        <ul className='mainUl'>
          {
            list.map((item, index) => {
              return <li key={item.id} className={currentIndex === index ? 'active' : ''} onClick={() => { this.clickLi(index) }}>{item.text}</li>
            })
          }
        </ul>

      </div>
    )
  }
  clickLi(index) {
    this.setState({ currentIndex: index })
  }

}
