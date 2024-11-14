// import React, { useEffect, useState } from 'react';
// import 'lightgallery.js';

// import 'lightgallery.js/dist/css/lightgallery.min.css';

// function MyComponent() {
//   const [isOpen, setIsOpen] = useState(false);


//   useEffect(() => {

//     const openLightGallery = () => {
//       setIsOpen(true);
//       // Initialize the light gallery
//       lightGallery(document.getElementById('myGallery'), {
//         // Add any options you want to use
//         // For example:
//         download: false,
//         fullScreen: false,
//         zoom: false,
//       });
//     };
//    }, []);
  
//   return (
//     <div>
//       <button onClick={openLightGallery}>Open Light Gallery</button>
//       {isOpen && (
//         <div id="myGallery">
//         <a className="item" href="/assets/images/our-resorts/gallery01.avif">
//         <img src="/assets/images/our-resorts/gallerythumb01.avif" alt="Image 1" />
//       </a>
//        <a className="item" href="/assets/images/our-resorts/gallery02.avif">
//         <img src="/assets/images/our-resorts/gallerythumb02.avif" alt="Image 2" />
//         </a>
//           {/* Add as many images as you want */}
//         </div>
//       )}
//     </div>
//   );
// }
// export default MyComponent;

import React from 'react'
import Slider from "react-slick";
// import { baseUrl } from "./config";
import styles from "./lightGallery.module.scss"


function GalleryPopup() {
  const settings = {
    customPaging: function(i) {
      return (
        <a style={{width: '60px', height: '45px'}}>
          <img src={`/assets/images/our-resorts/gallery0${i + 1}.avif`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (

    
    <div className={styles['gallery']}>
      <Slider {...settings}>
        <div>
          <img src={"/assets/images/our-resorts/gallery01.avif"} className='mx-auto' />
        </div>
        <div>
          <img src={"/assets/images/our-resorts/gallery02.avif"}  className='mx-auto' />
        </div>
        <div>
          <img src={ "/assets/images/our-resorts/gallery01.avif"}   className='mx-auto'/>
        </div>
        <div>
          <img src={ "/assets/images/our-resorts/gallery02.avif"}   className='mx-auto'/>
        </div>
      </Slider>
    </div>
   
  )
}

export default GalleryPopup;