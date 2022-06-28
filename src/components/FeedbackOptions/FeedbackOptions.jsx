const FeedbackOptions = ({ increasing }) => {
    const {good, neutral, bad} = increasing
    return (
    <div>
        <button onClick={good}>Good</button>
        <button onClick={neutral}>Neutral</button>
        <button onClick={bad}>Bad</button>
      </div>
)}

export default FeedbackOptions