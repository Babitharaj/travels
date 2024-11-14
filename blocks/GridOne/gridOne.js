import GridOneComp from "@/components/gridBlocks/gridOneComp/gridOneComp";
import Heading from "../../components/Heading/headingComp"


export default function GridOne(props) {
  
  var gridOne = props?.uiLayout?.elements;

  //console.log(gridOne);

    return (
      <section className="listing_slider_main">
        <div className="container">
          <div className="row">
          <Heading heading={gridOne?.sectionTitle?.highlightText?.value}/>
          </div>
         
            <GridOneComp items={gridOne?.listingItem}/>
               
        </div>
      </section>
    );
  }
  