import { useState } from "react";
import { HeaderStyle } from "./HeaderStyle";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  const showMenu = () => {
    setVisible(!visible);
  };
  return (
    <HeaderStyle className="nav">
      <div className="logo col-md-4 col-sm-4 pl-5">
        <h1 className="fw-bold">
          Mechack <span>Tambwe</span>
        </h1>
      </div>
      <div className="menu__hamburger">
        <Icon
          className="icon"
          icon={!visible ? "ci:menu-alt-02" : "ci:close-big"}
          onClick={showMenu}
        />
      </div>
      <ul
        className={
          !visible
            ? "menu nav col-md-8 col-sm-6"
            : "menu nav col-md-8 col-sm-6 active"
        }
      >
        <li className="nav-item" onClick={showMenu}>
          <Link href="/" passHref>
            <a
              className={`cursor-pointer nav-link ${
                router.pathname === "/" ? "active-item" : ""
              }`}
            >
              Accueil
            </a>
          </Link>
        </li>
        <li className="nav-item" onClick={showMenu}>
          <Link href="#a-propos" passHref>
            <a
              className={`cursor-pointer nav-link ${
                router.pathname === "#a-propos" ? "active-item" : ""
              }`}
            >
              A Propos
            </a>
          </Link>
        </li>
        <li className="nav-item" onClick={showMenu}>
          <Link href="/projects" passHref>
            <a
              className={`cursor-pointer nav-link ${
                router.pathname === "/projects" ? "active-item" : ""
              }`}
            >
              Projects
            </a>
          </Link>
        </li>
        <li className="nav-item" onClick={showMenu}>
          <Link href="#competences" passHref>
            <a
              className={`cursor-pointer nav-link ${
                router.pathname === "#competences" ? "active-item" : ""
              }`}
            >
              Compétences
            </a>
          </Link>
        </li>
        <li className="nav-item" onClick={showMenu}>
          <Link href="/contact" passHref>
            <a
              className={`cursor-pointer nav-link ${
                router.pathname === "/contact" ? "active-item" : ""
              }`}
            >
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </HeaderStyle>
  );
}
