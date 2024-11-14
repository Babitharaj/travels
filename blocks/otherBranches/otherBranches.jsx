import Heading from "@/components/Heading/headingComp";
import styles from "./otherBranches.module.scss";

export default function OtherBranches(props) {

  var branches = props?.uiLayout?.elements;
  //  console.log(branches);

  return (
    <section className="one_holiday_multi_desti">
      <div className="container">
        <div className="row">
          
        <Heading heading={branches?.sectionTitle?.highlightText?.value} subheading={branches?.sectionTitle?.subText?.value}/>
        </div>
        <div className="row">
          <div className="col-12">
            <div className={styles["multipocation_filter_selected"]}>
  
                <select
                  name="current_city"
                 
                  className={styles["form-control"]}
                  style={{height: '60px',padding: "15px",
                    fontSize: '18px', outline:'none', marginbottom: '12px'}}
                  
                >
                  {branches?.selectItem?.value?.map((city,i)=>(
           
                  <option key={i} className={styles["items"]}>
                  {city?.itemText?.value}
                  </option>
                
                 ))}
                </select>
             
             
            </div>
         
            <div
              className={styles["multipocation_filter_content"]}>
              <div className={styles["content_inner"]}>
                <div className={styles["map_location_filter"]}>
                  <figure>
                  <iframe src={branches?.locationMap?.mapAddress?.value}
        
                   width="100%" height="450px" styles={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </figure>
                </div>
                <div className={styles["location_name"]}>
                  {branches?.relatedResorts?.value?.map((item,index)=>(
                  <div
                    className={styles["location_name_inner"]}
                   key={index}
                  >
                    <figure>
                      <img
                        className=""
                        src={item?.listingImage?.value}
                      />
                    </figure>
                    <figcaption>
                      <h4 className="mb-0">
                      {item?.itemText?.value}
                      </h4>
                    </figcaption>
                  </div>
                  ))}
                  {/* <div
                    className="location_name_inner"
                    coordinates='{"lat":22.208, "lng":69.0126}'
                  >
                    <figure>
                      <img
                        className="lazy gm-loaded gm-observing gm-observing-cb"
                        src="https://static3-clubmahindra.gumlet.io/storage/app/media/Dwarka/Dwarka%20Banner.jpg?w=300&amp;dpr=1.0"
                      />
                    </figure>
                    <figcaption>
                      <h4 className="resort_name_2">
                        Club Mahindra Dwarka Gujarat
                      </h4>
                    </figcaption>
                  </div>
                  <div
                    className="location_name_inner"
                    coordinates='{"lat":22.779917, "lng":72.201328}'
                  >
                    <figure>
                      <img
                        className="lazy gm-loaded gm-observing gm-observing-cb"
                        src="https://static-clubmahindra.gumlet.io/storage/app/media/Arookutty/Kensville/Kensville%20Banner%20Image.jpg?w=300&amp;dpr=1.0"
                      />
                    </figure>
                    <figcaption>
                      <h4 className="resort_name_3">
                        Club Mahindra Kensville Golf Ahmedabad Gujarat
                      </h4>
                    </figcaption>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export const Branches=[
  {img:'/assets/images/our-resorts/branch-01.avif', des:'Club Mahindra Gir  Gujarat'},
  {img:'/assets/images/our-resorts/branch-02.avif', des:'Club Mahindra Dwarka  Gujarat'},
  {img:'/assets/images/our-resorts/branch-03.avif', des:'Club Mahindra Kensville Golf  Ahmedabad Gujarat'},
  

]

export const cities=[
  {cityName: "Club Mahindra Gir, Gujarat + Club Mahindra Dwarka, Gujarat + Kensville Golf Club and Resort Ahmedaba"},
  {cityName: "Boulevard 9 + Club Mahindra Dwarka + Club Mahindra Gir"},
  {cityName: "Club Mahindra Dwarka + Club Mahindra Gir + Azzaro Resorts and Spa"},
  {cityName: "Netrang + Kensville + Gir"},
  {cityName: "Azzaro + Devka Beach + Gir"},
  {cityName: "Kensville + Dwarka + Gir"},
  {cityName: "Devka Beach + Azzaro + Gir"},
  {cityName: "Club Mahindra Gir, Gujarat + Club Mahindra Dwarka, Gujarat + Kensville Golf Club and Resort Ahmedaba"},
]