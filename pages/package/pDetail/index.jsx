import PdTopSection from '@/blocks/pdTopSection/pdTopSection/pdTopSection'
import PkgMain from '@/blocks/pkgMain/pkgMain'
import React from 'react'
import Layout from "@/Layout/layout"
import { getHttpService } from "@/assistance/http-service-helper";

export default function PackageDetail(props) {

  const pkgDetail = props?.uiSettings?.TT00023P08;
  
  return (
    <>
     
    <PdTopSection pkgSec={pkgDetail?.blocks}/>
    <PkgMain pkgSec={pkgDetail?.blocks}/>

    </>
  )
}
PackageDetail.getLayout = function getLayout(page) {
  return (
    <Layout flag={true}>{page}</Layout>
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
      uiSettings = require("../../../public/config.json");
    }
  }
  return {
    props: {
      uiSettings: uiSettings,
    },
  };
}



