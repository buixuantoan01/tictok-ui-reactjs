import classNames from "classnames/bind"
import styles from "./AccountItem.module.scss"
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/65490a3ef702c461b64e1534b1b7ac0c~c5_100x100.jpeg?x-expires=1688374800&x-signature=J864QA1MKjwFRMvijlfg3coEK68%3D"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')} >nguyenvana</span>
            </div>
        </div >
    )
}

export default AccountItem;