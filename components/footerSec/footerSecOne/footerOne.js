import Link from "next/link"
import styles from "./footerOne.module.scss"



export default function FooterOne(props){


    const fOne=props?.fOne;

    // console.log(fOne);

    return(

        <div className={styles["linksnew"]}>
        <div className={styles["title"] + " col-12 ps-0"}>
            <h3>{fOne?.blockTitle?.titleText?.value}</h3>
        </div>
        <div className={styles["links_menuNew"]}>
        {/* <ShowMoreButton data={fOne?.footerOneMenu?.value} maxItems={5} /> */}
        {fOne?.footerOneMenu?.value?.map((item,index)=>(

        
           <Link key={index} href={item?.menuLink?.value ||"#"} legacyBehavior><a title={item?.menuListing?.value}>{item?.menuListing?.value}</a></Link>
          
          ))}
            
    
        </div>
        
    
    </div>

    )
}

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

