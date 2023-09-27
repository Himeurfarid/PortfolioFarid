import Header from "../layouts/header/Header.jsx";
import Footer from "../layouts/footer/Footer.jsx";
import "../styles/MenuFood.css";
import firstmenu from "../assets/firstmenu.jpg";
import secondmenu from "../assets/secondmenu.jpg";

function MenuFood() {
  return (
    <div class="body">
      <Header />
      <h1 class="menus-food"> Nos Menus </h1>
      <div class="images-menu">
        <img class="image-menu" src={firstmenu} alt="firstmenu" />
        <img class="image-menu" src={secondmenu} alt="secondmenu" />
      </div>
      <Footer />
    </div>
  );
}

export default MenuFood;
