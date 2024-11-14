import Heading from '../Heading/headingComp'
import styles from './questionSection.module.scss'
// import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
// import { icons } from 'react-icons'

export default function Question(props){

  var faq = props?.uiLayout?.elements;
  // console.log(faq);

    return (
 

<section id="faq" className={styles.faq}>
      <div className="container">
      <div className="row">
      <Heading heading={faq?.sectionTitle?.highlightText?.value}/>
        </div>
        <div className="row">

            <div className={styles["faq-main"] + " accordion accordion-flush"} id="faqlist" data-aos="fade-up" data-aos-delay="100">


            {faq?.listingItem?.value?.map((data,i)=>(
              <div className={styles.accordionitem} key={i}>
                <h3 className="accordion-header">
                  <button className={styles.accordionbutton + " accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target={"#faq-content-" + i}>
                    {/* <span className={styles.num}>1.</span> */}
                  
                    {data?.accordionHeader?.value}
                  </button>
                </h3>
                <div id={"faq-content-" + i} className={styles.accordioncollapse + " accordion-collapse collapse"} data-bs-parent="#faqlist">
                  <div className={styles.accordionbody + " accordion-body"}>
                  {data?.accordionBody?.value}
                  </div>
                </div>
              </div>
            ))}
              {/* <div className={styles.accordionitem}>
                <h3 className="accordion-header">
                  <button className={styles.accordionbutton + " accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                    <span className={styles.num}>2.</span>
                    Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?
                  </button>
                </h3>
                <div id="faq-content-2" className={styles.accordioncollapse + " accordion-collapse collapse"} data-bs-parent="#faqlist">
                  <div className={styles.accordionbody + " accordion-body"}>
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                  </div>
                </div>
              </div>

              <div className={styles.accordionitem}>
                <h3 className="accordion-header">
                  <button className={styles.accordionbutton + " accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                    <span className={styles.num}>3.</span>
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?
                  </button>
                </h3>
                <div id="faq-content-3" className={styles.accordioncollapse + " accordion-collapse collapse"} data-bs-parent="#faqlist">
                  <div className={styles.accordionbody + " accordion-body"}>
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                  </div>
                </div>
              </div>

              <div className={styles.accordionitem}>
                <h3 className="accordion-header">
                  <button className={styles.accordionbutton + " accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                    <span className={styles.num}>4.</span>
                    Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                  </button>
                </h3>
                <div id="faq-content-4" className={styles.accordioncollapse + " accordion-collapse collapse"} data-bs-parent="#faqlist">
                  <div className={styles.accordionbody + " accordion-body"}>
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                  </div>
                </div>
              </div>

              <div className={styles.accordionitem}>
                <h3 className="accordion-header">
                  <button className={styles.accordionbutton + " accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                    <span className={styles.num}>5.</span>
                    Tempus quam pellentesque nec nam aliquam sem et tortor consequat?
                  </button>
                </h3>
                <div id="faq-content-5" className={styles.accordioncollapse + " accordion-collapse collapse"} data-bs-parent="#faqlist">
                  <div className={styles.accordionbody + " accordion-body"}>
                    Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                  </div>
                </div>
              </div> */}

            </div>

          </div>
        </div>

     
    </section>
           
           )
        }


        export const faqData=[

          {
             qstn:"What are the room amenities at Club Mahindra Gir?",
             ans:"Lounge in your room, watch your favourite movies with the entire family on television and DVD. And, get your much-needed break-time beverage with a tea/coffee maker available in every room.",
       
          },
          {
             qstn:"Is parking available at Club Mahindra Gir?",
             ans:"Yes, parking is available at Club Mahindra Gir.",
       
          },
          {
             qstn:"What are the top USPs of Club Mahindra Gir?",
             ans:"Club Mahindra Gir is nestled right next to the Gir Wildlife Sanctuary, the exclusive home to the majestic Asiatic lions. This resort is a one of a kind jungle resort giving visitors a chance to immerse themselves in nature and witness stunning wildlife, all with the comforts and luxuries of a Club Mahindra resort.",
       
          },
          {
             qstn:"How do I reach Club Mahindra Gir?",
             ans:"It is possible to reach Club Mahindra Gir by rail, road and air. The nearest airport is at Diu, which is 105 kms away. Otherwise, you can travel by rail to Veraval station which is only 45 kms from the resort.",
       
          },
          {
             qstn:"What is the best time to visit Club Mahindra Gir?",
             ans:"The best time to visit Gir is in the winter months, between November and February. The mild and pleasant weather will give you a chance to make the most of the outdoor activities and since this season is easier on the animals as well, you’ll have a higher chance to spot the wildlife.",
       
          },
          {
             qstn:"What are the room amenities at Club Mahindra Gir?",
             ans:"Lounge in your room, watch your favourite movies with the entire family on television and DVD. And, get your much-needed break-time beverage with a tea/coffee maker available in every room.",
       
          },
          {
             qstn:"Is parking available at Club Mahindra Gir?",
             ans:"Yes, parking is available at Club Mahindra Gir.",
       
          },
          {
             qstn:"What are the top USPs of Club Mahindra Gir?",
             ans:"Club Mahindra Gir is nestled right next to the Gir Wildlife Sanctuary, the exclusive home to the majestic Asiatic lions. This resort is a one of a kind jungle resort giving visitors a chance to immerse themselves in nature and witness stunning wildlife, all with the comforts and luxuries of a Club Mahindra resort.",
       
          },
          {
             qstn:"How do I reach Club Mahindra Gir?",
             ans:"It is possible to reach Club Mahindra Gir by rail, road and air. The nearest airport is at Diu, which is 105 kms away. Otherwise, you can travel by rail to Veraval station which is only 45 kms from the resort.",
       
          },
          {
             qstn:"What is the best time to visit Club Mahindra Gir?",
             ans:"The best time to visit Gir is in the winter months, between November and February. The mild and pleasant weather will give you a chance to make the most of the outdoor activities and since this season is easier on the animals as well, you’ll have a higher chance to spot the wildlife.",
       
          },
       ]