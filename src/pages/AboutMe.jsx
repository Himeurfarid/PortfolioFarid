import Header from "../layouts/header/Header.jsx";
import Footer from "../layouts/footer/Footer.jsx";
import "../styles/AboutMe.css";

function AboutMe() {
  return (
    <div class="body">
      <Header />
      <h1 class="title-about-me">GO2 FOOD</h1>
      <div class="about-me">
        <div>
          <p>Présentation de l'entreprise</p>
        </div>
        <div>
          <p>16 Rue Herbillon, 51000 Châlons-en-Champagne</p>
          <p>Carte en horizontal </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutMe;
