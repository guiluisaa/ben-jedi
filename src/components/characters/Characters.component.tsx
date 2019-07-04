import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Table, Tag } from 'antd';
import { ColumnProps } from 'antd/lib/table';

import { Character } from '@/io/character/character.types';
import { Meta } from '@/io/meta/meta.types';

type CharactersComponentProps = {
  isLoading: boolean;
  characters: Character[];
  meta: Meta;
  changePage: (page: number) => void;
};

const CharactersComponent: FunctionComponent<CharactersComponentProps> = ({
  isLoading,
  characters,
  meta,
  changePage
}) => {
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
      dataIndex: 'homeworld'
    },
    {
      title: t('characters:table.species'),
      dataIndex: 'species',
      render: (species: string[]) =>
        species.map(specie => <Tag key={specie}>{specie}</Tag>)
    }
  ];

  return (
    <>
      <Typography.Title level={2}>
        {t('characters:movie_characters')}
      </Typography.Title>

      <Table
        loading={isLoading}
        columns={columns}
        dataSource={characters}
        rowKey="id"
        pagination={{
          defaultCurrent: 1,
          current: meta.page,
          pageSize: 10,
          total: meta.count,
          onChange: changePage
        }}
      />
    </>
  );
};

export default CharactersComponent;
