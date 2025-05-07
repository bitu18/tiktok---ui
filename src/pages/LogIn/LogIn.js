import classNames from 'classnames/bind';
import Input from '~/layouts/components/Input';
import TitleForLogin from '~/layouts/components/TitleForLogin';
import Button from '~/component/Button';
import Image from '../../component/Image/Image';
import styles from './LogIn.module.scss';
import { useState } from 'react';
import ButtonMethod from '~/layouts/components/ButtonMethod';
import googleIcon from '~/assets/images/google-icon.png';
import * as userService from '~/serivces/userService';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function LogIn() {
    const [userNameOrEmail, setUserNameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const isDisabled = !userNameOrEmail || !password;

    const handleLogin = async () => {
        setErrorMessage('');
        try {
            const result = await userService.userLogin(userNameOrEmail, password);

            // the email && password are correct
            if (result.code === 0) {
                // redirect or store token/user here
                navigate('/');
            }
            // the email || password are not correct
            else {
                setErrorMessage(result.message);
                return;
            }
        } catch (error) {
            throw error;
        }
    };

    return (
        <div className={cx('wrapper')}>
            <TitleForLogin title="Log In" />
            <Input
                placeholder="Username or Email"
                name="userNameOrEmail"
                type="email"
                value={userNameOrEmail}
                onChange={(e) => {
                    setUserNameOrEmail(e.target.value);
                    setErrorMessage('');
                }}
            />
            <Input
                placeholder="Password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                    setErrorMessage('');
                }}
            />
            <span className={cx('error-message')}>{errorMessage}</span>

            <Button primary medium disabled={isDisabled} className={cx('btn')} onClick={handleLogin}>
                Login
            </Button>
            <div className={cx('separate')}>
                <div className={cx('separate-line')}></div>
                <span className={cx('separate-text')}>or</span>
                <div className={cx('separate-line')}></div>
            </div>

            <ButtonMethod
                title="Google"
                leftIcon={<Image src={googleIcon} className={cx('google-icon')} alt="google-icon" />}
            />
        </div>
    );
}

export default LogIn;
