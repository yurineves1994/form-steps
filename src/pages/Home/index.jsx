import React, { useContext } from 'react';
// components
import { Plan } from '../../components/Plan';
import { Additions } from '../../components/Additions';
import { Finishing } from '../../components/Finishing';
import { Finished } from '../../components/Finished';
import { Form } from '../../components/Form';
import { List } from '../../components/List';

import * as S from './style';

import { RegisterContext } from '../../context/RegisterContext';

export const stepsRegister = [
  <Form />,
  <Plan />,
  <Additions />,
  <Finishing />,
  <Finished />,
];

export const Home = () => {
  const { currentComponent } = useContext(RegisterContext);
  return (
    <S.Container>
      <S.SideBar>
        <List />
      </S.SideBar>
      <S.Content>{currentComponent}</S.Content>
    </S.Container>
  );
};
