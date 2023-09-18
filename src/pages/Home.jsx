import Header from "../layouts/header/Header.jsx";
import Footer from "../layouts/footer/Footer.jsx";

function Home() {
  return (
    <div>
      <Header />
      <div>
        <p>Nom de l'entreprise</p>
        <p>phrase d'accroche</p>
        <p>Photos des produits</p>
      </div>
      <div>
        <p>où sommes-nous + localisation sur carte en vertical</p>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
