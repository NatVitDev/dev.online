import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import Nav from "../Nav/Nav";
import Logo from "./Logo";

const Header = () => {
  return (
    <>
      <Logo />
      <Nav />
      <LocaleSwitcher />
    </>
  );
};
export default Header;
