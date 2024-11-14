import React from 'react'
import styles from "./bootstrapModal.module.scss"
import Link from 'next/link';

function BootstrapModal(props) {

  const modalData = props?.share;

  //console.log(gallery);

  return (
    <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className={styles["modal-content"] + " modal-content"}>
      <div className={styles["modal-header"] + " modal-header"}>
        <h3 className="modal-title" id="exampleModalLabel">Share via</h3>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className={styles["popup_body"]}>
                  <div className={styles["share_sec"]}>
                    <ul>
                      {modalData?.map((item, i) => (
                        <li className={styles["social"]} key={i}>
                          <div className={styles["custom-button"]}>
                            <Link href={item?.loginLink?.value || "#"} legacyBehavior><a>{item?.name?.value}</a></Link>
                            <span>
                              <img src={item?.icon?.value} href="#"/>
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
      </div>
      {/* <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div> */}
    </div>
  </div>
</div>
  )
}

export default BootstrapModal;

export const modal = [
    {
      name: "Facebook",
      icon: "/assets/images/footer/fb-icon.png",
    },
    {
      name: "Linkedin",
      icon: "/assets/images/footer/icon-ln.png",
    },
    {
      name: "Twitter",
      icon: "/assets/images/footer/twitter-icon.png",
    },
    {
      name: "Gmail",
      icon: "/assets/images/footer/email-icon.png",
    },
    {
      name: "Whatsapp",
      icon: "/assets/images/footer/icon-whatsapp.png",
    },
  ];

  