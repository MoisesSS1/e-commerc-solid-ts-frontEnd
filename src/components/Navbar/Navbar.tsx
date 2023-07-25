import { DivContainer, UlNavbar } from "./styles";
import "../../global.css";

const Navbar = () => {
  return (
    <div>
      <DivContainer>
        <p>Netshoes</p>
        <UlNavbar>
          <li>Entrar</li>
          <li>Cadastre-se</li>
          <li>Sair</li>
        </UlNavbar>
      </DivContainer>
    </div>
  );
};

export default Navbar;
