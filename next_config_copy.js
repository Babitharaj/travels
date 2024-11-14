/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: { ignoreDuringBuilds: true },
    //#BASEPATH#
    //#ASSETPATH#
  env:{
    demoEnabled: "#DEMOENABLED#",
    previewEnabled: "#PREVIEWENABLED#",
    marketplaceKey: "#MARKETPLACETOKEN#",
    dataTag:"PRIMARY",
    channel:"web",
    currency: "#CURRENCY#",
    currencyDecimalPoint: "#CURRENCYDECIMALPOINT#",
    SKIP_BUILD_STATIC_GENERATION: true,
    //#PROFILECONFIG#
    urls: {
      themeId: "#THEMEID#",
      contentSetId: "#CONTENTSETID#",
      experienceUrl: "https://experienceadmin.skartio.app/experiencemanagerframe/api/110/",
      leadUrl: "https://flead.skartio.app/leadframe/api/110/"
    }
  },

  images: {
    domains: ["skartiocloud.sgp1.cdn.digitaloceanspaces.com", "skartiocloud.sgp1.digitaloceanspaces.com", "skartio.ams3.digitaloceanspaces.com"]
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
      //#REWRITES#
};

nextConfig.env.basePath = nextConfig.basePath

module.exports = nextConfig;
//client id: 520147050501-af1ub4sa246gs06dq1s9lkrimeunvuf3.apps.googleusercontent.com
//client secret: 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