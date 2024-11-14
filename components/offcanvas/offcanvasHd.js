import Link from "next/link"
import {GiHamburgerMenu} from "react-icons/gi"
import { BiMenuAltRight } from 'react-icons/bi';
import styles from "./offcanvasHd.module.scss"
import {header} from "../../Data/navData"

export default function Offcanvas() {
    
    return (
      <>
        <div className={styles.offcanvass + " d-lg-none"}>
          <div className="d-lg-none d-flex align-items-end col-7 col-sm-auto pr-3 " data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop" href="#offcanvasExample" role="button" style={{gap:"10px"}} >
            <div className={styles["humburger"]}>
              <i className="" style={{color:'#fff'}}><BiMenuAltRight/></i>
            </div>
            
          </div>
        <div className={styles.offcanva + " offcanvas offcanvas-end"}  id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
            <div className={styles.accor + " offcanvas-header"} >
            <div className={styles["member_portal"] + " offcanvas-title"} id="offcanvasWithBackdropLabel">
                  <h4>Log In to Member Portal</h4>
                                <a href="https://members.clubmahindra.com/?" className="btn-primary">Member Login</a>
                            </div>
              {/* <h5 className="offcanvas-title" id="offcanvasWithBackdropLabel">
                <Link href="/account/login">
                  <i className={styles.icon}><BsPersonCircle/></i>
                  </Link>
                   <br/> username</h5> */}
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className={styles.acco + " offcanvas-body"}>
              <div className={styles.acco + " dropdown mt-3"}>
              {header?.map((item, index) => (
                 <div key={index}>
                  <div className={styles["accordion-list"] + " accordion"} id={"accordionPanelsStayOpenExample" + index}>
                    <div className={styles["accordion-item"]}>
                      <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className={styles.btn + " accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target={"#panelsStayOpen-collapseOne" + index} aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                          <Link href="/shop">
                          <div className={styles.itemmenu}>{item.name}</div></Link>
                        </button>
                      </h2>
                      <div id={"panelsStayOpen-collapseOne" + index} className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                          {item.children.length > 0}
                         {item.children.map((element, index) => (
                            <div className="accordion" id={"accordionPanelsStayOpenExample" + index}>
                              <div className={`${styles["accordion-list"]} ${styles["accordion-item"]}`}>
                                <h2 className="accordion-header" id={"panelsStayOpen-headingOne" + index}>
                                  <button className={styles.btn + " accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target={"#panelsStayOpen-collapseOne" + index} aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    <Link href="/shop" className={styles.megacolor}>{element.name}</Link>
                                  </button>
                                </h2>
                                <div id={"panelsStayOpen-collapseOne" + index} className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                  <div className="accordion-body">
                                    {element.children.length > 0}
                                    {element.children.map((item, index) => (
                                      <ul key={index}>
                                        <li>  <Link href="/shop" className={styles.itemcolor}> {item.name}</Link></li>
                                      </ul>))}
                                  </div>
                                </div>
                              </div>
                            </div>))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  ))}
                <hr />
                {/* <Link className="position-relative nav-link" href="/account/profile"><h6>Account</h6></Link>
                <Link className="position-relative nav-link" href="/account/orders"><h6>Orders</h6></Link>
                <Link className="position-relative nav-link" href="/account/coupons"><h6>Coupons</h6></Link>
                <Link className="position-relative nav-link" href="/account/rewards"><h6>Rewards</h6></Link>
                <Link className="position-relative nav-link" href="/account/referrals"><h6>Referrals</h6></Link>
                <Link className="position-relative nav-link" href="/account/addresses"><h6>Saved Addresses</h6></Link>
                <Link className="position-relative nav-link" href="/account/editprofile"><h6>Edit Profile</h6></Link>
                <Link className="position-relative nav-link" href="/"><h6>Logout</h6></Link>
                <img src="/img/cardimg.jpg" alt="..." className="img-fluid" /> */}
              </div>
            </div>
          </div>
        </div>


      </>
    )
  }