import "@/styles/globals.css";
import Header from "../../Comp/Header";
import Footer from "../../Comp/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <link
        href="https://unpkg.com/aos@2.3.1/dist/aos.css"
        rel="stylesheet"
      ></link>

      <Header />

      <Component {...pageProps} />
      <Footer />
    </>
  );
}
