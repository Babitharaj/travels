
//import PackageBenefits from '@/blocks/PackageBenefits/packageBenefits';
//import PackageBanner from '@/blocks/packageBanner/packageBanner';
//import PackageSlider from '@/blocks/packageSlider/packageSlider';
import React from 'react'
import Layout from "@/Layout/layout"
import { MapBlock } from "@/blocks/blockMap"
import { getHttpService } from "@/assistance/http-service-helper";


function Package(props) {
 
  const userSettings = props?.uiSettings;
    const mainContent = userSettings?.TT00023P07?.blocks?.map((block) => {
      if (block?.isBlockEnabled === true) {
        return MapBlock(block.blockId, block);
      }
    });
  return (
   <>
 {mainContent}
  
   </>
  )
}

Package.getLayout = function getLayout(page) {
  return (
    <Layout flag={true}>{page}</Layout>
  )
}

export default Package;

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



// {
//   "elementId": "TT00023B72E03",
//   "displayName": "Package Benefits Adv. small Banner",
//   "fieldName": "smallBanner",
//   "elementType": "S",
//   "childCount": "",
//   "styleConfig": [],
//   "animationConfig": [],
//   "styleValue": [],
//   "animationValue": [],
//   "properties": [
//     {
//       "displayName": "Small Banner Image",
//       "fieldName": "smallImage",
//       "fieldValue": "",
//       "contentId": "",
//       "inputType": "FILE",
//       "contentType": "IMAGE",
//       "allowedContent": "",
//       "allowedContents": [],
//       "styleConfig": [],
//       "animationConfig": [],
//       "styleValue": [],
//       "animationValue": [],
//       "description": "Small Banner Image"
//     }
//   ]
// }