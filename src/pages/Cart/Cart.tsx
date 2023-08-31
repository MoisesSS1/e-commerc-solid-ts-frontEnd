import ProductCart from "../../components/CartProduct/ProductCart";
import api from "../../services/axios";
import {
  CartContainer,
  CartDiv,
  ItemsCart,
  SelectAdress,
  DivInfoAdress,
  DivOrderFinalize,
  DivAdressInfo,
} from "./style";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Cart = () => {
  const token = localStorage.getItem("token");
  const [stage, setStage] = useState(1);

  //staged 1
  const [total, setTotal] = useState<number>(0);
  const [ListProductCart, setListProdctCart] = useState<any>([]);

  //staged 2
  const [cep, setCep] = useState<string>("");
  const [numberAdress, setNumberAdress] = useState("");
  const [apiAdress, setApiAdress] = useState<boolean | any>(false);

  //stage 3
  const [createOrder, setCreateOrder] = useState({});
  const [sendOrder, setSendOrder] = useState(false);
  const [returnNumberOrder, setReturnNumberOrder] = useState(0);

  //etapas
  //1 - fazer pedido
  //2 - incluir cep para entrega + preço da entrega
  //3 - finalizar compra

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
    const arrValues = items.map((item: any) => {
      let value = 0;
      value = item.qtd * item.price;
      return value;
    });

    const sum = arrValues.reduce((accumulator: number, value: number) => {
      return accumulator + value;
    }, 0);

    setTotal(sum.toFixed(2));
  }

  function getAdress(cep: string) {
    api
      .post("/adress", {
        cep: cep,
      })
      .then((res) => {
        if (res.data.erro === true) {
          //componente message e retornar erro na mensagem
          return console.log("Não achou cep");
        }
        setApiAdress(res.data);
      })
      .catch((err) => {
        //incluir flash message de erro
        console.log(err.response.data.message);
      });
  }

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCep(e.target.value);
  }

  function closeOrder() {
    setStage(2);
  }

  function generateOrder() {
    //salva os dados editados e chama a função para emitir criação do pedido
    setCreateOrder({
      total: total,
      infoItems: {
        idsProducts: ListProductCart,
      },
      adress: { ...apiAdress, number: numberAdress },
    });

    setSendOrder(true);

    //muda para aba com as informações do pedido consolidadas
    setStage(3);
  }

  useEffect(() => {
    if (sendOrder) {
      api
        .post(
          "/orders/create",
          {
            order: createOrder,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((res: any) => {
          console.log(res);
          setReturnNumberOrder(res.data.createOrder.number);
        });
    }
  }, [sendOrder]);

  return (
    <CartContainer>
      {stage === 1 && (
        <CartDiv>
          <ItemsCart>
            <h1>CARRINHO</h1>
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

          {ListProductCart[0] && (
            <>
              <p>Total - R$: {total}</p>
              <button onClick={() => closeOrder()}>Fechar pedido</button>
            </>
          )}
        </CartDiv>
      )}

      {stage === 2 && (
        <CartDiv>
          <h2>ENDEREÇO</h2>
          <SelectAdress>
            <p>
              <input
                type="string"
                placeholder="CEP"
                value={cep}
                onChange={(e) => handleOnChange(e)}
              />
              <span onClick={() => getAdress(cep)}>
                <AiOutlineSearch />
              </span>
            </p>

            {apiAdress && (
              <DivInfoAdress>
                <p>
                  {apiAdress.logradouro} - {apiAdress.bairro}
                </p>
                <p>
                  {apiAdress.localidade} - {apiAdress.uf}
                </p>
                <p></p>
                <p>
                  Nº :{" "}
                  <input
                    type="number"
                    min={0}
                    value={numberAdress}
                    onChange={(e) => setNumberAdress(e.target.value)}
                  />
                </p>

                <button onClick={() => generateOrder()}>
                  Finalizar compra
                </button>
              </DivInfoAdress>
            )}
          </SelectAdress>
        </CartDiv>
      )}

      {stage === 3 && returnNumberOrder && (
        <CartDiv>
          <DivOrderFinalize>
            <h2>PEDIDO FINALIZADO</h2>
            <p>Nº do pedido : {returnNumberOrder} </p>
            <p>Total: R$ {total}</p>

            <DivAdressInfo>
              <p>
                {apiAdress.uf} - {apiAdress.localidade}
              </p>
              <p>
                {apiAdress.bairro} - {apiAdress.logradouro} - {numberAdress}
              </p>

              <p>{apiAdress.cep}</p>
            </DivAdressInfo>

            {/* Redirecionar para pagina com lista de pedidos*/}
            <button>Meus pedidos</button>
          </DivOrderFinalize>
        </CartDiv>
      )}
    </CartContainer>
  );
};

export default Cart;
