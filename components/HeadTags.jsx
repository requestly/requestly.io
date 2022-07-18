import Head from "next/head";
import schema from "../utils/constants/schema";

const HeadTags = ({ title, description, keywords, url, image }) => {
  return (
    <Head>
      <title>
        {title ||
          "Requestly - Lightweight Proxy to Intercept & Modify HTTP(s) requests"}
      </title>
      <meta
        name="description"
        content={
          description ||
          "Requestly allows you to Intercept & Modify network requests. Main features include Mocking APIs Response, Modifying headers, Setting up redirects, Switch hosts, Inserting custom scripts and much more"
        }
      />
      <meta
        name="keywords"
        content={
          keywords ||
          "Modify Headers, Intercept Traffic, Redirect URLs, Switch Hosts, Mock API Response, Delay Network requests, Insert Custom Scripts, Intercepting Proxy"
        }
      />
      <meta property="og:url" content={"https://requestly.io/"} />
      <meta
        property="og:title"
        content={
          title ||
          "Requestly | The platform to Intercept & Modify network requests."
        }
      />
      <meta property="og:site_name" content="Requestly" />
      <meta
        name="og:description"
        content={
          description ||
          "Requestly allows you to Intercept & Modify network requests. Main features include Mocking APIs response, Modifying headers, Setting up redirects, Switch hosts, Inserting custom scripts and much more"
        }
      />
      <meta
        property="og:image"
        content={
          image
            ? `https://requestly.io${image}`
            : "https://requestly.io/assets/img/ogImage.png"
        }
      />
      <meta property="og:type" content="website" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:creator" content="@RequestlyIO" />
      <meta
        name="twitter:title"
        content={
          title ||
          "Requestly | The platform to Intercept & Modify network requests "
        }
      />
      <meta
        name="twitter:description"
        content={
          description ||
          "Requestly allows you to Intercept & Modify network requests. Main features include Mocking APIs response, Modifying headers, Setting up redirects, Switch hosts, Inserting custom scripts and much more"
        }
      />
      <meta name="twitter:site" content="@RequestlyIO" />
      <meta
        name="twitter:image"
        content={
          image
            ? `https://requestly.io${image}`
            : "https://requestly.io/assets/img/ogImage.png"
        }
      />

      {/* Scripts and Links */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <link href="/assets/blog-images/favicon.png" rel="shortcut icon" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default HeadTags;
