// Funçjões para consultas e ações de datas

// Retorna o Ano e Mẽs. Ex: 2024-03
export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth()+1}`;
}