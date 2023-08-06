import { ProductCartDTO } from "./ProductCartDTO";
import { DataItem, ItemContainer } from "./styled";

const ProductCart = ({ name, price, _id, qtd, url }: ProductCartDTO) => {
  return (
    <ItemContainer>
      <p hidden> {_id} </p>
      <img src={url} alt={name} />
      <DataItem>
        <p> Nome: {name} </p>
        <p> Preço: R$ {price} </p>
        <input type="number" value={qtd} />
      </DataItem>
    </ItemContainer>
  );
};

export default ProductCart;
