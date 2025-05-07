import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './TitleForLogin.module.scss';

const cx = classNames.bind(styles);
function TitleForLogin({ title }) {
    return <h2 className={cx('title')}>{title}</h2>;
}

TitleForLogin.prototype = {
    title: PropTypes.string,
};
export default TitleForLogin;
