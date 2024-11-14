import styles from "./resortBanner.module.scss"

export default function ResortBanner(props) {

  var banner = props?.uiLayout?.elements;

  // console.log(banner);

  return (
    <section className={styles["banner"]}>
      <div className={styles["banner_wrap"]}> 
              <figure>
                <img
                  className="img-fluid"
                  src={banner?.imageBanner?.bannerImage?.value}
                />
              </figure>
         <div className="container">
              <figcaption>
                
              <h1>{banner?.imageBanner?.heading?.value}</h1>
              <p>&nbsp;</p>
            
              </figcaption>
            </div>
        </div>
      
    </section>
  );
}
