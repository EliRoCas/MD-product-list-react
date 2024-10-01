import { useState } from 'react';
import FormPage from '../sections/FormPage'
import CardList from '../sections/CardList'


const FormScreen = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div className="formScreen">
      <FormPage addItem={addItem} />
      
    </div>
  );
};

export default FormScreen;

