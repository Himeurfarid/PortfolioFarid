import { Link } from "@solidjs/router";
import Button from "../../components/Button.jsx";
import "../../styles/Header.css";

function Header() {
  return (
    <div class="header">
      <Button />
      <div>
        <Link href="/" class="logo-name-header">
          <p class="logo-header">Logo</p>
          <p class="name-header">Nom du Restaurant</p>
        </Link>
      </div>
      <nav class="nav-header">
        <ul class="ul-header">
          <li class="li-header">
            <Link href="/" class="link-li">
              Accueil
            </Link>
          </li>
          <li class="li-header">
            <Link href="/menus" class="link-li">
              Menus
            </Link>
          </li>
          <li class="li-header">
            <Link href="/infos" class="link-li">
              À propos
            </Link>
          </li>
          <li class="li-header">
            <Link href="/contact" class="link-li">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
