import Header from "../layouts/header/Header.jsx";
import MainHome from "../layouts/main/MainHome.jsx";
import Footer from "../layouts/footer/Footer.jsx";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div class={styles.App}>
      <Header />
      <MainHome />
      <Footer />
    </div>
  );
}

export default Home;
