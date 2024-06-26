import * as C from './styles';
import { formatCurrentMonth } from '../../helpers/dateFilter';
import { ResumeItem } from '../ResumeItem';

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
}


export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {
  
  const handlePrevNextMonth = (operacao: string) => {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    if (operacao === '-') {
      currentDate.setMonth(currentDate.getMonth() - 1);
    } else if (operacao === '+') {
      currentDate.setMonth(currentDate.getMonth() + 1);  
    }
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
  }  
  
  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={() => handlePrevNextMonth('-')}>⬅️</C.MonthArrow>
        <C.MonthTitle>{ formatCurrentMonth(currentMonth) }</C.MonthTitle>
        <C.MonthArrow onClick={() => handlePrevNextMonth('+')}>➡️</C.MonthArrow>
      </C.MonthArea>
      <C.ResumeArea>
        <ResumeItem title="Receitas" value={income} />
        <ResumeItem title="Despesas" value={expense} />
        <ResumeItem title="Saldo" value={income - expense} color={ (income-expense) < 0 ? 'red' : 'green' }/>
      </C.ResumeArea>
    </C.Container>
  );
}