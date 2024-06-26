import { useState, useEffect } from 'react';
import * as C from './App.styles'
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/Categories';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';

const App = () => {

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  // Monitora a lista filtrada, sempre que houver mudança
  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth]);

  // Monitora os valores da lista filtrada e faz os cálculos
  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList) {
      // SE as categorias da lista filtrada em tela for do tipo expense
      if(categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }
    setIncome(incomeCount);
    setExpense(expenseCount);    
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        {/* Área de informações */}
        <InfoArea 
          currentMonth={currentMonth} 
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />


        {/* Área de Inserções */}
        <InputArea onAdd={handleAddItem} />



        {/* Tabela de itens */}
          <TableArea list={filteredList} />


      </C.Body>
    </C.Container>
  );
}

export default App;
