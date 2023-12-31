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
                src="https://lh3.googleusercontent.com/a/AAcHTtexe_hkkvz8CmtAxXfeIhAwMSxEn1bW7mlWQDOuhi6oGCI=s360-c-no"
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