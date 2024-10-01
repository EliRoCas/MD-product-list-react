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

    <Form />
    
  );
};

export default FormPage;
