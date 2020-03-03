import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Table } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';
import { parse } from 'query-string';

import useCharacters from '@/io/redux/character/useCharacters';
import useCharactersColumns from './useCharactersColumns.hook';

const Characters: FC = () => {
  const [t] = useTranslation();
  const history = useHistory();
  const { search } = useLocation();
  const columns = useCharactersColumns();

  const { page } = parse(search);
  const { getCharacters, characters, meta, isLoading } = useCharacters();

  useEffect(() => {
    getCharacters(page && Number(page) ? Number(page) : 1);
  }, []);

  const changePage = (page: number) =>
    history.push({
      pathname: '/characters',
      search: `?page=${page}`
    });

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

export default Characters;
