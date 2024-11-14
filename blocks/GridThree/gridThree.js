import GridThreeComp from "@/components/gridBlocks/gridThreeComp/gridThreeComp";
import Heading from "../../components/Heading/headingComp"


export default function GridThree(props) {

  var GridThree = props?.uiLayout?.elements;

  //  console.log(GridThree);

    return (
      <section className="listing_slider_main">
        <div className="container">
          <div className="row">
            <Heading heading={GridThree?.sectionTitle?.highlightText?.value}/>
          </div>
         
          {/* <div className="row justify-content-center"> */}
               <GridThreeComp item={GridThree?.listingItem?.value}/>
            {/* </div>  */}
               
              </div>
         
      </section>
    );
  }