import { Link } from "@solidjs/router";
import Button from "../../components/Button.jsx";
import "../../styles/Header.css";

function Header() {
  return (
    <div class="header">
      <Button />
      <div>
        <Link href="/" class="logo-name-header">
          <p class="name-header">GO2 FOOD</p>
        </Link>
      </div>
      <nav class="nav-header">
        <ul class="ul-header">
          <Link href="/" class="link-li">
            <li class="li-header">Accueil</li>
          </Link>

          <Link href="/menus" class="link-li">
            <li class="li-header">Menus</li>
          </Link>

          <Link href="/contact" class="link-li">
            <li class="li-header">Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
