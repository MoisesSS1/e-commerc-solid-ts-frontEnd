import { productCardDTO } from "./CardProductDTO";
import { ContainerProduct } from "./styles";

const CardProduct = ({ _id, name, price, url }: productCardDTO) => {
  return (
    <>
      <ContainerProduct>
        <p hidden>{_id}</p>
        <p>{name} </p>
        <img src={url} alt={name} />
        <p>R$ {price} </p>
      </ContainerProduct>
    </>
  );
};

export default CardProduct;
