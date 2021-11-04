/* eslint-disable react/no-unescaped-entities */
import { HeroStyle } from "./HeroStyle";
import Heading from "../Shared/Heading";
import Description from "../Shared/Description";
import Bouton from "../Shared/Bouton";

export default function Hero() {
  return (
    <HeroStyle className="row flex-wrap-reverse">
      <div className="col-lg-7 col-md-7 col-sm-12">
        <Heading title="FullStack Developer" color="primary" />
        <Heading
          title="Je tranforme vos besoins dans le numérique."
          color="secondary"
        />
        <Description>
          j'aime résoudre les problèmes avec des solutions propres et
          évolutives. j'ai une véritable passion pour le design et le code.
        </Description>
        <Bouton title="Me Contacter" link="contact" />
      </div>
      <div className="col-lg-5 col-md-5 col-sm-12">
        <img
          className="img-fluid"
          src="/img/bg.gif"
          alt="illustration programmeur"
        />
      </div>
    </HeroStyle>
  );
}
