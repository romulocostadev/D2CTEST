import React, { useState, useEffect } from 'react';

import { Typography, Table, Space } from 'antd';
import {
  SearchOutlined,
  ClearOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

import history from '../../services/history';

import {
  DatasComemorativas,
  Card,
  Body,
  ViceriForm,
  Line01,
  SemanaDiv,
  Dia,
  Semana,
  DatePickerSemana,
  DiaDiv,
  DatePickerDia,
  DescricaoDiv,
  Descricao,
  InputDescricao,
  DatasComemorativasSpacing,
  CardSpacing,
  BodySpacing,
  ViceriFormSpacing,
  Line02,
  SemanasAntDiv,
  SemanasAntecedentes,
  DatePickerSemanaAntecedente,
  FilterActions,
  SearchButton,
  ButtonLimpar,
  Anchor,
} from './styles';

const { Column } = Table;

const DatasComemorativasPage = () => {
  function limpar() {
    console.log('limpar');
  }

  function remove(id: any) {
    console.log('remove');
  }

  const listDatasComemorativas = [
    {
      Semana: 11,
      Dia: '08/03',
      Descricao: 'Dia da Mulher',
      SemanasAntecedentes: '09 -> 10',
    },
    {
      Semana: 11,
      Dia: '08/03',
      Descricao: 'Dia da Mulher',
      SemanasAntecedentes: '09 -> 10',
    },
    {
      Semana: 11,
      Dia: '08/03',
      Descricao: 'Dia da Mulher',
      SemanasAntecedentes: '09 -> 10',
    },
  ];

  return (
    <DatasComemorativas>
      <DatasComemorativasSpacing>
        <Card>
          <CardSpacing>
            <Body>
              <BodySpacing>
                <ViceriForm layout="vertical">
                  <ViceriFormSpacing>
                    <Line01>
                      <SemanaDiv>
                        <Semana
                          label={
                            <Typography.Text ellipsis>Semana:</Typography.Text>
                          }
                          name="Semana"
                        />
                        <DatePickerSemana format="DD/MM/YYYY" size="middle" />
                      </SemanaDiv>
                      <DiaDiv>
                        <Dia
                          label={
                            <Typography.Text ellipsis>Dia:</Typography.Text>
                          }
                          name="dia"
                        />
                        <DatePickerDia format="DD/MM/YYYY" size="middle" />
                      </DiaDiv>
                      <DescricaoDiv>
                        <Descricao
                          label={
                            <Typography.Text ellipsis>
                              Descrição:
                            </Typography.Text>
                          }
                          name="descricao"
                        />
                        <InputDescricao />
                      </DescricaoDiv>
                    </Line01>
                    <Line02>
                      <SemanasAntDiv>
                        <SemanasAntecedentes
                          label={
                            <Typography.Text ellipsis>
                              Semanas antecedentes:
                            </Typography.Text>
                          }
                          name="semanasantecedentes"
                        />
                        <DatePickerSemanaAntecedente
                          format="DD/MM/YYYY"
                          size="middle"
                        />
                      </SemanasAntDiv>
                      <FilterActions>
                        <SearchButton
                          type="primary"
                          icon={<SearchOutlined />}
                        />
                        <ButtonLimpar
                          type="default"
                          icon={<ClearOutlined />}
                          onClick={limpar}
                        />
                      </FilterActions>
                    </Line02>
                    <Table bordered dataSource={listDatasComemorativas}>
                      <Column
                        title="Ações"
                        key="acoes"
                        width="100px"
                        align="center"
                        render={(text, record: any) => (
                          <Space>
                            <Anchor
                              type="text"
                              onClick={() =>
                                history.push(`genero/${record.id}`)
                              }
                            >
                              <EditOutlined
                                style={{ color: '#262626', marginRight: 10 }}
                              />
                            </Anchor>
                            <Anchor
                              type="text"
                              onClick={() => remove(record.id)}
                            >
                              <DeleteOutlined style={{ color: '#262626' }} />
                            </Anchor>
                          </Space>
                        )}
                      />
                      <Column
                        title="Semana"
                        dataIndex="Semana"
                        key="Semana"
                        align="left"
                        showSorterTooltip={false}
                        sorter={(a: any, b: any) => a.Semana - b.Semana}
                      />
                      <Column
                        title="Dia"
                        dataIndex="Dia"
                        key="Dia"
                        align="left"
                        showSorterTooltip={false}
                        sorter={(a: any, b: any) => a.Dia - b.Dia}
                      />
                      <Column
                        title="Descricao"
                        dataIndex="Descricao"
                        key="Descricao"
                        align="left"
                        showSorterTooltip={false}
                        sorter={(a: any, b: any) => a.Descricao - b.Descricao}
                      />
                      <Column
                        title="SemanasAntecedentes"
                        dataIndex="SemanasAntecedentes"
                        key="SemanasAntecedentes"
                        align="left"
                        showSorterTooltip={false}
                        sorter={(a: any, b: any) =>
                          a.SemanasAntecedentes - b.SemanasAntecedentes
                        }
                      />
                    </Table>
                  </ViceriFormSpacing>
                </ViceriForm>
              </BodySpacing>
            </Body>
          </CardSpacing>
        </Card>
      </DatasComemorativasSpacing>
    </DatasComemorativas>
  );
};

export default DatasComemorativasPage;
