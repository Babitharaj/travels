
import Link from "next/link"
import styles from "./gridwithIcon.module.scss"
import Slider from "react-slick";
// import styles from "./resortListing.module.scss"
export default function GridwithIcon(props){

  const item = props?.item



    return(
      <div className={styles["row-wrap"] + " row"}>
   
            {item?.map((item,index)=>(

          <div className={styles["wrap_destination"]} key={index}>
            <div className={styles["wrap_destination_inner"]}>
              <figure>
                <img
                  className="img-fluid"
                  src={item?.listingImage.value}
                />
              </figure>
              <figcaption>
                {item?.itemText?.value ? <h3>{item?.itemText?.value}</h3> : ""
                }
                {item?.subText?.value ?
                <p>{item?.subText?.value}</p> : ""}
                <span>{item?.likeText?.value}</span>
               
              </figcaption>
             
            </div>
          </div>

           ))}

        </div>
    )
}

export const resortItem=[
    {img:"/assets/images/resorts/resort-01.avif", title:"Club Mahindra Acacia Palms, Madgaon", des:"Goa, Madgaon", likes:"134248 families loved this"},
    {img:"/assets/images/resorts/resort-02.avif", title:"Club Mahindra Varca", des:"Goa, Varca", likes:"385824 families loved this"},
    {img:"/assets/images/resorts/resort-03.avif", title:"Club Mahindra Gir", des:"Goa, Madgaon", likes:"134248 families loved this"},
]