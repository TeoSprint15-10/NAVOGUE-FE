import React from 'react';
import Button from '../Button';
import { S } from './style';

export default function FilterButton() {
  return (
    <S.Container>
      <Button type='FILTER' text='ALL' />
      <Button type='FILTER' text='TEXT' />
      <Button type='FILTER' text='URL' />
    </S.Container>
  );
}
