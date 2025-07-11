import Link from "next/link";
import SvgIcon from "../SvgIcon/SvgIcon";
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import s from "./hero.module.scss";

const Hero = () => {
  return (
    <section>
      <div className={`${s.container}  ${s.container__hero}`}>
        <h1 className={s.title}>
          WEB STUDI<span className={s.highlight}>O</span>
        </h1>

        <div className={` ${s.container__socialNetworks}`}>
          <div>
            <Link
              href="tel:+380932344567"
              className={`${s.network__list__link} ${s.phone}`} // <-- сюди додати phone
            >
              <SvgIcon
                id="phone"
                width={24}
                height={24}
                className={`${s.network__list__icon}  `}
              />
            </Link>
          </div>

          <SocialNetworks
            network__list={s.network__list}
            className={s.network__list__link__hero}
            classNameIcon={s.network__list__icon__hero}
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
