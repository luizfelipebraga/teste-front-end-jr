export function formatPrice(price: number) {
  const priceFormated = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return priceFormated;
}
