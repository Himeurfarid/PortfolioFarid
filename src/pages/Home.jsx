import Header from "../layouts/header/Header.jsx";
import Footer from "../layouts/footer/Footer.jsx";
import "../styles/Home.css";

function Home() {
  return (
    <div class="body">
      <Header />
      <h1 class="title-home">GO2 FOOD</h1>
      <div>
        <p>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit...
        </p>
        <p>Ouvert du Mardi au Dimanche de 11h à 14h et de 18h à 23h</p>
        <p>09 78 80 90 35</p>
        <p>2 eme section Photos des produits</p>
      </div>
      <div>
        <p>
          3 eme section 16 Rue Herbillon, 51000 Châlons-en-Champagne +
          localisation sur carte en vertical
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
