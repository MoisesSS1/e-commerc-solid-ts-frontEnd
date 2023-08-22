import api from "../../services/axios";
import { productCardDTO } from "./CardProductDTO";
import { ContainerProduct } from "./styles";
import { GiShoppingCart } from "react-icons/gi";

const CardProduct = ({
  _id,
  name,
  price,
  image,
  messageSet,
}: productCardDTO) => {
  const token = localStorage.getItem("token");

  function addToCard(idProduct: string) {
    api
      .post(
        "/cart/add",
        {
          idProduct: idProduct,
          qtd: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {
        let msg = res.data.message;
        messageSet(msg, "sucess");
      })
      .catch((err) => {
        let msg = err.data.message;
        messageSet(msg, "error");
      });
  }

  return (
    <>
      <ContainerProduct>
        <p>{name} </p>
        <img src={image} alt={name} />
        <p>R$ {price} </p>
        <span>
          {token && <GiShoppingCart size={30} onClick={() => addToCard(_id)} />}
        </span>
      </ContainerProduct>
    </>
  );
};

export default CardProduct;
