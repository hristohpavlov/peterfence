import classNames from "classnames";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap"
import styles from '../styles/Home.module.scss';
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notifySuccess = (message:any) =>
  toast(<p style={{ fontSize: 16 }}>{message}</p>, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    type: "success"
  });

export const notifyError = (message:any) =>
  toast(<p style={{ fontSize: 16 }}>{message}</p>, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    type: "error"
  });

const ContactUsModal = () => {
const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => {
    notifySuccess("Thank you! Our team will respond as soon as possible!");
    handleClose();
  }
    return (
        <>
            <a className={classNames("btn card_btn btn-lg btn-outline-light text-center")} onClick={handleShow}>Contact us</a>
            {/* <button className={classNames("btn card_btn",styles.btn, styles.card_btn)} onClick={handleShow}>Contact us</button> */}
            <Modal show={show} onHide={handleClose} animation={false}>
                <div className="modal-content">
                <Modal.Header closeButton className="modal-header text-center">
                <Modal.Title className="modal-title w-100 font-weight-bold">Contact us</Modal.Title>
                </Modal.Header>
                <div className="modal-body mx-3">
                    <div className="md-form mb-5">
                    <i className="fas fa-user prefix grey-text"></i>
                    <input type="text" id="form34" className="form-control validate"/>
                    <label data-error="wrong" data-success="right" htmlFor="form34">Your name</label>
                    </div>

                    <div className="md-form mb-5">
                    <i className="fas fa-envelope prefix grey-text"></i>
                    <input type="email" id="form29" className="form-control validate"/>
                    <label data-error="wrong" data-success="right" htmlFor="form29">Your email</label>
                    </div>

                    <div className="md-form mb-5">
                    <i className="fas fa-tag prefix grey-text"></i>
                    <input type="text" id="form32" className="form-control validate"/>
                    <label data-error="wrong" data-success="right" htmlFor="form32">Subject</label>
                    </div>

                    <div className="md-form">
                    <i className="fas fa-pencil prefix grey-text"></i>
                    <textarea id="form8" className="md-textarea form-control" rows={4}></textarea>
                    <label data-error="wrong" data-success="right" htmlFor="form8">Your message</label>
                    </div>

                </div>
                <div className="modal-footer d-flex justify-content-center">
                    <button className="btn btn-unique" onClick={handleSubmit}>Send email<i className="fas fa-paper-plane-o ml-1"></i></button>
                </div>
                </div>
            </Modal>
        </>
    )
}

export default ContactUsModal