import CardProduct from "../../../components/CardProduct/CardProduct";
import {
  BannerShowProducts,
  ContainerShowProducts,
  ListCategories,
} from "./styles";
import { FindShowProducts } from "./styles";

const ShowProducts = () => {
  const productsShowList = [
    {
      _id: "sasaas",
      url: "https://img.freepik.com/psd-gratuitas/modelo-de-camiseta-tripulacao-tri-blend-para-homem_126278-130.jpg?w=740&t=st=1690282609~exp=1690283209~hmac=55dd3940c967d607f52535a48996dacb2fc96dbbd2dca38caa9a0ce14a1f5ad7",
      name: "Camiseta preta básica",
      price: 9.99,
    },
    {
      _id: "sasaas",
      url: "https://img.freepik.com/vetores-gratis/textura-para-camisa-de-futebol-de-futebol_29096-1271.jpg?w=900&t=st=1690285467~exp=1690286067~hmac=0afd74d5a47ededdb83ebd6869fa960a625a3c5e2aa3e23bcc05a1890f41f27d",
      name: "Camiseta preta básica",
      price: 9.99,
    },
    {
      _id: "sasaas",
      url: "https://img.freepik.com/vetores-premium/modelo-de-camisa-de-futebol-com-design-de-camiseta-esportiva_29096-1275.jpg",
      name: "Camiseta preta básica",
      price: 9.99,
    },
    {
      _id: "sasaas",
      url: "https://img.freepik.com/psd-premium/vista-frontal-de-um-modelo-de-calca-curta-e-cor-variavel_661731-37.jpg?w=740",
      name: "Bermuda amarela",
      price: 9.99,
    },
    {
      _id: "sasaas",
      url: "https://img.freepik.com/psd-gratuitas/modelo-de-camiseta-tripulacao-tri-blend-para-homem_126278-130.jpg?w=740&t=st=1690282609~exp=1690283209~hmac=55dd3940c967d607f52535a48996dacb2fc96dbbd2dca38caa9a0ce14a1f5ad7",
      name: "Camiseta preta básica",
      price: 9.99,
    },
    {
      _id: "sasaas",
      url: "https://img.freepik.com/psd-gratuitas/modelo-de-camiseta-tripulacao-tri-blend-para-homem_126278-130.jpg?w=740&t=st=1690282609~exp=1690283209~hmac=55dd3940c967d607f52535a48996dacb2fc96dbbd2dca38caa9a0ce14a1f5ad7",
      name: "Camiseta preta básica",
      price: 9.99,
    },
    {
      _id: "sasaas",
      url: "https://img.freepik.com/psd-gratuitas/modelo-de-camiseta-tripulacao-tri-blend-para-homem_126278-130.jpg?w=740&t=st=1690282609~exp=1690283209~hmac=55dd3940c967d607f52535a48996dacb2fc96dbbd2dca38caa9a0ce14a1f5ad7",
      name: "Camiseta preta básica",
      price: 9.99,
    },
  ];

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

      <FindShowProducts>
        {productsShowList.map((product) => {
          return (
            <CardProduct
              name={product.name}
              _id={product._id}
              price={product.price}
              url={product.url}
            />
          );
        })}
      </FindShowProducts>
    </ContainerShowProducts>
  );
};

export default ShowProducts;
