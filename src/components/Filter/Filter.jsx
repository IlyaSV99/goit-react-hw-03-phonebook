import PropTypes from 'prop-types';
import css from './Filter.module.css';

function Filter({title, filter}) {
        return (
            <div className={css.wrapper}>
                <label className={css.label}>{title}
                    <input className={css.input} type="text" onChange={filter} required />
                </label>
            </div>
        )
    }

Filter.defaultProps = {
    filter: ()=>{},
}    


Filter.propTypes = {
    title:PropTypes.string,
    filter: PropTypes.func.isRequired,
}

export default Filter;