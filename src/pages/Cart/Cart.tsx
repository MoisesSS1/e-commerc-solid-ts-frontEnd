import ProductCart from "../../components/CartProduct/ProductCart";
import api from "../../services/axios";
import { CartContainer, CartDiv, ItemsCart } from "./style";
import { useEffect, useState } from "react";

const Cart = () => {
  const [total, setTotal] = useState<number>(0);
  const [ListProductCart, setListProdctCart] = useState<any>([]);

  function calcTotal(items: any) {
    const arrValues = items.map((item: any) => {
      let value = 0;
      value = item.qtd * item.price;
      return value;
    });

    const sum = arrValues.reduce((accumulator: number, value: number) => {
      return accumulator + value;
    }, 0);

    setTotal(sum);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    api
      .get("/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setListProdctCart(res.data.data);
        calcTotal(res.data.data);
      });
  }, []);

  return (
    <CartContainer>
      <CartDiv>
        <ItemsCart>
          CARRINHO
          {ListProductCart[0] &&
            ListProductCart.map((item: any) => {
              return (
                <ProductCart
                  key={item._id}
                  name={item.name}
                  _id={item._id}
                  price={item.price}
                  image={item.image}
                  qtd={item.qtd}
                />
              );
            })}
        </ItemsCart>
        <p>
          {" "}
          <span>Total - </span>R$: {total.toFixed(2)}
        </p>
        <button>FECHAR PEDIDO</button>
      </CartDiv>
    </CartContainer>
  );
};

export default Cart;
