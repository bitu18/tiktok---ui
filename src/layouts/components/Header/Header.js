import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import {
    UploadIcon,
    InboxIcon,
    MessageIcon,
    ProfileIcon,
    CoinIcon,
    SettingsIcon,
    LanguageIcon,
    HelpIcon,
    ShortcutsIcon,
    LogoutIcon,
} from '~/component/Icons/Icons';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/component/Button';
import Menu from '~/component/Popper/Menu';
import Image from '~/component/Image/Image';
import Search from '../Search';
import config from '~/config';
// import { useForm } from '~/';

const cx = classNames.bind(styles);

const currentUser = false;

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <HelpIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <ShortcutsIcon />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    // const { userInfor } = useForm();

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu = [
        {
            icon: <ProfileIcon />,
            title: 'View Profile',
            // to: `/account/@${userInfor?.name}`,
        },
        {
            icon: <CoinIcon />,
            title: 'Get Coins',
            to: '/coin',
        },
        {
            icon: <SettingsIcon />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <LogoutIcon />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logoGaming} alt="Gaming" className={cx('logo')} />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload Video" placement="bottom" offset={[0, 0]}>
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Message" placement="bottom" offset={[0, 0]}>
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom" offset={[0, 0]}>
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button outline small>
                                Login
                            </Button>
                            <Button primary small>
                                Sign up
                            </Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://lh3.googleusercontent.com/a/ACg8ocKc1ICnb9GX8PWH_926Iqh6IidJVYr544TLYJfXaHeYu0c=s96-c"
                                className={cx('user-avatar')}
                                alt="Bitu"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
