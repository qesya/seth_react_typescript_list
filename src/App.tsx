import React, { useState } from 'react';
import { useItems } from './items';
import { Item } from './items/types';
import './App.css';

const App: React.FC = () => {
  const { items } = useItems();
  const [selectedItem, setSelectedItem] = useState('');
  const ItemLi = (props: Item) => {
    return (
      <li key={props.id} className="item" onClick={() => setSelectedItem(props.description)}>{props.name}</li>
    )
  };
  return (
    <div className="App">
      <ul>
        {items.map((item) => ItemLi(item))}
      </ul>
      <div className="selectedItem">
        {selectedItem}
      </div>
    </div>
  );
}

export default App;
