import s from "./Header.module.scss";
const Logo = () => {
  return (
    <svg width={100} height={100} className={s.logo}>
      <use href={`/logo.svg`} />
    </svg>
  );
};
export default Logo;
