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

// formatar a data
export const formatDate = (date: Date): string => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  
  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}

// formata o dia e mês para incluir um zero quando necessário
const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;

// Formatar o mês a ser exibido
export const formatCurrentMonth = (currentMonth: string): string => {
  let [year, month] = currentMonth.split('-');
  let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  return `${months[parseInt(month) - 1]} de ${year}`;
}