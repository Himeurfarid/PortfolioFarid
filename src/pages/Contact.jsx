import Header from "../layouts/header/Header.jsx";
import Footer from "../layouts/footer/Footer.jsx";
import "../styles/Contact.css";

function Contact() {
  return (
    <div class="body">
      <Header />
      <h1 class="title-contact">GO2 FOOD</h1>
      <div class="contact">
        <div class="container">
          <h2>Contactez-nous</h2>
          <form class="form-contact" action="/action_page.php">
            <label for="lname">Nom</label>
            <input type="text" id="lname" name="lastname" />

            <label for="fname">Prénom</label>
            <input type="text" id="fname" name="firstname" />

            <label for="phone">Téléphone</label>
            <input type="text" id="phone" name="phone" />

            <label for="emailAddress">Email</label>
            <input id="emailAddress" type="email" name="email" />

            <label for="subject">Message</label>
            <textarea
              id="subject"
              name="subject"
              style="height:200px"></textarea>

            <input type="submit" value="Envoyer" />
          </form>
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

export default Contact;
