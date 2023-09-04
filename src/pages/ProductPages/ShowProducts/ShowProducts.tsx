import { useEffect, useState } from "react";
import CardProduct from "../../../components/CardProduct/CardProduct";
import { BannerShowProducts, ContainerShowProducts } from "./styles";
import { FindShowProducts } from "./styles";
import api from "../../../services/axios";
import Message from "../../../components/Message/Message";

const ShowProducts = () => {
  type T = any;

  const [products, setProducts] = useState<Array<T>>([{}]);
  const [msg, setMsg] = useState<string>("");
  const [type, setType] = useState<string>("");

  useEffect(() => {
    api.get("/products").then((res) => {
      setProducts(res.data.data);
    });
  }, []);

  function messageSet(msg: string, type: string) {
    setMsg(msg);
    setType(type);

    setTimeout(() => {
      setMsg("");
      setType("");
    }, 3000);
  }

  return (
    <ContainerShowProducts>
      <BannerShowProducts></BannerShowProducts>

      {products[0].name && (
        <FindShowProducts>
          <Message msg={msg} type={type} />
          {products.map((product, index) => {
            if (index > 20) {
              return;
            }
            return (
              <CardProduct
                key={index}
                name={product.name}
                _id={product._id}
                price={product.price}
                image={product.image}
                description={product.description}
                category={product.category}
                messageSet={messageSet}
              />
            );
          })}
        </FindShowProducts>
      )}
    </ContainerShowProducts>
  );
};

export default ShowProducts;
