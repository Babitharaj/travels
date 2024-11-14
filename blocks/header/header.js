
import styles from "./header.module.scss";
import Link from "next/link";
//import { BsSearch } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";

import { MdClose } from 'react-icons/md';
import { useScrollPosition } from "../../components/Hooks/useScrollPosition";
//import Offcanvas from "../../components/offcanvas/offcanvasHd";
import OffcanvasDemo from "@/components/offcanvas/offcanvasDemo";
import { useState } from "react";

export default function Header(props) {
   var headerConst = props?.headerProps?.blocks;
  var blockOne = props?.headerProps?.blocks?.TT00023B100?.elements;
  var blockTwo = props?.headerProps?.blocks?.TT00023B101?.elements;
  var blockThree = props?.headerProps?.blocks?.TT00023B102?.elements;
  var blockFour = props?.headerProps?.blocks?.TT00023B103?.elements;
  var blockFive = props?.headerProps?.blocks?.TT00023B104?.elements;
  var blockSix = props?.headerProps?.blocks?.TT00023B105?.elements;


  //console.log(process.env.basePath)
  //console.log(blockSix)
  //console.log(headerConst)

  const scrollposition = useScrollPosition();

  const [expanded, setExpanded] = useState(false);
  const [search, setSearch] = useState(false);
  
  const handleIconClick = () => {
    setExpanded(!expanded);
    setSearch(!search);
  };
  
  const handleCloseClick = () => {
    setExpanded(false);
    setSearch(false);
  };

  return (
    <>
      <header
        className={['header-sticky', props.flag ? `${styles["header-fixed"]}` :
          scrollposition > 100
            ? `${styles["header-fixed"]} `
            : `${styles["headercolor"]}`,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="container">
          
          <div className={styles["header_main_row"]}>
            <div className={styles["logo"]}>
              <figure>
                <Link
                  href={blockOne?.logoHeader?.Link?.value || "#"}
                  legacyBehavior
                >
                  {/* <a>TravelPro</a> */}
                  <img src={blockOne?.logoHeader?.logoImage?.value} className="" alt="" />
                </Link>
              </figure>
            </div>

            {/* mobile nav  */}

            <nav className={styles["nav_mobile"]}>
              <div className={styles["nav_inner"]}>
             
                <div className={styles["search"]}>
                <div className={`${styles["search_icon"]} ${search ? " d-none" : ''} `} onClick={handleIconClick}> 
                <img src={process?.env?.basePath + "/assets/images/search-icon2.png"}/>
                </div>
                
                <div className={`${styles["searchBox-open"]} ${search ? styles["active"] : ''}` }>
          
                    <form className={styles["form"]}>
                    <div className="search_icon_sec">
                          <img src={process?.env?.basePath + "/assets/images/search-icon2.png"} className={styles["s_icon"]}/>
                        </div>
                        <div className={styles["box_main"]}>
                          <input type="search" className={styles["searchbox"]}/>
                      
                          </div>
                         <i className={styles["search_cross"]} onClick={handleCloseClick}><MdClose/></i>
                    </form>
                
                </div>

              </div>
                <div></div>
                <div className={styles["btn"]}>
                {blockSix?.buttonsHeader?.buttonText?.value ? 
                  <Link legacyBehavior href={blockSix?.buttonsHeader?.buttonOneLink?.value || "#"}>
                    <a className="btn-primary"> {blockSix?.buttonsHeader?.buttonText?.value}</a>
                  </Link>
                  : ""} 
                </div>
                <div></div>
                <div className={styles["menu_icon"]}>
                  <i
                    className=""
                    style={{ color: "#fff" }}
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                  >
                    <BiMenuAltRight />
                  </i>
                  {/* <Offcanvas /> */}
                  <OffcanvasDemo offcanv={headerConst}/>
                </div>
              </div>
            </nav>

            <nav className={styles["nav_desktop"]}>
              <div className={`${styles["main-menu"]} ${expanded ? " d-none" : ''} `}>
                <ul className={styles["navName"]+ " mb-0 ps-0"}>
                  <li>
                    <Link
                      href={blockTwo?.MainOne?.menu1Link?.value || "#"}
                      legacyBehavior
                    >
                      <a className={styles["tab"]}>{blockTwo?.MainOne?.mainMenuHeadingOne?.value}</a>
                    </Link>

                    <div className={styles["mega-box"]}>
                    
                          <div className={styles["sec"] + " col-lg-4"}>
                            <figure>
                            <img
                              src={blockTwo?.MainOneSubOne?.subMenuOneImg?.value}
                              alt=""
                            />
                            <figcaption>
                            <Link  href="#"
                          legacyBehavior
                            >
                             <a href="#">
                             {blockTwo?.MainOneSubOne?.imageText?.value}<span className={styles["resort_no"]}>{blockTwo?.MainOneSubOne?.countText?.value}</span>
                               </a>
                               </Link>
                           <span>{blockTwo?.MainOneSubOne?.subText?.value}</span>
                       </figcaption>
                            </figure>
                          </div>
                          <div className={styles["sec"] + " col-lg-4"}>
                            <div className={styles["mega-inner"]}>
  
                            <p><Link  href="#"
                              legacyBehavior
                            >
                              <a className={styles["resort_heading"]}> {blockTwo?.MainOne?.mainSubMenuHeadingOne?.value}</a>
                              </Link>
                              </p>
                           
                            <ul  className={styles["mega-links"]+ " ps-3"}>
                              {blockTwo?.MainOneSubTwo?.value?.map((item, i) => (
                             
                                <li key={i}>
                                  <Link
                                    href={item?.textLink?.value || "#"}
                                    legacyBehavior
                                  >
                                    <a className={styles["subname"]}
                                      title={
                                        blockTwo?.MainOne?.mainMenuHeadingOne
                                          ?.value
                                      }
                                    >
                                      {item?.subMenuHeading?.value}
                                    </a>
                                  </Link>
                                </li>
                               
                              ))}
                             
                            </ul>
                            </div>
                          
                            
                          </div>
                          <div className={styles["sec"] + " col-lg-4"}>
                          <div className={styles["mega-inner"]}>
                          <p>
                            <Link  href="#" legacyBehavior>
                      
                            <a className={styles["resort_heading"]}>{blockTwo?.MainOne?.mainSubMenuHeadingTwo?.value}</a>
                            </Link>
                            </p>
                            
                            <ul className={styles["mega-links"]+ " ps-3"}>
  
                              {blockTwo?.MainOneSubThree?.value?.map((data, i) => (
                                  <li key={i}>
                                    <Link
                                      href={data?.textLink?.value || "#"}
                                      legacyBehavior
                                    >
                                     
                                      <a className={styles["subname"]}
                                      title={
                                        blockTwo?.MainOne?.mainMenuHeadingOne
                                          ?.value
                                      }>
                                        {data?.subMenuHeading?.value}
                                      </a>
                                    </Link>
                                  </li>
                                  ))}
                            </ul>
                          </div>
                          </div>
                       
                      {/* </div> */}
                    </div>
                  </li>
                  <li>
                    <Link
                      href={blockThree?.MainTwo?.menu2Link?.value || "#"}
                      legacyBehavior
                    >
                      <a className={styles["tab"]}>{blockThree?.MainTwo?.mainMenuHeadingTwo?.value}</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={blockFour?.MainThree?.menu3Link?.value || "#"}
                      legacyBehavior
                    >
                      <a className={styles["tab"]}>{blockFour?.MainThree?.mainMenuHeadingThree?.value}</a>
                    </Link>
                    <div className={styles["mega-box"]}>
                      {/* <div className={styles["content"]}> */}
                        <div className={styles["sec"] + " col-lg-4"}>
                          <figure>
                          <img
                            src={blockFour?.MainThreeSubOne?.subMenuOneImg?.value}
                            alt=""
                          />
                          <figcaption>
                          <Link  href="#" legacyBehavior>
                           <a>
                           {blockFour?.MainThreeSubOne?.imageText?.value}<span className={styles["resort_no"]}>{blockFour?.MainThreeSubOne?.countText?.value}</span>
                             </a>
                             </Link>
                         <span>{blockFour?.MainThreeSubOne?.subText?.value}</span>
                     </figcaption>
                          </figure>
                        </div>
                        <div className={styles["sec"] + " col-lg-4"}>
                          <div className={styles["mega-inner"]}>

                          <p>
                          <Link  href="#" legacyBehavior>
                            <a className={styles["resort_heading"]} href="#">{blockFour?.MainThree?.mainSubMenuHeadingOne?.value}</a>
                            </Link>
                            </p>
                         
                          <ul  className={styles["mega-links"]+ " ps-3"}>
                     
                          {blockFour?.MainThreeSubTwo?.value?.map((item, i) => (
                              <li key={i}>
                                <Link
                                  href={item?.textLink?.value || "#"}
                                  legacyBehavior
                                >
                                  <a className={styles["subname"]}
                                    title={
                                      blockFour?.MainThree
                                        ?.mainMenuHeadingThree?.value
                                    }
                                  >
                                    {item?.subMenuHeading?.value}
                                  </a>
                                </Link>
                              </li>
                            ))}
                           
                          </ul>
                          </div>
                        
                          
                        </div>
                        <div className={styles["sec"] + " col-lg-4"}>
                        <div className={styles["mega-inner"]}>
                        <p>
                        <Link  href="#" legacyBehavior>
                          <a className={styles["resort_heading"]} href="#">{blockFour?.MainThree?.mainSubMenuHeadingTwo?.value}</a>
                          </Link>
                          </p>
                        
                          <ul className={styles["mega-links"]+ " ps-3"}>

                          {blockFour?.MainThreeSubThree?.value?.map((item, i) => (
                                <li key={i}>
                                  <Link
                                    href={item?.textLink?.value || "#"}
                                   
                                    legacyBehavior
                                  >
                                    <a  title={
                                        blockFour?.MainThree
                                          ?.mainMenuHeadingThree?.value
                                      }
                                    className={styles["subname"]}>
                                      {item?.subMenuHeading?.value}
                                    </a>
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                        </div>
                     
                    </div>
                   
                  </li>
                  <li>
                    <Link
                      href={blockFive?.MainFour?.menu4Link?.value || "#"}
                      legacyBehavior
                    >
                      <a className={styles["tab"]}>{blockFive?.MainFour?.mainMenuHeadingFour?.value}</a>
                    </Link>
                    <div className={styles["mega-box"]}>
                      
                        <div className={styles["sec"] + " col-lg-4"}>
                          <figure>
                          <img
                            src={blockFive?.MainFourSubOne?.subMenuOneImg?.value}
                            alt=""
                          />
                          <figcaption>
                          <Link  href="#" legacyBehavior>
                           <a>
                           {blockFive?.MainFourSubOne?.imageText?.value}<span className={styles["resort_no"]}>{blockFive?.MainFourSubOne?.countText?.value}</span>
                             </a>
                             </Link>
                         <span>{blockFive?.MainFourSubOne?.subText?.value}</span>
                     </figcaption>
                          </figure>
                        </div>
                        <div className={styles["sec"] + " col-lg-4"}>
                          <div className={styles["mega-inner"]}>

                          <p>
                          <Link  href="#" legacyBehavior>
                           <a className={styles["resort_heading"]} href="#">{blockFive?.MainFour?.mainSubMenuHeadingOne?.value}</a>
                           </Link>
                           </p>
                         
                          <ul  className={styles["mega-links"]+ " ps-3"}>
                          {blockFive?.MainFourSubTwo?.value?.map((item, i) => (
                              <li key={i}>
                                <Link
                                  href={item?.textLink?.value || "#"}
                                  legacyBehavior
                                >
                                  <a className={styles["subname"]}
                                    title={
                                      blockFive?.MainFour?.mainMenuHeadingFour
                                        ?.value
                                    }
                                  >
                                    {item?.subMenuHeading?.value}
                                  </a>
                                </Link>
                              </li>
                            ))}
                            
                          </ul>
                          </div>
                        </div>
                        <div className={styles["sec"] + " col-lg-4"}>
                        <div className={styles["mega-inner"]}>
                        <p>
                        <Link  href="#" legacyBehavior>
                          <a className={styles["resort_heading"]} href="#">{blockFive?.MainFour?.mainSubMenuHeadingTwo?.value}</a>
                        </Link>
                          </p>
                       
                          <ul className={styles["mega-links"]+ " ps-3"}>
                          {blockFive?.MainFourSubThree?.value?.map((item, i) => (
                                <li  key={i}>
                                  <Link
                                    href={item?.textLink?.value || "#"}
                                    legacyBehavior
                                  >
                                    <a className={styles["subname"]} 
                                    title={
                                        blockFive?.MainFour?.mainMenuHeadingFour
                                          ?.value
                                      }
                                    >
                                      {item?.subMenuHeading?.value}
                                    </a>
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                        </div>
                     
                    </div>
                    
                  </li>
                  
                </ul>
              </div>
              
              <div className={styles["search"]}>
                <div className={`${styles["search_icon"]} ${expanded ? " d-none" : ''} `} onClick={handleIconClick}> 
                
                <img src={process?.env?.basePath +"/assets/images/search-icon2.png"}/>
                </div>

                <div className={`${styles["search_box"]} ${expanded ? styles["active"] : ''}` }>
                    <form className={styles["search_form"]}>
                    <div className="search_icon_sec">
                          <img src={process?.env?.basePath +"/assets/images/search-icon2.png"} className={styles["search-icon"]}/>
                        </div>
                        <div className={styles["searchbox_main"]}>
                          <input type="search" className={styles["searchbox"]}/>
                      
                          </div>
                         <i className={styles["search_cross"]} onClick={handleCloseClick}><MdClose/></i>
                    </form>
                </div>
              </div>
              <div
                className={styles["hidden_menu"]}
                style={{ visibility: "hidden" }}
              >
                <button className="">
                 
                </button>
              
                <div className="overlay_menu"></div>
              </div>
              <div className={styles["btn"]}>

              {blockSix?.buttonsHeader?.buttonText?.value ? 
                <Link
                  legacyBehavior
                  href={blockSix?.buttonsHeader?.buttonOneLink?.value || "#"}
                >
                  <a className="btn-primary">
                    {blockSix?.buttonsHeader?.buttonText?.value}
                  </a>
                </Link>
                : ""}
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
