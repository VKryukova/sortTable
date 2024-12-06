import React, { useEffect, useState } from 'react';
import './App.css';
import { TableRow } from './components/TableRow/TableRow.js';

const data = [
  { id: 1, name: 'Антон Андрейченко', age: 37 },
  { id: 2, name: 'Виктория Крюкова', age: 33 },
  { id: 3, name: 'Наталья Гришковец', age: 29 },
  { id: 4, name: 'Михаил Комиссаров', age: 34 },
  { id: 5, name: 'Анастасия Балова', age: 33 },
  { id: 6, name: 'Сергей Прокофьев', age: 43 },
  { id: 7, name: 'Карен Шаинян', age: 43 },
  { id: 9, name: 'Комиссар Рекс', age: 10 },
  { id: 10, name: 'Рихард Мозер', age: 35 },
]

export const App = () => {
  const [filteredData, setFilteredData] = useState(data);
  const [addedRows, setAddedRows] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  const onAddButtonClickHandler = () => {
    const newRows = [...addedRows, { added: true, name: '', age: '' }];
    setAddedRows(newRows);
  }

  function renderData() {
    return [...filteredData, ...addedRows].map((item) => {
      const upperName = item.name.toLocaleUpperCase();
      return <TableRow added={item.added} key={item.id} name={upperName} age={item.age} />
    })
  }

  const onChangeHandler = (e) => {
    const value = e.target.value;

    if (!value) {
      setFilteredData(data);
      return;
    }

    setFilteredData((prev) => {
      return prev.filter((item) => item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    })
  }

  const sortingName = () => {
    const sortedData = [...filteredData].sort((a,b) => {
      if (a.name < b.name) return sortOrder === "asc" ? -1 : 1;
      if (a.name > b.name) return sortOrder === "asc" ? 1: -1;
      return 0;
    });
    setFilteredData(sortedData);
    setSortOrder((prevOrder) => (prevOrder === "asc" ? 'desc':"asc"));
  };

  const sortingAge = () => {
    const sortedData = [...filteredData].sort((a,b) => {
      if (a.age < b.age) return sortOrder === "asc" ? -1 : 1;
      if (a.age > b.age) return sortOrder === "asc" ? 1: -1;
      return 0;
    });
    setFilteredData(sortedData);
    setSortOrder((prevOrder) => (prevOrder === "asc" ? 'desc':"asc"));
  };

  return (
    <React.Fragment>
      <div className='main'>
        <input className='input' type="text" onChange={onChangeHandler} placeholder={'поиск'}/>
        <button className="sortButton" onClick={sortingName}>{sortOrder === 'asc' ? 'А-Я' : 'Я-А'}</button>
        <button className="sortButton2" onClick={sortingAge}>{sortOrder === 'asc' ? '⭡' : '⭣'}</button>
        <table className="table"><tbody>{renderData()}</tbody></table>
        <button className='newStr' onClick={onAddButtonClickHandler}>Новая строка</button>
      </div>
    </React.Fragment>
  );
};

export default App;