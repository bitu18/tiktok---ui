import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faEllipsisVertical,
    faGear,
    faLanguage,
    faPenToSquare,
    faPlus,
    faRightFromBracket,
    faUser,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
// import {
//     UploadIcon,
//     InboxIcon,
//     MessageIcon,
//     ProfileIcon,
//     CoinIcon,
//     SettingsIcon,
//     LanguageIcon,
//     HelpIcon,
//     ShortcutsIcon,
//     LogoutIcon,
// } from '~/component/Icons/Icons';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/component/Button';
import Menu from '~/component/Popper/Menu';
import Image from '~/component/Image';
import Search from '../Search';
import config from '~/config';
import { faKeyboard } from '@fortawesome/free-regular-svg-icons';
// import { useForm } from '~/';

const cx = classNames.bind(styles);

const currentUser = true;

const MENU_ITEMS = [
    // {
    //     icon: <FontAwesomeIcon icon={faLanguage} />,
    //     title: 'English',
    //     children: {
    //         title: 'Language',
    //         data: [
    //             {
    //                 type: 'language',
    //                 code: 'en',
    //                 title: 'English',
    //             },
    //             {
    //                 type: 'language',
    //                 code: 'vi',
    //                 title: 'Tiếng Việt',
    //             },
    //         ],
    //     },
    // },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },

    // {
    //     icon: <FontAwesomeIcon icon={faKeyboard} />,
    //     title: 'Keyboard shortcuts',
    // },
];

function Header() {
    // const { userInfor } = useForm();

    const handleMenuChange = (menuItem) => {};

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            // to: `/account/@${userInfor?.name}`,
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
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
                            {/* <Tippy delay={[0, 200]} content="Create" placement="bottom" offset={[0, 0]}>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="About us" placement="bottom" offset={[0, 0]}>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faUsers} />
                                </button>
                            </Tippy> */}
                            {/* <Tippy delay={[0, 200]} content="Upload Video" placement="bottom" offset={[0, 0]}>
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy> */}
                        </>
                    ) : (
                        <>
                            <Button outline small>
                                Login
                            </Button>
                            <Button primary small style={{ padding: '5px 16px' }}>
                                Sign up
                            </Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <div className={cx('user-infor')}>
                                <Image
                                    src="https://lh3.googleusercontent.com/a/ACg8ocKc1ICnb9GX8PWH_926Iqh6IidJVYr544TLYJfXaHeYu0c=s96-c"
                                    className={cx('user-avatar')}
                                    alt="Bitu"
                                />
                                <h3 className={cx('name')}>BiTu</h3>
                            </div>
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
