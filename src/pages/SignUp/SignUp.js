import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';
import TitleForLogin from '~/layouts/components/TitleForLogin';
import Button from '~/component/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Fragment, useState } from 'react';
import ButtonMethod from '~/layouts/components/ButtonMethod';
import Input from '~/layouts/components/Input';

import Image from '~/component/Image';

import googleIcon from '~/assets/images/google-icon.png';

const cx = classNames.bind(styles);

function SignUp() {
    const [showMonth, setShowMonth] = useState(false);
    const [showYear, setShowYear] = useState(false);
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [type, setType] = useState('T');

    const [userNameOrEmail, setUserNameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    const [step, setStep] = useState(1);

    // Array.from(object, mapFunction, thisValue)
    // returns an array from any object with a length property.
    const monthList = Array.from({ length: 12 }, (_, i) => {
        // console.log(monthList);  [0,1,2,3,4,5,6,7,8,9,10,11]

        const date = new Date(0, i);
        return {
            value: i + 1,
            label: date.toLocaleString('default', { month: 'long' }), // 'toLocaleString' formats the date, 'default' uses the system's locale, { month: 'long' } tells it to return the full month name
        };
    });

    const yearList = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

    const handleChooseType = (type) => {
        setType(type);
    };

    const handleNext = () => {
        setStep((prev) => prev + 1);
    };
    const handleBack = () => {
        setStep((prev) => prev - 1);
    };

    return (
        <Fragment>
            <div className={cx('wrapper')}>
                <TitleForLogin title="Sign Up" />

                {/* First Step */}
                {step === 1 && (
                    <div className={cx('option')}>
                        <h3 className={cx('title')}>Who are you?</h3>

                        <div className={cx('btn-option')}>
                            <Button
                                primary
                                className={cx('btn', { active: type === 'S' })}
                                onClick={() => handleChooseType('S')}
                            >
                                Student
                            </Button>
                            <Button
                                primary
                                className={cx('btn', { active: type === 'T' })}
                                onClick={() => handleChooseType('T')}
                            >
                                Teacher
                            </Button>
                        </div>

                        <h3 className={cx('title')}>Age</h3>

                        <div className={cx('btn-option')}>
                            <Tippy
                                interactive
                                offset={[0, 0]}
                                placement="bottom-start"
                                visible={showMonth}
                                onClickOutside={() => setShowMonth(false)}
                                render={(attrs) => (
                                    <div className={cx('dropdown', 'dropdown--month')} tabIndex="-1" {...attrs}>
                                        {monthList.map((m) => (
                                            <div
                                                key={m.value}
                                                className={cx('dropdown-item', 'dropdown-item--month')}
                                                onClick={() => {
                                                    setMonth(m.label);
                                                    setShowMonth(false);
                                                }}
                                            >
                                                {m.label}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            >
                                <div className={cx('wrapper-option')}>
                                    <Button
                                        rightIcon={<FontAwesomeIcon icon={faAngleDown} />}
                                        className={cx('option-date')}
                                        onClick={() => setShowMonth(!showMonth)}
                                    >
                                        {month || 'Month'}
                                    </Button>
                                </div>
                            </Tippy>
                            <div className={cx('separate')}>/</div>
                            <Tippy
                                interactive
                                offset={[0, 0]}
                                placement="bottom-start"
                                visible={showYear}
                                onClickOutside={() => setShowYear(false)}
                                render={(attrs) => (
                                    <div className={cx('dropdown', 'dropdown--year')} tabIndex="-1" {...attrs}>
                                        {yearList.map((y) => (
                                            <div
                                                key={y}
                                                className={cx('dropdown-item', 'dropdown-item--year')}
                                                onClick={() => {
                                                    setYear(y);
                                                    setShowYear(false);
                                                }}
                                            >
                                                {y}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            >
                                <div className={cx('wrapper-option')}>
                                    <Button
                                        rightIcon={<FontAwesomeIcon icon={faAngleDown} />}
                                        className={cx('option-date')}
                                        onClick={() => setShowYear(!showYear)}
                                    >
                                        {year || 'Year'}
                                    </Button>
                                </div>
                            </Tippy>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className={cx('option')}>
                        <h3 className={cx('title')}>Choose a sign up method</h3>
                        <ButtonMethod
                            title="Email & Password"
                            leftIcon={<FontAwesomeIcon icon={faEnvelope} />}
                            onClick={handleNext}
                        />
                        <ButtonMethod
                            title="Google"
                            leftIcon={<Image src={googleIcon} className={cx('google-icon')} alt="google-icon" />}
                        />
                    </div>
                )}

                {step === 3 && (
                    <div className={cx('option')}>
                        <Input
                            placeholder="Username or Email"
                            name="userNameOrEmail"
                            type="text"
                            value={userNameOrEmail}
                            onChange={(e) => setUserNameOrEmail(e.target.value)}
                        />
                        <span className={cx('error-message')}>Wrong email</span>
                        <Input
                            placeholder="Password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                )}
            </div>
            <div className={cx('btn-nextStep')}>
                {step >= 2 && (
                    <Button outline small onClick={handleBack}>
                        Back
                    </Button>
                )}
                {step === 1 && (
                    <Button primary small onClick={handleNext} disabled={step === 1 && (!type || !month || !year)}>
                        Next
                    </Button>
                )}
            </div>
        </Fragment>
    );
}

export default SignUp;
