import { StyledInputSearch } from "./style";

export const InputSearch = ({ filterProducts }) => {
  return (
    <StyledInputSearch>
      <input
        type="text"
        placeholder="Digitar Pesquisa"
        onChange={(event) => filterProducts(event.target.value)}
      />
      <button>Pesquisar</button>
    </StyledInputSearch>
  );
};
