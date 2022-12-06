// Write your code here

import './index.css'

import {Component} from 'react'

class Welcome extends Component {
  state = {subscribed: false}

  word = {Word: 'Subscribe'}

  conso = () => {
    this.setState(s => ({subscribed: !s.subscribed}))
  }

  text = () => {
    const {subscribed} = this.state

    return subscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const text = this.text()
    return (
      <div className="main">
        <h1 className="head">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button onClick={this.conso}>{text}</button>
      </div>
    )
  }
}

export default Welcome
