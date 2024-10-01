import { useState } from 'react';
import Form from '../components/Form';
import Button from '../elements/Button';


const FormPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <Form
        label="Título"
        type="text"
        placeholder="Título de tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Form
        label="Descripción"
        type="textarea"
        placeholder="Descripción de tarea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button type="submit">Agregar Tarea</Button>
    </form>
  );
};

export default FormPage;
