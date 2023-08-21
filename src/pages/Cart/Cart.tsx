import ProductCart from "../../components/CartProduct/ProductCart";
import api from "../../services/axios";
import { CartContainer, CartDiv, ItemsCart } from "./style";
import { useEffect, useState } from "react";

const Cart = () => {
  let [total, setTotal] = useState<number>(0);
  const [ListProductCart, setListProdctCart] = useState<any>([]);

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

  function calcTotal(items: any) {
    let ValueReturn = 0;
    items.map((item: any) => {
      ValueReturn += item.qtd * item.price;
    });
    setTotal(ValueReturn);
  }

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
          <span>Total - </span>R$:{total}
        </p>
        <button>FECHAR PEDIDO</button>
      </CartDiv>
    </CartContainer>
  );
};

export default Cart;
