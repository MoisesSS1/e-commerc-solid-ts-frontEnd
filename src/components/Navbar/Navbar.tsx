import { DivContainer, UlNavbar } from "./styles";
import "../../global.css";
import { Link, Outlet } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { TbEdit } from "react-icons/tb";
import { SlLogout } from "react-icons/sl";
import { TbHomeSearch } from "react-icons/tb";

const Navbar = () => {
  const isLogged = true;
  return (
    <>
      <DivContainer>
        <Link to={"/"}>
          <TbHomeSearch />
        </Link>
        <UlNavbar>
          {!isLogged && (
            <>
              <li>
                <Link to={"/user/login"}>Entrar</Link>
              </li>
              <li>
                <Link to={"/user/create"}>Cadastre-se</Link>
              </li>
            </>
          )}

          {isLogged && (
            <>
              <li>
                <Link to={"/cart"}>
                  <GiShoppingCart />
                </Link>
              </li>

              <li>
                <Link to={"/user/update"}>
                  <TbEdit />
                </Link>
              </li>
              <li>
                <Link to={"/logout"}>
                  <SlLogout />
                </Link>
              </li>
            </>
          )}
        </UlNavbar>
      </DivContainer>
      <Outlet />
    </>
  );
};

export default Navbar;
