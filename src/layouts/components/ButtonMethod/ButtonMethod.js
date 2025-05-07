import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ButtonMethod.module.scss';
import Button from '~/component/Button';

const cx = classNames.bind(styles);
function ButtonMethod({ title, className, leftIcon, onClick }) {
    return (
        <Button medium className={cx('btn', className)} leftIcon={leftIcon} onClick={onClick}>
            {title}
        </Button>
    );
}

ButtonMethod.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    onClick: PropTypes.func,
};

export default ButtonMethod;
