import style from './FeedbackOptions.module.css'
import PropTypes from 'prop-types';


const FeedbackOptions = ({ options}) => {
    const {good, neutral, bad} = options
  return (
    <>    
    <div className={style.btnContainer}>
        <button onClick={good} className={style.btnItem}>Good</button>
        <button onClick={neutral} className={style.btnItem}>Neutral</button>
        <button onClick={bad} className={style.btnItem}>Bad</button>
      </div>
        <h2 className={style.title}>Statistics</h2>
      </>
)}

FeedbackOptions.propTipes = {
  increasing: PropTypes.shape({
    good: PropTypes.func,
    neutral: PropTypes.func,
    bad: PropTypes.func,
  }).isRequired
}

export default FeedbackOptions