import { Item } from '../../types/Item';
import * as C from './styles';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/Categories';

type Props = {
  item: Item
}


export const TableItem = ({ item }: Props) => {
  return (
    <C.TableLine>
      <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
      <C.Category color={categories[item.category].color}>
        <C.TableColumn>{categories[item.category].title}</C.TableColumn>
      </C.Category>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>
        <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
          R$ {item.value}
        </C.Value>
      </C.TableColumn>
    </C.TableLine>
  );
}