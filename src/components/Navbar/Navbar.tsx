import { DivContainer, UlNavbar } from "./styles";
import "../../global.css";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <DivContainer>
        <Link to={"/"}>Netshoes</Link>
        <UlNavbar>
          <li>
            <Link to={"/user/login"}>Entrar</Link>
          </li>

          <li>
            <Link to={"/user/create"}>Cadastre-se</Link>
          </li>
          <li>
            <Link to={"/user/update"}>Editar</Link>
          </li>
          <li>
            <Link to={"/logout"}>Sair</Link>
          </li>
        </UlNavbar>
      </DivContainer>
      <Outlet />
    </div>
  );
};

export default Navbar;
