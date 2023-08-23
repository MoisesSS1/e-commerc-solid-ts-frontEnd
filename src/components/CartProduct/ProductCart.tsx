import { useEffect, useState } from "react";
import api from "../../services/axios";
import { ProductCartDTO } from "./ProductCartDTO";
import { DataItem, ItemContainer } from "./styled";
import { AiOutlineDelete } from "react-icons/ai";

const ProductCart = ({ name, price, _id, qtd, image }: ProductCartDTO) => {
  function deleteItem(_id: string) {
    const token = localStorage.getItem("token");
    api
      .post(
        "/cart/delete",
        {
          idProduct: _id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then(() => {
        location.reload();
      });
  }

  return (
    <ItemContainer>
      <img src={image} alt={name} />
      <DataItem>
        <p> {name} </p>
        <p> R$ {price} </p>
        <p>
          Qtd:
          <input type="number" value={qtd} />
        </p>
        <span onClick={() => deleteItem(_id)}>
          <AiOutlineDelete />
        </span>
      </DataItem>
    </ItemContainer>
  );
};

export default ProductCart;
