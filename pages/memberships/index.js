
import Layout from "@/Layout/layout"
import { MapBlock } from "@/blocks/blockMap"
import { getHttpService } from "@/assistance/http-service-helper";
import TimerModal from "@/components/Modal/timerModal/timerModal";
import LoginModal from "@/components/Modal/loginModal/loginModal";


export default function Memberships(props){
    const userSettings = props?.uiSettings;
    const mainContent = userSettings?.TT00023P02?.blocks?.map((block) => {
      if (block?.isBlockEnabled === true) {
        return MapBlock(block.blockId, block);
      }
    });
    var modal = userSettings?.TT00023P02?.blocks[10]?.elements;
    var modalForm = userSettings?.TT00023P02?.blocks[11]?.elements;
    //console.log(modalForm)

    return(
        <>
        {mainContent}
        <TimerModal  timermodal={modal}/>
        <LoginModal formModal={modalForm}/>
     
        </>
    )
}

Memberships.getLayout = function getLayout(page) {
    return (
      <Layout>{page}</Layout>
    )
  }
  
  
  export async function getStaticProps() {
    let uiSettings = {};
    if (process.env.previewEnabled == "Y") {
      const result = await fetch(
        "uisettings?themeId=" +
          process.env.urls.themeId +
          "&contentSetId=" +
          process.env.urls.contentSetId,
        "getEnterpriseThemeUISettingsPreview"
      );
      if (result.status == 200 && result.data.status == 200) {
        uiSettings = result.data.data.uiMapping;
      }
    } else {
      if (process.env.demoEnabled == "N") {
        const result = await getHttpService("uisettings", "getEnterpriseThemeUISettings");
        if (result.status == 200 && result.data.status == 200) {
          uiSettings = result.data.data.uiMapping;
        }
      } else {
        uiSettings = require("../../public/config.json");
      }
    }
    return {
      props: {
        uiSettings: uiSettings,
      },
    };
  }