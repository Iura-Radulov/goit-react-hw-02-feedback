import React, {Component} from "react"
import Section from "./Section";
import FeedbackOptions from "components/FeedbackOptions"
import Statistics from "components/Statistics"
import Notification from "components/Notification"


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
    const { good, neutral, bad } = this.state;
    const sum = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage();
    
  return (
      <div className='container' >    
      <Section title='Please leave feedback'>
        <FeedbackOptions options={{ good: this.goodIncrement, bad: this.badlIncrement, neutral: this.neutralIncrement }}
          onLeaveFeedback='Statistics'/>            
            {sum ? <Statistics good={good} neutral={neutral} bad={bad} total={sum} positivePercentage={percent} /> : 
            <Notification message="There is no feedback"/>}       
      </Section>
      </div>
    );
    }  
};
