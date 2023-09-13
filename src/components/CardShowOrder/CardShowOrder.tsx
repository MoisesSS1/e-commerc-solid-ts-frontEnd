import { ContainerCardShowOrder } from "./style";

interface Props {
  number: number;
  adress: any;
  idsProducts: Array<Object>;
  total: number;
}

const CardShowOrder = ({ ...props }: Props) => {
  return (
    <ContainerCardShowOrder>
      <p>{props.number} </p>
      <p>R$ {props.total}</p>
      <p>{props.adress.localidade} </p>
      <p>
        {props.adress.logradouro}, {props.adress.number}
      </p>
    </ContainerCardShowOrder>
  );
};

export default CardShowOrder;
