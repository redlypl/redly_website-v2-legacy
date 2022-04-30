module.exports = {
  siteMetadata: {
    title: `Redly Website`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "UmEaUAQ-sbH8ZONRvbgFSf8rdGT1kq6wDDU6guB4CsQ",
      "spaceId": "jqub8nvgwkb4"
    }
  }, "gatsby-plugin-styled-components", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-8NN2HBELV0"
    }
  }, "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png",
      "name": "Redly - Agencja Reklamowa",
      "short_name": `Agencja Reklamowa z nowoczesnym podejściem do marketingu`,
      "start_url": `/`,
      //"background_color": `#f7f0eb`,
      //"theme_color": `#a2466c`,
      "display": `standalone`,
    }
  }, "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, "gatsby-plugin-image"
]
};