import { useEffect, useState } from "react";
import CardProduct from "../../../components/CardProduct/CardProduct";
import {
  BannerShowProducts,
  ContainerShowProducts,
  ListCategories,
} from "./styles";
import { FindShowProducts } from "./styles";
import api from "../../../services/axios";

const ShowProducts = () => {
  type T = any;

  const [products, setProducts] = useState<Array<T>>([{}]);
  console.log(products[0].name);
  useEffect(() => {
    api.get("/products").then((res) => {
      setProducts(res.data.data);
    });
  }, []);

  return (
    <ContainerShowProducts>
      <ListCategories>
        <p>Camisas</p>
        <p>Bermudas</p>
        <p>Games</p>
        <p>Equipamentos</p>
        <p>Perfumes</p>
      </ListCategories>

      <BannerShowProducts></BannerShowProducts>

      {products[0].name && (
        <FindShowProducts>
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
              />
            );
          })}
        </FindShowProducts>
      )}
    </ContainerShowProducts>
  );
};

export default ShowProducts;
