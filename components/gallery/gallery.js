// import LightGallery from 'lightgallery/react';

// // import styles
// import 'lightgallery/css/lightgallery.css';
// import 'lightgallery/css/lg-zoom.css';
// import 'lightgallery/css/lg-thumbnail.css';

// // If you want you can use SCSS instead of css
// import 'lightgallery/scss/lightgallery.scss';
// import 'lightgallery/scss/lg-zoom.scss';

// // import plugins if you need
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import lgZoom from 'lightgallery/plugins/zoom';
// import { useState } from 'react';

// function Gallery() {

 
//     const onInit = () => {
//         console.log('lightGallery has been initialized');
//     };
//     return (
//         <div className="App">
          
//             <LightGallery
           
//                 onInit={onInit}
//                 speed={500}
//                 plugins={[lgThumbnail, lgZoom]}
                
//             >
              
//           <a className="item" href="/assets/images/our-resorts/gallery01.avif">
//         <img src="/assets/images/our-resorts/gallerythumb01.avif" alt="Image 1" />
//       </a>
//        <a className="item" href="/assets/images/our-resorts/gallery02.avif">
//         <img src="/assets/images/our-resorts/gallerythumb02.avif" alt="Image 2" />
//         </a>
               
//             </LightGallery>
//         </div>
//     );
// }
// export default Gallery;

import React, { useState } from 'react'
import styles from "./gallery.module.scss"

function Gallery() {

  const imgs=[
    {id:"0", src:"/assets/images/our-resorts/gallery01.avif"},
    {id:"1", src:"/assets/images/our-resorts/gallery02.avif"},
    {id:"2", src:"/assets/images/our-resorts/gallery01.avif"},
    {id:"3", src:"/assets/images/our-resorts/gallery02.avif"},
  ];
  
  const [sliderData,setSliderData]=useState(imgs[0])
  const handleClick = (index)=>{
    console.log(index);
    const slider=imgs[index]
    setSliderData(slider)
  }
  return (
    <div className={styles['gallery']}>
    <div className={styles['zoom']}>
   <img src={sliderData?.src} height={300} width="500"/>
   </div>

<div className={styles['flex-row']}>
{imgs?.map((data,i)=>
  
  <div className={styles['thumbnail']}>
  <img className={sliderData.id==i ? "clicked" : ""} src={data?.src} height={70} width={100} onClick={()=>handleClick(i)} key={i}/>
</div>

)}
</div>
    </div>
  )
}

export default Gallery;