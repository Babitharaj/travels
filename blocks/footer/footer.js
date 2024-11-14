import FooterOne from "../../components/footerSec/footerSecOne/footerOne"
import styles from "./footer.module.scss"
import FooterTwo from "../../components/footerSec/footerSecTwo/footerTwo"
import FooterThree from "../../components/footerSec/footerThree/footerThree"
import FooterFour from "@/components/footerSec/footerFour/footerFour";


export default function Footer(props){

    var footerConst = props?.footerProps?.blocks;

    //console.log(footerConst);

    return (
  <footer>
        <div className={styles["main_footer"]}>
        <div className="container-lg">
        <FooterOne fOne={footerConst?.TT00023C02B01?.elements}/>
        <FooterTwo fTwo={footerConst?.TT00023C02B02?.elements}/>
        <FooterThree fthree={footerConst?.TT00023C02B03?.elements}/>
        </div>
        </div> 
        <div className="container px-sm-5">
        <FooterFour ffour={footerConst?.TT00023C02B04?.elements} />
        </div> 
  </footer>
    )
}