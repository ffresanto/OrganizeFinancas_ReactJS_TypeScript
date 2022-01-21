import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Category } from './types/Category';
import { Item } from './types/Items';
import { categories as dtCategories } from './data/categories';
import { items as dtItems } from './data/items';
import { getCurrentMonth, filterListByMonth} from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';

const App = () => {

  const [list, setList] = useState(dtItems);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {

    setFilteredList(filterListByMonth(list, currentMonth));

  }, [list, currentMonth]);

  useEffect(() => {

    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (dtCategories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setExpense(expenseCount);
    setIncome(incomeCount);
    
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
        <C.HeaderText>Organize Finanças 💸</C.HeaderText>
      </C.Header>
      <C.Body>
        
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        <InputArea onAdd={handleAddItem} />

        <TableArea list={filteredList} /> 

      </C.Body>
    </C.Container>
  );
}

export default App;

