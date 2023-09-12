interface Props {
  number: number;
  adress: Object;
  idsProducts: Array<Object>;
  total: number;
}

const CardShowOrder = ({ ...props }: Props) => {
  return (
    <div>
      <p>pedido: {props.number} </p>
      <p>total: {props.total}</p>
    </div>
  );
};

export default CardShowOrder;
