import styles from "./footerTwo.module.scss";
import Link from "next/link";
import { product } from  "../../../Data/products";
import RightInfo from "../rightInfo/rightInfo"





export default function FooterTwo(props) {

  const fTwo=props?.fTwo;

  // console.log(fTwo);

  return (
<>
    <div className={"row "+ styles["footer_link_main"]}>
      <div className={"col-md-10 d-md-flex flex-wrap"}>
       
        {fTwo?.categoryHeading?.value?.map((item,index)=>(
  
        <div className={styles["menu_wrap"]} key={index}>
          <h3>
            <Link href="#" legacyBehavior><a
              className="links_menuNew"
              target="_self" 
            > 
             {item?.heading?.value}
            </a></Link>
          </h3>
          <div className={styles["menu"]}>
          <Link href="#" legacyBehavior>
            <a dangerouslySetInnerHTML={{ __html: item?.menuText?.value }}></a>
            </Link>
          </div>
           {/* ))} */}
        </div>
        
       
        ))}
       
       <div className={" accordion accordion-flush d-lg-none"} id="faqlist">
          {fTwo?.categoryHeading?.value?.map((item,i)=>(
              
            <div className="accordion-item" key={i}>
               <h2 className="accordion-header" id="panelsStayOpen-headingOne">
             <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#faq-content-" + i}  aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
  {item?.heading?.value}
  </button>
</h2>
<div id={"faq-content-" + i} className="accordion-collapse collapse" data-bs-parent="#faqlist">
  <div className="accordion-body" dangerouslySetInnerHTML={{ __html: item?.menuText?.value }}>
   
  </div>
</div>
</div>
            ))}
       </div>
     
      </div>
     
      
      
      <RightInfo item={fTwo}/>
    </div>
    
{/*    
      <div className={styles["faq-main"] + " accordion accordion-flush"} id="faqlist">
          {fTwo?.categoryHeading?.value?.map((item,i)=>(
              <div className={styles.accordionitem} key={i}>
                <h3 className="accordion-header">
                  <button className={styles.accordionbutton + " accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target={"#faq-content-" + i}>
                  
                  
                    {item?.heading?.value}
                  </button>
                </h3>
                <div id={"faq-content-" + i} className={styles.accordioncollapse + " accordion-collapse collapse"} data-bs-parent="#faqlist">
                  <div className={styles.accordionbody + " accordion-body"} dangerouslySetInnerHTML={{ __html: item?.menuText?.value }}>
                  
                  </div>
                </div>
              </div>
            ))}
          </div> */}
       
   </>
  );
}
const ShowMoreButton = ({ data, maxItems }) => {
  const [showAll, setShowAll] = useState(false);

  const handleClick = () => {
    setShowAll(!showAll);
  };

  const renderedItems = showAll ? data : data.slice(0, maxItems);

  return (
    <div>
      {renderedItems.map((item, index) => (
        <div key={index}>
          <p>Name: {item.name}</p>
          <p>Age: {item.age}</p>
          {/* Add more properties as needed */}
        </div>
      ))}
      {data.length > maxItems && (
        <button onClick={handleClick}>
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};
