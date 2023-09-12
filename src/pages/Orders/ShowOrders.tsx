import api from "../../services/axios";
import { ContainerShowOrders } from "./style";
import { useState, useEffect } from "react";
import CardShowOrder from "../../components/CardShowOrder/CardShowOrder";

const ShowOrders = () => {
  //puxar iordens do banco e enviar ao card
  const [orders, setOrders] = useState<any>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    api
      .get("/orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setOrders(res.data.orders);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(orders);

  return (
    <>
      <ContainerShowOrders>
        {orders[0] &&
          orders.map((order: any) => {
            return (
              <CardShowOrder
                adress={order.adress}
                number={order.number}
                total={order.total}
                idsProducts={order.infoItems.idsProducts}
              />
            );
          })}
      </ContainerShowOrders>
    </>
  );
};

export default ShowOrders;
