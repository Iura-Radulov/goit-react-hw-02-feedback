import FeedbackOptions from "components/FeedbackOptions"
import Statistics from "components/Statistics"
import Notification from "components/Notification"
const Section = ({data, sum, percent, increments}) => {
    const { good, neutral, bad } = data
    
    return (
        <>
            <h2>Please leave feedback</h2>
            <FeedbackOptions increasing={increments} />
            <h2>Statistics</h2>
            {sum ? <Statistics good={good} neutral={neutral} bad={bad} total={sum} positivePercentage={percent} /> : 
            <Notification message="There is no feedback"/>}            
            </>
    )
}
export default Section