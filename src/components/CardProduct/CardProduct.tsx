import { productCardDTO } from "./CardProductDTO";
import { ContainerProduct } from "./styles";
import { GiShoppingCart } from "react-icons/gi";

const CardProduct = ({ _id, name, price, url }: productCardDTO) => {
  function addToCard(_id: string) {
    console.log(_id);
  }
  return (
    <>
      <ContainerProduct>
        <p>{name} </p>
        <img src={url} alt={name} />
        <p>R$ {price} </p>
        <span>
          <GiShoppingCart size={30} onClick={() => addToCard(_id)} />
        </span>
      </ContainerProduct>
    </>
  );
};

export default CardProduct;
