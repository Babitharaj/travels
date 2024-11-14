import Link from "next/link"
import styles from "./rightInfo.module.scss"
export default function RightInfo(props){
  
  const item=props?.item;

  //console.log(item);

    return(
       <div className={"col-md-2 "+styles["footer_link_right"]}>
        <div className={styles["socialIcons"]}>
          {item?.socialLinkIcons?.value?.map((data,index)=>(

         <Link href="#" key={index} legacyBehavior><a
            target="_blank"
            title={data?.iconName?.value}
            
            className="social-icons"
          >
            <img src={data?.iconImage?.value} className="gm-loaded" />
          </a>
          </Link>
          ))}

          {/* <a
            target="_blank"
            onclick="javascript:ClubMahindraGAOutbond('outbound_link_clicked',this)"
            title="instagram"
            href="https://www.instagram.com/clubmahindra/?hl=en"
            className="social-icons"
          >
            <img src="" className="gm-loaded gm-observing gm-observing-cb" />
          </a>
          <a
            target="_blank"
            onclick="javascript:ClubMahindraGAOutbond('outbound_link_clicked',this)"
            title="youtube"
            href="https://www.youtube.com/clubmahindra"
            className="social-icons"
          >
            <img src="" className="gm-loaded gm-observing gm-observing-cb" />
          </a>
          <a
            target="_blank"
            onclick="javascript:ClubMahindraGAOutbond('outbound_link_clicked',this)"
            title="twitter"
            href="https://twitter.com/clubmahindra"
            className="social-icons"
          >
            <img src="" className="gm-loaded gm-observing gm-observing-cb" />
          </a> */}

          <h3>{item?.headings?.headingOne?.value}</h3>
          <div className={styles["socialIcons"]}>
           {item?.appIcons?.value?.map((items,index)=>(

           <Link href="#" legacyBehavior key={index}>
            <a className={styles["playStore"]}>
              <img src={items?.appIcon?.value} className="" />
            </a>
            </Link>
             ))}

            {/* <a className="playStore">
              <img src="" className="gm-loaded gm-observing gm-observing-cb" />
            </a> */}

          </div>
        </div>

        <div className={styles["contact_other_link"]}>
          <ul>
            <li>
              <a
                target="_blank"
                href="#"
              >
                {item?.headings?.headingTwo?.value}
              </a>
            </li>
          </ul>
        </div>
        <div className={styles["bottomCares"]}>

          {/* <div className={styles["bottomBlock"]}>
            <h3>Customer Care Numbers</h3>
          </div> */}

          {item?.bottomBlocks?.value?.map((data,i)=>(
          <div className={styles["bottomBlock"]} key={i}>
            <span>{data?.textOne?.value}</span>
            <h3>{data?.textTwo?.value}</h3>
            <span>{data?.textThree?.value}</span>
          </div>
           ))}

          {/* <div className={styles["bottomBlock"]}>
            <span>Existing members - India</span>
            <h3>1800 266 8899</h3>
            <span>24 x 7 Member Support Available</span>
          </div>
          <div className={styles["bottomBlock"]}>
            <span>For Existing members - International</span>
            <h3>022 69779510 </h3>
            <span>24 x 7 Member Support Available</span>
          </div> */}

        </div>
      </div> 
    )
}
export const socialIcons=[
    {img:"/assets/images/footer/fb-icon.png", ref:"https://www.facebook.com/", title:"facebook"},
    {img:"/assets/images/footer/insta-icon.png", ref:"https://www.instagram.com/", title:"instagram"},
    {img:"/assets/images/footer/youtube-icon.png", ref:"https://www.youtube.com/", title:"youtube"},
    {img:"/assets/images/footer/twitter-icon.png", ref:"https://twitter.com/",title:"twitter"},
]

 export const adver=[

  {img:"/assets/images/footer/icon-apple.png"},
  {img:"/assets/images/footer/icon-gplay.png"},

 ]
