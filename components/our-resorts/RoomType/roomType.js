import { useState } from "react";
import styles from "./roomType.module.scss";
import Heading from "@/components/Heading/headingComp";
import CustomModal from "@/components/Modal/modal/customModal";
import AminitiesModal from "@/components/Modal/aminitiesModal/aminitiesModal";


export default function RoomType(props){

  var roomsType = props?.uiLayout?.elements;
  // console.log(roomsType);

   
return(
<section className="most_loved_destination ">  
    <div className="container">
    <div className="row">

    <Heading heading={roomsType?.sectionTitle?.highlightText?.value} subheading={roomsType?.sectionTitle?.subText?.value}/>
    
            <div className={styles["room_types"] + " row"}>
           
            {roomsType?.roomType?.value?.map((item,index)=>(
          
            <div className={styles["wrap_destination"]} key={index}>
             <div className={styles["wrap_destination_inner"]}>
               
                <figure>
                    <img className="" alt="" title="" src={item?.listingImage?.value}/>
                </figure>
               
                <figcaption>
                     <h3>
                        <p className="mb-0"><strong>{item?.itemText?.value}</strong></p>
                    </h3>

                      <p className="mb-0">{item?.subText?.value}</p>

                    <span className={styles["gallery_icon"]} style={{backgroundImage:`url(${roomsType?.iconHeading?.modalIcon?.value})`}}
                    data-bs-toggle="modal" data-bs-target={"#staticBackdropOne"+ index}></span>
                   
                </figcaption>
               
             </div>
             <AminitiesModal item={item} heading={roomsType?.iconHeading?.descHeading?.value} index={index}/> 
             </div>
              
              ))}  
                             
            </div>
      
       
    </div>
</div>
  
  
</section>
  
    )
}    
export const itemList=[
    {img:"/assets/images/our-resorts/Room-01.avif", heading:"Hotel Unit",subheading:"2 Adults + 1 Child"},
    {img:"/assets/images/our-resorts/Room-02.avif", heading:"Studio",subheading:"2 Adults + 2 Children"},
    {img:"/assets/images/our-resorts/Room-03.avif", heading:"strong",subheading:"2 Adults + 1 Child"}
]

export const modal = [
    {
      name: "Facebook",
      icon: "/assets/images/footer/fb-icon.avif",
    },
    {
      name: "Linkedin",
      icon: "/assets/images/footer/icon-ln.png",
    },
    {
      name: "Twitter",
      icon: "/assets/images/footer/twitter-icon.avif",
    },
    {
      name: "Gmail",
      icon: "/assets/images/footer/email-icon.png",
    },
    {
      name: "Whatsapp",
      icon: "/assets/images/footer/icon-whatsapp.png",
    },
  ];
  