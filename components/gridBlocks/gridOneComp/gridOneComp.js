import styles from "./gridOneComp.module.scss"

export default function GridOneComp(props){
    const data= props?.items;
    //console.log(data)
    return(
        <>
         <div className={styles["row-wrap"] +" row"}>
        {/* {data?.map((item,index)=>( */}
        <div  className={styles["listing_slider_Sec"]+" pe-0"}>
        <div className={styles["listing_slider_secinner"]}>
                  <figure>
                      <img className="" src={data?.listingImage?.value}/>
                  </figure> 

                  <figcaption>
                      <h3>{data?.itemText?.value}</h3>
                      <p>{data?.subText?.value}</p>
                  </figcaption>
                
        </div>
          </div>
        {/* //   ))} */}
          </div>
        </>
    )
}

export const slideItem=[
    {img:"/assets/images/resorts/gridOne-01.avif", title:"Kashmir House Boats, Srinagar", sub:"Srinagar, Jammu and Kashmir"},
    
    
]