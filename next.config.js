// const nextSafe = require("next-safe");
// const isDev = process.env.NODE_ENV !== "production";

module.exports = {
  // async headers() {
  //   return [
  //     {
  //       source: "/:path*",
  //       headers: nextSafe({
  //         contentTypeOptions: "nosniff",
  //         contentSecurityPolicy: {
  //           "base-uri": "'none'",
  //           "child-src": "'none'",
  //           "connect-src": "'self'",
  //           "default-src": "'self'",
  //           "font-src": "'self'",
  //           "form-action": "'self'",
  //           "frame-ancestors": "'none'",
  //           "frame-src": "'none'",
  //           "img-src": "'self'",
  //           "manifest-src": "'self'",
  //           "media-src": "'self'",
  //           "object-src": "'none'",
  //           "prefetch-src": "'self'",
  //           "script-src": "'self'",
  //           "style-src": "'self'",
  //           "worker-src": "'self'",
  //           reportOnly: false,
  //         },
  //         frameOptions: "DENY",
  //         permissionsPolicy: {},
  //         permissionsPolicyDirectiveSupport: ["proposed", "standard"],
  //         isDev: isDev,
  //         referrerPolicy: "no-referrer",
  //         xssProtection: "1; mode=block",
  //       }),
  //     },
  //   ];
  // },

  images: {
    domains: ['api.producthunt.com']
  },

  async rewrites() {
    return [
      {
        source: "/blog/:year/:month/:date/:slug",
        destination: "/blog/:slug",
      },
      {
        source: "/android-interceptor/",
        destination: "/debug-android-apps/",
      },
      {
        source: "/mobile-interceptor/",
        destination: "/debug-android-apps/",
      },
      {
        source: "/android-sdk/",
        destination: "/debug-android-apps/",
      },
    ];
  },
  trailingSlash: true,
};
