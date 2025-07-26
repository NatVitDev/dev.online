import Link from "next/link";
import SvgIcon from "../SvgIcon/SvgIcon";
import s from "./footer.module.scss";
import Logo from "../Header/Logo";
import Nav from "../Nav/Nav";
import Button from "../Button/Button";
import SocialNetworks from "../SocialNetworks/SocialNetworks";

const Footer = () => {
  return (
    <footer>
      <div className={`${s.container}  ${s.container__footer}`}>
        <Logo />
        <div>
          <Link href="tel:+380932344567" className={s.phoneLink}>
            <SvgIcon
              id="phone"
              width={24}
              height={24}
              className={` ${s.phone}`}
            />
            <span className={s.phoneText}>+380 93 234 45 67</span>
          </Link>
          <SocialNetworks
            network__list={s.network__list}
            className={s.network__list__link__footer}
            classNameIcon={s.network__list__icon__footer}
          />
        </div>
        <Nav className={s.list__column} />

        <Button>ЗВ’ЯЗАТИСЬ</Button>
      </div>
    </footer>
  );
};

export default Footer;
