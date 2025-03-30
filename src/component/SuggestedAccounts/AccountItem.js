import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNhLbDXZVcPpBmD4-DLdKuAMj6y3wwfD_1dg&usqp=CAU"
                alt=""
            />
            <div className={cx('item-infor')}>
                <h4 className={cx('nickname')}>
                    <strong>NguyenVA</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <p className={cx('name')}>Nguyen Van A</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};
export default AccountItem;
