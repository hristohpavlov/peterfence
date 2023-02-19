import classNames from 'classnames'
import { useRouter } from 'next/router'
import styles from '../../styles/Login.module.scss';

export default function Unauthorized(){
    const router = useRouter()
    return(
        <div className={classNames("container text-center", styles.vertical_center)}>
            <div>
            Oops seems you have reached an unauthorized URL.
            Please go back using the button below!
            <br/>
            <br/>
            <br/>
            <br/>
            <button className="btn btn-primary" onClick={() => router.back()}>Go back!</button>
            </div>
        </div>
    )
}