import Heading from "@/components/Heading/headingComp"
import styles from "./packageProvides.module.scss"



export default function PackageProvides(props){

 var provides = props?.uiLayout?.elements;
    // console.log(provides);

    return (
    <section>
    <div className="container">
    <div className="row">

    <Heading heading={provides?.sectionTitle?.highlightText?.value}  subheading={provides?.sectionTitle?.subText?.value}/>
    
     <div className="col-12">
           
            <div className={styles["aminities"]}>
                <ul>
                    {provides?.listingItem?.value?.map((item,index)=>(


                     <li key={index}>
                        <div className={styles["aminities_inner"]}>
                            <figure>
                                <img className="img-fluid"  alt="" title="" src={item?.itemIcons?.value}/>
                            </figure>
                            <figcaption>
                                <h4>{item?.itemText?.value}</h4>
                            </figcaption>
                        </div>
                    </li>
                     ))}
                    
                    </ul>
            </div>
                   
        </div>
    </div>


</div></section>
    )
}
export const listItem=[
    {img:"/assets/images/our-resorts/expIcons-01.webp", title:"Chakada Ride"},
    {img:"/assets/images/our-resorts/expIcons-02.webp", title:"Kathiawadi Thali for Lunch"},
    {img:"/assets/images/our-resorts/expIcons-03.webp", title:"Gazebo (Barbeque Dinner Night)"},
    {img:"/assets/images/our-resorts/expIcons-02.webp", title:"Junagadh Fort and Somnath Temple Trip"},
    {img:"/assets/images/our-resorts/expIcons-02.webp", title:"Kathiawadi Thali for Lunch"},
    {img:"/assets/images/our-resorts/expIcons-01.webp", title:"Chakada Ride"},
    {img:"/assets/images/our-resorts/expIcons-03.webp", title:"Pool party with family"},
]