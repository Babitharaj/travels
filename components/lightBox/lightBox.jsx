// import React, { useRef, useEffect } from 'react';
// //import 'lightgallery/dist/css/lightgallery.min.css';
// import Lightgallery from 'lightgallery/react';
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import lgAutoplay from 'lightgallery/plugins/autoplay';
// import 'lightgallery/css/lightgallery.css';
// import 'lightgallery/css/lg-zoom.css';
// import 'lightgallery/css/lg-thumbnail.css';

// // If you want you can use SCSS instead of css
// import 'lightgallery/scss/lightgallery.scss';
// import 'lightgallery/scss/lg-zoom.scss';



// const ThumbnailGallery = ({ images }) => {
//   const lgRef = useRef(null);

//   useEffect(() => {
//     if (lgRef.current) {
//       lgRef.current.getPlugin('thumbnail').update();
//     }
//   }, [images]);

//   return (
//     <Lightgallery
//       ref={lgRef}
//       plugins={[lgThumbnail, lgAutoplay]}
//       mode="lg-fade"
//       speed={500}
//     >
//       {images.map((image, index) => (
//         <a href={image.src} key={index}>
//           <img src={image.thumbnail} alt={`Thumbnail ${index + 1}`} />
//         </a>
//       ))}
//     </Lightgallery>
//   );
// };

// export default ThumbnailGallery;



// #####################################################################



import React, { useState } from 'react'
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import styles from './lightBox.module.scss'
import Link from 'next/link';

const SetImges = [
    {
        src: '/assets/images/packages/glry-01.webp',
        thumb: '/assets/images/packages/glry-01.webp'
    },
    {
        src: '/assets/images/packages/glry-01.webp',
        thumb: '/assets/images/packages/glry-01.webp'
    },
    {
        src: '/assets/images/packages/glry-01.webp',
        thumb: '/assets/images/packages/glry-01.webp'
    },
    {
      src: '/assets/images/packages/glry-01.webp',
      thumb: '/assets/images/packages/glry-01.webp'
  },
  {
      src: '/assets/images/packages/glry-02 (1).jpg',
      thumb: '/assets/images/packages/glry-02 (1).jpg'
  },
  {
      src: '/assets/images/packages/glry-01.webp',
      thumb: '/assets/images/packages/glry-01.webp'
  }
    
]
export default function ThumbnailGallery(props) {
  const onInit = () => {
    console.log('lightGallery has been initialized');
};

  
    return (
        <>
           <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                style={{text:"center"}}
            >
            {props?.Gallery?.map((item,i)=>(
               <Link  href={item?.galleryImage?.value} legacyBehavior><a key={i} className={styles["horizontal"]}>
                <img src={item?.galleryImage?.value} alt=""/>
                </a>
                </Link>
                ))}
              
                
            </LightGallery>
        </>
    )
}
