import Header from "../layouts/header/Header.jsx";
import Footer from "../layouts/footer/Footer.jsx";

function AboutMe() {
  return (
    <div>
      <Header />
      <div>
        <p>Nom de l'entreprise</p>
        <p>Présentation de l'entreprise</p>
        <p>Carte en horizontal + Adresse</p>
      </div>
      <Footer />
    </div>
  );
}

export default AboutMe;
