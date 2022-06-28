import React, {Component} from "react"
import Section from "./Section";

export class App extends Component {

  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad 
  

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback()) {
      return this.state.good / this.countTotalFeedback()  * 100
    }
    
  }

  goodIncrement = () => {
    this.setState(state => ({
      good: state.good + 1
    }
    ))
  }
  neutralIncrement = () => {
    this.setState(state => ({
      neutral: state.neutral + 1
    }
    ))
  }
    badlIncrement = () => {
    this.setState(state => ({
      bad: state.bad + 1
    }
    ))
  }
  render() {
    // const {good, neutral, bad} = this.state
    
return (
    <div
      style={{
        height: '100vh',       
        fontSize: 20,
        color: '#010101'
      }}
  >
    <Section data={this.state}
      sum={this.countTotalFeedback()}
      percent={this.countPositiveFeedbackPercentage()}
      increments={{good: this.goodIncrement, bad: this.badlIncrement, neutral: this.neutralIncrement}}
    />     
    </div>
  );
  }
  
};
