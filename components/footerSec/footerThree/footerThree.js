import { useState } from "react";
import styles from "./footerThree.module.scss"
import Link from "next/link"

export default function FooterThree(props){

    const fthree=props?.fthree;
    //console.log(fthree);
  
    return(
        <>
 <div className={styles["footer_mail_info"]}>
   <div className={styles["footer_mail_info_inner"]}>
    {fthree?.mailInfo?.value?.map((item,index)=>(

     <div className={styles["mail_wrap"]} key={index}>
	<h4>{item?.heading?.value}</h4>
    <Link href="#" legacyBehavior>
        <a>{item?.mailId?.value}</a>
        </Link>
    </div>
    ))}
    {/* <div className={styles["mail_wrap"]}>

	<h4>For Franchisee Enquiries,</h4>
    <Link href="#" legacyBehavior>
        <a>business.partner@mahindraholidays.com</a>
        </Link>
    </div>   */}
     </div>
      </div>

<div className={styles["linksnew"]}>
<div className={styles["wrapp"]}>
    <h3>{fthree?.headingText?.title?.value}</h3>
</div>

<ShowMoreButton data={fthree?.impLinks?.value} maxItems={5}/> 
            {/* <Link href="#" legacyBehavior><a >Resorts in East |</a></Link>
            <Link href="#" legacyBehavior><a>Resorts in North |</a></Link>
            <Link href="#" legacyBehavior><a>Resorts in South |</a></Link>
            <Link href="#" legacyBehavior><a>Resort in West |</a></Link>
            <Link href="#" legacyBehavior><a>Resorts in Asia |</a></Link>
            <Link href="#" legacyBehavior><a>Club Mahindra Goa |</a></Link>
            <Link href="#" legacyBehavior><a>Club Mahindra Madikeri |</a></Link>
            <Link href="#" legacyBehavior><a>Club Mahindra Kandaghat |</a></Link>
            <Link href="#" legacyBehavior><a >Club Mahindra Resort Reviews |</a></Link>
            <Link href="#" legacyBehavior><a>Club Mahindra Reviews |</a></Link>
            <Link href="#" legacyBehavior><a>Club Mahindra Membership Reviews </a></Link> */}
</div>

<div className={styles["footer_link_privacy"]}>
<ul>
	<li className="ps-0"><Link href="#" legacyBehavior><a>{fthree?.headings?.linkOne?.value}</a></Link></li>
	<li><Link href="#" legacyBehavior><a>{fthree?.headings?.linkTwo?.value}</a></Link></li>
	<li><Link href="#" legacyBehavior><a>{fthree?.headings?.linkThree?.value}</a></Link></li>
</ul>
</div>
</>
    )
}

const ShowMoreButton = ({ data, maxItems }) => {
    const [showAll, setShowAll] = useState(false);
  
    const handleClick = () => {
      setShowAll(!showAll);
    };
  
    const renderedItems = showAll ? data : data?.slice(0, maxItems);
  
    return (
        <div className={styles["links_menu"]}>
        {renderedItems?.map((item, index) => ( 
        <Link key={index} href={item?.refLink?.value ||"#"} legacyBehavior><a title={item?.linkName?.value}>{item?.linkName?.value}</a></Link>
  
        ))}
        {data?.length > maxItems && (
          <span onClick={handleClick} className={styles["show_more"]}>
            {showAll ? 'Show Less' : 'Show More'}
          </span>
        )}
      </div>
    );
  };
  export const linkData=[
    {ref:"", name:"Resort in Goa"},
    {ref:"", name:"Resort in Shimla"},
    {ref:"", name:"Resort in Manali"},
    {ref:"", name:"Resort in Kashmir"},
    {ref:"", name:"Resort in Daman"},
    {ref:"", name:"Resort in Alappuzha"},
    {ref:"", name:"Resort in Coorg"},
    {ref:"", name:"Resort in Hampi"},
    {ref:"", name:"Resort in Uttrakhand"},
    {ref:"", name:"Resort in Munnar"},
    {ref:"", name:"Resort in Ladakh"},
    {ref:"", name:"Resort in Musoorie"},
    {ref:"", name:"Resort in Mahabaleshwar"},
    {ref:"", name:"Resort in Mysore"},
    {ref:"", name:"Resort in Ooty"},
]