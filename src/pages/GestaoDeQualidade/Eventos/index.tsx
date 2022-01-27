import React, { useState, useEffect, useCallback } from 'react';

import { Typography, Table } from 'antd';
import { SearchOutlined, ClearOutlined } from '@ant-design/icons';

import {
  Eventos,
  Card,
  Line01,
  CompetenciaDiv,
  Competencia,
  SelectAnoCompetencia,
  SelectAnoCompetenciaOption,
  StatusDiv,
  Status,
  SelectStatus,
  SelectStatusOption,
  FilterActions,
  PesquisarDiv,
  ButtonPesquisar,
  LimparDiv,
  ButtonLimpar,
  CardSpacing,
  Tabs,
  TabPane,
  Collapse,
  CollapsePanel,
} from './styles';

const { Column } = Table;

const EventosPage = () => {
  function pesquisar() {
    console.log('pesquisar');
  }

  const limpar = useCallback(() => {
    console.log('limpar');
  }, []);

  const listAnoCompetencia = [
    {
      id: 1,
      desc: 'cat1',
    },
    {
      id: 2,
      desc: 'cat2',
    },
    {
      id: 3,
      desc: 'cat3',
    },
  ];

  const listStatus = [
    {
      id: 1,
      desc: 'status1',
    },
    {
      id: 2,
      desc: 'status2',
    },
    {
      id: 3,
      desc: 'status3',
    },
  ];

  const listTable = [
    {
      id: 1,
      status: '-',
      iniciodocadastro: '01/01/2021',
      finaldocadastro: '28/02/2021',
      semanasdisponiveis: '01 -> 15',
      limitadores: '1040 - João da Silva LTDA (Viva flores)',
      justificativa: 'Correção e Planejamento',
    },
    {
      id: 2,
      status: '-',
      iniciodocadastro: '01/01/2021',
      finaldocadastro: '28/02/2021',
      semanasdisponiveis: '01 -> 15',
      limitadores: '1040 - João da Silva LTDA (Viva flores)',
      justificativa: 'Correção e Planejamento',
    },
    {
      id: 3,
      status: '-',
      iniciodocadastro: '01/01/2021',
      finaldocadastro: '28/02/2021',
      semanasdisponiveis: '01 -> 15',
      limitadores: '1040 - João da Silva LTDA (Viva flores)',
      justificativa: 'Correção e Planejamento',
    },
  ];

  return (
    <CardSpacing>
      <Line01>
        <CompetenciaDiv>
          <Competencia
            label={
              <Typography.Text ellipsis>Ano de competência:</Typography.Text>
            }
            name="competencia"
          />
          <SelectAnoCompetencia>
            {listAnoCompetencia.map(option => (
              <SelectAnoCompetenciaOption key={option.id} value={option.id}>
                {option.desc}
              </SelectAnoCompetenciaOption>
            ))}
          </SelectAnoCompetencia>
        </CompetenciaDiv>
        <StatusDiv>
          <Status
            label={<Typography.Text ellipsis>Status:</Typography.Text>}
            name="status"
          />
          <SelectStatus>
            {listStatus.map(option => (
              <SelectStatusOption key={option.id} value={option.id}>
                {option.desc}
              </SelectStatusOption>
            ))}
          </SelectStatus>
        </StatusDiv>
        <FilterActions>
          <PesquisarDiv>
            <ButtonPesquisar
              type="primary"
              icon={<SearchOutlined />}
              onClick={pesquisar}
            />
          </PesquisarDiv>
          <LimparDiv>
            <ButtonLimpar
              type="default"
              icon={<ClearOutlined />}
              onClick={limpar}
            />
          </LimparDiv>
        </FilterActions>
      </Line01>
      <Collapse defaultActiveKey={['1']} ghost>
        <CollapsePanel header="Eventos cadastrados" key="1">
          <Table bordered dataSource={listTable}>
            <Column
              title="Status"
              dataIndex="status"
              key="status"
              align="left"
              showSorterTooltip={false}
              sorter={(a: any, b: any) => a.status - b.status}
            />
            <Column
              title="Início do cadastro"
              dataIndex="iniciodocadastro"
              key="iniciodocadastro"
              align="left"
              showSorterTooltip={false}
              sorter={(a: any, b: any) =>
                a.iniciodocadastro - b.iniciodocadastro
              }
            />
            <Column
              title="Final do cadastro"
              dataIndex="finaldocadastro"
              key="finaldocadastro"
              align="left"
              showSorterTooltip={false}
              sorter={(a: any, b: any) => a.finaldocadastro - b.finaldocadastro}
            />
            <Column
              title="Semanas disponíveis"
              dataIndex="semanasdisponiveis"
              key="semanasdisponiveis"
              align="left"
              showSorterTooltip={false}
              sorter={(a: any, b: any) =>
                a.semanasdisponiveis - b.semanasdisponiveis
              }
            />
            <Column
              title="Limitadores"
              dataIndex="limitadores"
              key="limitadores"
              align="left"
              showSorterTooltip={false}
              sorter={(a: any, b: any) => a.limitadores - b.limitadores}
            />
            <Column
              title="Justificativa"
              dataIndex="justificativa"
              key="justificativa"
              align="left"
              showSorterTooltip={false}
              sorter={(a: any, b: any) => a.justificativa - b.justificativa}
            />
          </Table>
        </CollapsePanel>
      </Collapse>
    </CardSpacing>
  );
};

export default EventosPage;
