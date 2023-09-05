import { DivContainer, UlNavbar } from "./styles";
import "../../global.css";
import { Link, Outlet } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";
import { SlLogout } from "react-icons/sl";
import { TbHomeSearch } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const isLogged = localStorage.getItem("token");
  const navigate = useNavigate();

  function Logout() {
    localStorage.removeItem("token");
    navigate("/");
  }

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
                <Link to="/orders">
                  <CiDeliveryTruck />
                </Link>
              </li>
              <li>
                <Link to={"/cart"}>
                  <GiShoppingCart />
                </Link>
              </li>

              <li>
                <a>
                  <SlLogout onClick={() => Logout()} />
                </a>
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
