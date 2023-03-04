export async function getProducts() {
  const resp = await fetch(
    "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
  );

  return resp.json();
}