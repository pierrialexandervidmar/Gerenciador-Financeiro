// Funçjões para consultas e ações de datas

import { Item } from '../types/Item';

// Retorna o Ano e Mẽs. Ex: 2024-03
export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth()+1}`;
}

// Filtrar a lista pelo mês
export const filterListByMonth = (list: Item[], date: string): Item[] => {
  let newList: Item[] = [];
  //let [year, month] = date.split('-');
  let dateSplit = date.split('-');
  let year = dateSplit[0];
  let month = dateSplit[1];

  for(let i in list) {
    if(
      list[i].date.getFullYear() === parseInt(year) &&
      (list[i].date.getMonth() + 1 === parseInt(month))
    ) {
      newList.push(list[i])
    }
  }

  return newList;
}