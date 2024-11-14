/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/Travel-ProBusiness-Website1683020486015",
  assetPrefix: "/Travel-ProBusiness-Website1683020486015",
  env:{
  basePath: "",
    demoEnabled: "Y",
    previewEnabled: "N",
    marketplaceKey:"96f7eccebdANG",
    dataTag:"PRIMARY",
    channel:"web",
    currency: "$",
    SKIP_BUILD_STATIC_GENERATION: true,
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
}

nextConfig.env.basePath = nextConfig.basePath

module.exports = nextConfig
