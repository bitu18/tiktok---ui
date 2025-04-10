import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
// import {
//     HomeIcon,
//     HomeIconActive,
//     UserGroupIcon,
//     UserGroupIconActive,
//     LiveIcon,
//     LiveIconActive,
// } from '~/component/Icons';
import config from '~/config';
import Button from '~/component/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
// import { faNoteSticky, faPenToSquare, faUser, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faNoteSticky, faUsers, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Button primary large leftIcon={<FontAwesomeIcon icon={faPlay} />} className={cx('btn')}>
                Play
            </Button>
            <Menu>
                <MenuItem title="Worksheets" to={config.routes.home} icon={<FontAwesomeIcon icon={faNoteSticky} />} />
                {/* <MenuItem title="About us" to={config.routes.live} icon={<FontAwesomeIcon icon={faUsers} />} /> */}
                <MenuItem title="Create" to={config.routes.following} icon={<FontAwesomeIcon icon={faPenToSquare} />} />
            </Menu>

            {/* 
            <SuggestedAccounts label="Suggested Accounts" />
            <SuggestedAccounts label="Following Accounts" /> */}
        </aside>
    );
}

export default Sidebar;
