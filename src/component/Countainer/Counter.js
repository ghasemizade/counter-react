import React, { Component } from 'react'
import '../../App.css'

export default class Counter extends Component {

    constructor (props){
        super(props)
        this.state = {
            counter: 0
        }
        this.addToCounter = this.addToCounter.bind(this)
        this.minusFromCounter = this.minusFromCounter.bind(this)
    }

    addToCounter(){
        this.setState(prevState => {
            return {counter: prevState.counter + 1}
        })
    }
    
    minusFromCounter(){
        this.setState(prevState => {
            return {counter: prevState.counter - 1}
        })
    }

  render() {
    return (
      <div className='App'>
        <header className="App-header">
            <h1 className="App-logo" alt="logo" >Counter</h1>
            <h3>{this.state.counter}</h3>
            <div className="btns-container">
                <div className="btn-dir">
                    <div className="left-btn">
                        <button onClick={this.addToCounter} href='#' className='add-count'>Add Count</button>
                    </div>
                    <div className="right-btn">
                        <button onClick={this.minusFromCounter} href='#' className='del-count'>Lower Count</button>
                    </div>
                </div>
            </div>
        </header>
      </div>
    )
  }
}
