
import Layout from "@/Layout/layout"
import { MapBlock } from "@/blocks/blockMap"
import { getHttpService } from "@/assistance/http-service-helper";

export default function Experiences(props){
    const userSettings = props?.uiSettings;
    const mainContent = userSettings?.TT00023P03?.blocks?.map((block) => {
      if (block?.isBlockEnabled === true) {
        return MapBlock(block.blockId, block);
      }
    });
    return(
        <>
        {mainContent}


        </>
    )
}

Experiences.getLayout = function getLayout(page) {
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