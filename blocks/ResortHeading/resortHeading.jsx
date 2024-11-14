import Heading from '@/components/Heading/headingComp'
import React from 'react'

function ResortHeading(props) {

  var shortDes = props?.uiLayout?.elements;
    // console.log(shortDes);

  return (
    <section>
    <div className="container">
     <div className="row">

      
    <Heading heading={shortDes?.sectionTitle?.highlightText?.value} subheading={shortDes?.sectionTitle?.subText?.value}/>

    {/* <Heading heading="A Day at Club Mahindra Gir  Gujarat Resort" subheading="Break the children away from their internet obsession. Indulge them in activities like aqua zorbing, archery and magic workshops. Skip along the winding paths of a serene nature walk. Dance till your feet hurt at our tribal nights and get a taste of the local culture only at Club Mahindra Gir."/> */}
 </div>
     
  </div>
 
 </section>
  )
}

export default ResortHeading