import Link from "next/link";
import SvgIcon from "../SvgIcon/SvgIcon";
import s from "./socialNetworks.module.scss";

type SocialNetworksProps = {
  className?: string;
  classNameIcon?: string;
  network__list?: string;
};

const networks = [
  {
    id: "instagram",
    href: "https://www.instagram.com/vitaliknozhenko",
    iconClass: s.instagram,
  },
  {
    id: "facebook",
    href: "https://www.facebook.com/vitaliknozhenko",
    iconClass: s.facebook,
  },
  {
    id: "tictok",
    href: "https://www.tiktok.com/@vitaliknozhenko",
    iconClass: `${s.tiktok} `,
  },
];

const SocialNetworks: React.FC<SocialNetworksProps> = ({
  className = "",
  classNameIcon = "",
  network__list = "",
}) => {
  return (
    <ul className={network__list}>
      {networks.map(({ id, href, iconClass }) => (
        <li key={id}>
          <Link
            href={href}
            target="_blank"
            className={`${s.network__list__link} ${iconClass} ${className}`}
          >
            <SvgIcon
              id={id}
              width={24}
              height={24}
              className={`${s.network__list__icon} ${classNameIcon} ${s.icon__tiktok}`}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialNetworks;

//
