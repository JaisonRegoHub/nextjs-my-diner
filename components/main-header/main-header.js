import Link from "next/link";
import Image from "next/image";

import NavLink from "./nav-link";
import logoImg from "@/assets/logo.png";
import { MainHeaderBackground } from "./main-header-background";
import mainHeaderStyles from "./main-header.module.css";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />

      <header className={mainHeaderStyles.header}>
        <Link className={mainHeaderStyles.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          My Diner · Fresh & Tasty
        </Link>

        <nav className={mainHeaderStyles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
