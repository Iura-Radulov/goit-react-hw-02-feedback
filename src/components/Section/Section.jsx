import style from './Section.module.css'
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
    
    return (
        <>
            <h2 className={style.title}>{title }</h2>
            {children}         
            </>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired
}

export default Section
