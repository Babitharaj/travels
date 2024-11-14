
import Link from "next/link"
import styles from "./foodListItem.module.scss"

export default function FoodListingItem(props){
  const data=props?.item;
    return(

        <div className={styles["row-wrap"]+" row"}>
       
            {data?.map((item,index)=>(

          <div className={styles["wrap_destination"]} style={{width: '283px'}} key={index}>
            <div className={styles["wrap_destination_inner"]}>
              <figure>
                <img
                  className="img-fluid"
                  src={item?.listingImage?.value}
                />
              </figure>
              <figcaption>
                <h3>{item?.itemText?.value}</h3>
                <p className="mb-0">{item?.subText?.value}</p>
                
               
              </figcaption>
             
            </div>
          </div>
         

           ))}
  </div>
        // </div> 
    )
}

export const foodItem=[
    {img:"/assets/images/resorts/food-01.avif", title:"Barbeque Bay, Club Mahindra Gir", des:""},
    {img:"/assets/images/resorts/food-02.avif", title:"Machan", des:"Multi-cuisine Restaurant"},
    {img:"/assets/images/resorts/food-03.avif", title:"Gazebo", des:"Barbeque Dinner Night"},
]