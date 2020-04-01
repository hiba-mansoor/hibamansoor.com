module.exports = {
    siteMetadata: {
        title: `Hiba Mansoor`,
        description: `Frontend Software Engineer and Aspiring Product Manager`,
        author: `Hiba Mansoor`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `hibamansoor.com`,
                short_name: `hibamansoor.com`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/female-technologist-icon.png`,
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Lato`],
                display: 'swap',
            },
        },
    ],
};
