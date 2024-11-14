
import { MapBlock } from "@/blocks/blockMap"
import { getHttpService } from "@/assistance/http-service-helper";
import Layout from "@/Layout/layout"

export default function Home(props) {

  const userSettings = props?.uiSettings;
  const mainContent = userSettings?.TT00023P01?.blocks?.map((block) => {
    if (block?.isBlockEnabled) {
      return MapBlock(block.blockId, block);
    }
  });
  
  // const favIcon = props?.uiSettings?.TT00023C03 ?.blocks?.TT00023C03B01?.elements?.favIcon?.image?.value;
  // const title = props?.uiSettings?.TT00023C03 ?.blocks?.TT00023C03B02?.elements?.webTitle?.title?.value;

  return (
   <>
 {/* <Head>
        <link rel="icon" type="image/png" href={favIcon} />
        <title>{title}</title>
      
  </Head> */}

  {mainContent}

   </>
      
  )
}

Home.getLayout = function getLayout(page) {
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
      uiSettings = require("../public/config.json");
    }
  }
  return {
    props: {
      uiSettings: uiSettings,
    },
  };
}