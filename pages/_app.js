
import '@/styles/globals.scss'
//  import "../public/assets/css/custom-var.css";
import "../public/assets/css/bootstrap.scss"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
// import 'lightbox-react/style.css';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import "lightgallery/css/lg-video.css";
import { Poppins } from 'next/font/google'
 
const poppins = Poppins({weight: ['400','500','600','700','900',], subsets: ['latin'] })

import AOS from "aos";
// import ScrollButton from "../components/scrollButton/scrollButton"
import { useEffect } from "react";
import Head from 'next/head';
import ScrollButton from '@/components/scrollButton/scrollButton';

 

export default function App({ Component, pageProps }) {

  const favIcon = pageProps?.uiSettings?.TT00023C03 ?.blocks?.TT00023C03B01?.elements?.favIcon?.image?.value;
  const title = pageProps?.uiSettings?.TT00023C03 ?.blocks?.TT00023C03B02?.elements?.webTitle?.title?.value;
  
  //console.log(pageProps)

 useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
    AOS.init();
  }, []);

    

  const getLayout = Component.getLayout || ((page) => page);
 
  

  return getLayout(
  <>
  {/* <Head>
        <link rel="icon" type="image/png" href={favIcon} ></link>
       <title>{title}</title>
      
        <link type="text/css" rel="stylesheet" href="css/lightgallery-bundle.css" />
    </Head> */}
  <Head>
        <link rel="icon" type="image/png" href={favIcon} />
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
       <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
  </Head>
  
  <Component {...pageProps} />
  <ScrollButton/>
 

  </>
  );
}
