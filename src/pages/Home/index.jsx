import React, { useContext } from 'react';
// components

import { List } from '../../components/List';

import * as S from './style';

import { RegisterContext } from '../../context/RegisterContext';
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
