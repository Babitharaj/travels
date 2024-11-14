import styles from "./modal.module.scss";

export default function Modal(props){
    
    return (
        <div className="modal fade reviewModal" id={props.id} aria-labelledby={props.id} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content p-4 rounded-0">
                    <div className={"modal-header " + styles.modalHeader}>
                        <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
                        <button type="button" className={styles.button+" fs-5 text-dark"} data-bs-dismiss="modal" aria-label="Close">
                            &times;
                        </button>
                    </div>
                    <div className="modal-body ">
                        {props.children}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}