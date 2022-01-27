/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Button, Tooltip } from 'antd';
import { DownOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';

export type TableListItem = {
  key: number;
  nomeLocal: string;
  area: string;
  tipo: string;
  areaSecao: string;
};
const tableListDataSource: TableListItem[] = [];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    nomeLocal: 'Estufa',
    area: '10.000m2',
    tipo: 'Estufa',
    areaSecao: '10.000m2',
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: 'Nome Local',
    dataIndex: 'nomeLocal',
    align: 'center',
  },
  {
    title: 'Area',
    dataIndex: 'area',
    align: 'center',
  },
  {
    title: 'Tipo',
    dataIndex: 'tipo',
    align: 'center',
  },
  {
    title: 'Área seção',
    dataIndex: 'areaSecao',
    align: 'center',
  },
  {
    title: 'Acoes',
    key: 'option',
    align: 'center',
  },
];

export default () => {
  return (
    <iframe
      title="teste"
      // style="border: 1px solid rgba(0, 0, 0, 0.1);"
      width="800"
      height="450"
      src="https://www.google.com/search?q=contextApi+persist&oq=contextApi+persist&aqs=chrome..69i57.8978j0j7&sourceid=chrome&ie=UTF-8"
      allowFullScreen
    />
  );
};
