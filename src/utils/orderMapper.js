// transforma payload recebido em order + items
export function mapOrder(payload) {
  const orderId = payload.numeroPedido.split("-")[0];

  const order = {
    orderId,
    value: payload.valorTotal,
    creationDate: new Date(payload.dataCriacao),
  };

  const items = payload.items.map((item) => ({
    orderId,
    productId: Number(item.idItem),
    quantity: item.quantidadeItem,
    price: item.valorItem,
  }));

  return { order, items };
}
