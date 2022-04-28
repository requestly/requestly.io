import "../public/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/desktopDownloadCard.css";
import Layout from "../components/Layout";
import "../styles/customerLogo.css";
import "../styles/testimonial.css";
import "../styles/burgermenu.css";
import "../styles/container.css";
import "../styles/button.css";
import "../styles/custom.css";
import "../styles/footer.css";
import "../styles/front.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
