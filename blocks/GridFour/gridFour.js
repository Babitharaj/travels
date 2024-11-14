import Heading from "../../components/Heading/headingComp"
import GridFourComp from "../../components/gridBlocks/gridFourComp/gridFourComp"

export default function GridFour(props) {

  var gridFour = props?.uiLayout?.elements;

  // console.log(gridFour);

    return (
      <section className="listing_slider_main">
        <div className="container">
          <div className="row">
          <Heading heading={gridFour?.sectionTitle?.highlightText?.value}/>
          </div>
        
              
               <GridFourComp item={gridFour?.listingItem?.value}/>
           
               
              
        </div>
      </section>
    );
  }