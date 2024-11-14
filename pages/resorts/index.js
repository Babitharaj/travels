
import Layout from "@/Layout/layout"
import { MapBlock } from "@/blocks/blockMap"
import { getHttpService } from "@/assistance/http-service-helper";
import LoginModal from "@/components/Modal/loginModal/loginModal";


export default function Resorts(props){

    const userSettings = props?.uiSettings;
    const mainContent = userSettings?.TT00023P04?.blocks?.map((block) => {
      if (block?.isBlockEnabled === true) {
        return MapBlock(block.blockId, block);
      }
    });
    
    var formModal = userSettings?.TT00023P04?.blocks[9]?.elements;
    //console.log(formModal)

    return(

        <>
         {mainContent}
         <LoginModal formModal={formModal} />
         
        </>
    )
}

Resorts.getLayout = function getLayout(page) {
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