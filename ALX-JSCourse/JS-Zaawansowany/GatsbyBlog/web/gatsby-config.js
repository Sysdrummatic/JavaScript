// Load variables from `.env` as soon as possible
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV || "development"}`,
});

const clientConfig = require("./client-config");

//Token powinien być w zmiennej środowiskowej, ale nie działa, więc jest w kodzie
const token =
    "skweNrWsF7O2tRnDsLNG67EMqYCyZBZ5YxOOxeocZkEUZ304sLHa3PXUvffEHu85MQnJ02ZNoyMBsnAbSI352Qm7yrrt3xOqwMJQmNQr7VKdL2BwCxnYzkQBPBA8RXlKWTi7HZMIVdDbt2nNmaFee7vrKHWQppXECMf5F25jNi5jG6zml2b0";

const isProd = process.env.NODE_ENV === "production";

module.exports = {
    sanity: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID || "ojppr6ol",
        dataset: process.env.GATSBY_SANITY_DATASET || "production",
        token: token,
    },

    plugins: [
        "gatsby-plugin-postcss",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-sanity",
            options: {
                ...clientConfig.sanity,
                token: process.env.SANITY_READ_TOKEN,
                watchMode: !isProd,
                overlayDrafts: !isProd,
            },
        },
    ],
};
