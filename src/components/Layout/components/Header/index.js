import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';

import styles from './Header.module.scss'
import images from '~/assets/images'
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';



const cx = classNames.bind(styles)

// console.log(images.logo)

function Header() {

    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        // setTimeout(() => { console.log('Hello World') }, 3000)
        setTimeout(() => {
            setSearchResult([1])
        }, 0)
    }, [])

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            {/* Logo */}
            <div className={cx('logo')}>
                <img src={images.logo} alt='Tictok' />
            </div>

            <Tippy
                interactive
                visible={searchResult.length > 0}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={'search-title'}>
                                Accounts
                            </h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />



                        </PopperWrapper>
                    </div>
                )}
            >
                {/* Search */}
                <div className={cx('search')}>
                    <input placeholder='Searcg accounts and video' spellCheck={false} /> {/* spellCheck dùng để check bỏ dấu đõ chính tả */}
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    {/* Btn Search */}
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>

            <div className={cx('actions')}>
                {/* <Button primary href="https://fullstack.edu.vn/">Login</Button> */}
                <Button text>Upload</Button>
                <Button primary> Log in</Button>
            </div>

        </div>
    </header >
}

export default Header;