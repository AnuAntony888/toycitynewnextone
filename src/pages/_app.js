import "@/styles/globals.css";
import Header from "../../Comp/Header";
import Footer from "../../Comp/Footer";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
  <Footer/>
    </>
  );
}
