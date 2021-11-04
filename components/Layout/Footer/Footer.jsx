/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FooterStyle } from "./FooterStyle";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Footer() {
  const date = new Date();
  return (
    <FooterStyle className="row d-flex justify-content-around">
      <div className="col-lg-4 col-md-4 col-sm-12 px-4">
        <h1 className="footer__logo">
          Mechack <span className="secondary">Tambwe</span>
        </h1>
        <div className="footer__description">
          <p>
            j'aime résoudre les problèmes avec des solutions propres et
            évolutives. j'ai une véritable passion pour le design et le code.
          </p>
        </div>
        <div className="footer__social d-flex justify-content-between">
          <Link
            href="https://www.linkedin.com/in/mechack-tambwe-loleka-9bb13a10a/"
            passHref
          >
            <Icon className="icon" icon="ci:linkedin" />
          </Link>
          <Link href="https://twitter.com/mechack10" passHref>
            <Icon className="icon" icon="ci:twitter" />
          </Link>
          <Link href="https://www.instagram.com/mechack_tambwe/?hl=fr" passHref>
            <Icon className="icon" icon="ci:instagram" />
          </Link>
          <Link href="https://github.com/mesutarso" passHref>
            <Icon className="icon" icon="ci:github" />
          </Link>
          <Link
            href="https://stackoverflow.com/users/11827894/mechack-tambwe"
            passHref
          >
            <Icon className="icon" icon="ci:stack-overflow" />
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12 px-4">
        <h3 className="quick-link text-light">Liens Rapides</h3>
        <ul className="quick__links">
          <li className="nav-item">
            <Link href="/terms-and-conditions" passHref>
              Termes et Conditions
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/policies" passHref>
              Politique de Confidentialité
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/faq" passHref>
              Foires aux questions
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/blog" passHref>
              Blog
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12 px-4">
        <h3 className="contact__title text-light">Contacts</h3>
        <div className="address d-flex align-items-center my-3">
          <Icon className="icon ml-3" icon="mdi:map-marker-radius" />
          <p>7 Avenue Ngafula Commune de Ngaliema</p>
        </div>
        <div className="email d-flex align-items-center my-3">
          <Icon className="icon ml-3" icon="ci:mail" />
          <p>
            <Link href="mailto:mechacktambwe@gmail.com">
              mechacktambwe@gmail.com
            </Link>
          </p>
        </div>
        <div className="phone d-flex align-items-center my-3">
          <Icon className="icon ml-3" icon="ci:phone" />
          <p>
            <Link href="tel:+243852214059">+243852214059</Link>
          </p>
        </div>
      </div>
      <div className="copyright col-12">
        <p className="text-light">©{date.getFullYear()} Tous droits reservés</p>
      </div>
    </FooterStyle>
  );
}
