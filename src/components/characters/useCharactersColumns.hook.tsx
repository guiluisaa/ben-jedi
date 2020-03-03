import React from 'react';
import { ColumnProps } from 'antd/lib/table';
import { useTranslation } from 'react-i18next';

import { Character } from '@/io/redux/character/character.types';
import Planet from '@/components/planet/Planet.component';
import Specie from '@/components/specie/Specie.component';

const useCharactersColumns = () => {
  const [t] = useTranslation();

  const columns: ColumnProps<Character>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: t('characters:table.name'),
      dataIndex: 'name'
    },
    {
      title: t('characters:table.height'),
      dataIndex: 'height'
    },
    {
      title: t('characters:table.gender'),
      dataIndex: 'gender'
    },
    {
      title: t('characters:table.birth_year'),
      dataIndex: 'birth_year'
    },
    {
      title: t('characters:table.homeworld'),
      dataIndex: 'homeworld',
      render: (planetId: number) => <Planet planetId={planetId} />
    },
    {
      title: t('characters:table.species'),
      dataIndex: 'species',
      render: (species: number[]) =>
        species.map(specie => <Specie key={specie} specieId={specie} />)
    }
  ];

  return columns;
};

export default useCharactersColumns;
