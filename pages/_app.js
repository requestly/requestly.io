import Script from "next/script";
import Layout from "../components/Layout";
// Styles
import "../public/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/desktopDownloadCard.css";
import "../styles/customerLogo.css";
import "../styles/testimonial.css";
import "../styles/burgermenu.css";
import "../styles/container.css";
import "../styles/button.css";
import "../styles/custom.css";
import "../styles/footer.css";
import "../styles/front.css";
import "../styles/rqYTPlayer.css";
// Scripts
import rqYTPlayerConfig from "../scripts/rqYTPlayerConfig";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Script
        id="rqYTPlayerConfig"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: rqYTPlayerConfig,
        }}
      ></Script>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
