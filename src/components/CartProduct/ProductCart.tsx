import { ProductCartDTO } from "./ProductCartDTO";
import { DataItem, ItemContainer } from "./styled";

const ProductCart = ({ name, price, _id, qtd, image }: ProductCartDTO) => {
  return (
    <ItemContainer>
      <p hidden> {_id} </p>
      <img src={image} alt={name} />
      <DataItem>
        <p> Nome: {name} </p>
        <p> Preço: R$ {price} </p>
        <p>
          Qtd:
          <input type="number" value={qtd} />
        </p>
      </DataItem>
    </ItemContainer>
  );
};

export default ProductCart;
