import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);
function Input({ placeholder, name, value, type, onChange }) {
    return (
        <div className={cx('wrapper')}>
            <input
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                type={type}
                className={cx('input')}
            />
        </div>
    );
}

Input.propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    errorMessage: PropTypes.string,
    onChange: PropTypes.func,
};

export default Input;
