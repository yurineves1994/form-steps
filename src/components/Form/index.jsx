import { useContext, useState } from 'react';
import { RegisterContext } from '../../context/RegisterContext';
import * as S from './style';

export const Form = () => {
  const { saveInfos } = useContext(RegisterContext);
  const [name, setName] = useState('');
  const [adress, setAdress] = useState('');
  const [number, setNumber] = useState('');

  const handleForm = (e) => {
    e.preventDefault();
    const infos = {
      name,
      adress,
      number,
    };
    saveInfos(infos);
  };

  return (
    <div className="container">
      <h2>Personal info</h2>
      <h3>Please provide your name, email address, and phone number.</h3>
      <S.Form onSubmit={handleForm}>
        <label>
          Nome
          <S.Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Adress
          <S.Input
            type="text"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          />
        </label>
        <label>
          Number
          <S.Input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>
        <div className="button">
          <button type="submit">Next Step</button>
        </div>
      </S.Form>
    </div>
  );
};
