import classNames from 'classnames';
import styles from '../../styles/Login.module.scss';

export default function Admin(){
    return(
        <div className="container">
            <div className="row justify-content-center mt-5">
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="card shadow">
                <div className="card-title text-center border-bottom">
                    <h2 className="p-3">Admin Panel</h2>
                </div>
                <div className="card-body">
                    <form name="contact-form" action="/api/login" method="POST" netlify-honeypot="bot-field" data-netlify="true">
                    <input type='hidden' name='form-name' value='contact-form' />
                    <div className="mb-4">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" name="email" className="form-control" id="email" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" id="password" />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-dark text-light">Login</button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}