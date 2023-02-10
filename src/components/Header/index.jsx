import Logo from "../../assets/logo.svg";
import { InputSearch } from "./InputSearch";
import { StyledHeader } from "./style";

export const Header = ({ filterProducts}) => {
  return (
    <StyledHeader>
      <img src={Logo} alt="Logo Hamburgueria" />
      <InputSearch filterProducts={filterProducts} />
    </StyledHeader>
  );
};
