import styles from "./ImgContentComp.module.scss"

export default function ImageContentComp(props){
    const data=props?.item;
    return(
        <>
        <div className={styles["row-wrap"] +" row"}>
        {data?.map((item,index)=>(
        <div className={styles["listing_slider_Sec"]+" pe-0"}  key={index}>
        <div className={styles["listing_slider_secinner"]}>
                  <figure>
                      <img className="" src={item?.listingImage?.value}/>
                  </figure> 

                  <figcaption>
                      <h3>{item?.itemText?.value}</h3>
                      <p className="location">{item?.subText?.value}</p>
                  </figcaption>
                  {/* <a onclick="javascript:ClubMahindraGAResort('resort_clicked',this)" title="Club Mahindra Kensville Golf Resort, Ahmedabad" href="https://www.clubmahindra.com/our-resorts/kensville-golf-club-resort-in-ahmedabad"></a> */}
        </div>
          </div>
          ))}
          </div>
        </>
    )
}

export const slideItem=[
    {img:"/assets/images/resorts/grid-img-01.avif", title:"Azzaro Resorts and Spa, Diu", sub:"Diu, Daman and Diu "},
    {img:"/assets/images/resorts/grid-img-02.avif", title:"Devka Beach Resort", sub:"Devka Beach Resort "},
    
]