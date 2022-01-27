import React, { useState, useEffect } from 'react';

import { Typography, Table, Space } from 'antd';
import {
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
  StarOutlined,
} from '@ant-design/icons';

import {
  PreferenciasdoProduto,
  Card,
  Body,
  ViceriForm,
  Line01,
  ChaveDiv,
  RazaoSocial,
  InputRazaoSocial,
  Line02,
  CategoriaDiv,
  Categoria,
  SelectCategoria,
  SelectCategoriaOption,
  ComposicaoDiv,
  Composicao,
  SelectComposicao,
  SelectComposicaoOption,
  ProdutoDiv,
  Produto,
  SelectProdutos,
  SelectProdutosOption,
  ExpedicaoDiv,
  Expedicao,
  SelectExpedicao,
  SelectExpedicaoOption,
  SearchButton,
  ViceriFormSpacing,
  Tabs,
  TabPane,
  Collapse,
  CollapsePanel,
} from './styles';

const { Column } = Table;

const PreferenciadeProdutosPage = () => {
  const categoriaList = [
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

  const composicaoList = [
    {
      id: 1,
      desc: 'comp1',
    },
    {
      id: 2,
      desc: 'comp2',
    },
    {
      id: 3,
      desc: 'comp3',
    },
  ];

  const produtosList = [
    {
      id: 1,
      desc: 'prod1',
    },
    {
      id: 2,
      desc: 'prod2',
    },
    {
      id: 3,
      desc: 'prod3',
    },
  ];

  const expedicaoList = [
    {
      id: 1,
      desc: 'exp1',
    },
    {
      id: 2,
      desc: 'exp2',
    },
    {
      id: 3,
      desc: 'exp3',
    },
  ];

  const listTable = [
    {
      id: 1,
      descricaodoproduto: '01639.011.001.00.00 - Kalanchoe P11 - Variado',
      composicaodaembalagem: '-',
      minimo: '-',
      multiplo: '-',
    },
    {
      id: 2,
      descricaodoproduto: '01639.011.001.00.00 - Kalanchoe P11 - Variado',
      composicaodaembalagem: '-',
      minimo: '-',
      multiplo: '-',
    },
    {
      id: 3,
      descricaodoproduto: '01639.011.001.00.00 - Kalanchoe P11 - Variado',
      composicaodaembalagem: '-',
      minimo: '-',
      multiplo: '-',
    },
  ];

  const listDelivery = [
    {
      id: 1,
      datadacriacao: '09/10/21 - 09:45',
      descricaodaentrega: 'Pedidos e entregas 2021',
      favorito: <StarOutlined />,
    },
  ];

  return (
    <PreferenciasdoProduto>
      <Card>
        <Body>
          <Tabs defaultActiveKey="produto" size="small">
            <TabPane tab="Produto" key="produto">
              <ViceriForm layout="vertical">
                <ViceriFormSpacing>
                  <Line01>
                    <ChaveDiv>
                      <RazaoSocial
                        label={
                          <Typography.Text ellipsis>
                            Chave / Razão social / Nome fantasia:
                          </Typography.Text>
                        }
                        name="razaosocial"
                      />
                      <InputRazaoSocial />
                    </ChaveDiv>
                  </Line01>
                  <Line02>
                    <CategoriaDiv>
                      <Categoria
                        label={
                          <Typography.Text ellipsis>Categoria:</Typography.Text>
                        }
                        name="categoria"
                      />
                      <SelectCategoria>
                        {categoriaList.map(option => (
                          <SelectCategoriaOption
                            key={option.id}
                            value={option.id}
                          >
                            {option.desc}
                          </SelectCategoriaOption>
                        ))}
                      </SelectCategoria>
                    </CategoriaDiv>
                    <ComposicaoDiv>
                      <Composicao
                        label={
                          <Typography.Text ellipsis>
                            Composição:
                          </Typography.Text>
                        }
                        name="composicao"
                      />
                      <SelectComposicao>
                        {composicaoList.map(option => (
                          <SelectComposicaoOption
                            key={option.id}
                            value={option.id}
                          >
                            {option.desc}
                          </SelectComposicaoOption>
                        ))}
                      </SelectComposicao>
                    </ComposicaoDiv>
                    <ProdutoDiv>
                      <Produto
                        label={
                          <Typography.Text ellipsis>Produto:</Typography.Text>
                        }
                        name="produto"
                      />
                      <SelectProdutos>
                        {produtosList.map(option => (
                          <SelectProdutosOption
                            key={option.id}
                            value={option.id}
                          >
                            {option.desc}
                          </SelectProdutosOption>
                        ))}
                      </SelectProdutos>
                    </ProdutoDiv>
                    <ExpedicaoDiv>
                      <Expedicao
                        label={
                          <Typography.Text ellipsis>Expedição:</Typography.Text>
                        }
                        name="expedicao"
                      />
                      <SelectExpedicao>
                        {expedicaoList.map(option => (
                          <SelectExpedicaoOption
                            key={option.id}
                            value={option.id}
                          >
                            {option.desc}
                          </SelectExpedicaoOption>
                        ))}
                      </SelectExpedicao>
                    </ExpedicaoDiv>
                    <SearchButton type="primary" icon={<SearchOutlined />} />
                  </Line02>
                  <Collapse defaultActiveKey={['1']} ghost>
                    <CollapsePanel header="Listagem de itens" key="1">
                      <Table bordered dataSource={listTable}>
                        <Column
                          title="Descrição do produto"
                          dataIndex="descricaodoproduto"
                          key="descricaodoproduto"
                          align="left"
                          showSorterTooltip={false}
                          sorter={(a: any, b: any) =>
                            a.descricaodoproduto - b.descricaodoproduto
                          }
                        />
                        <Column
                          title="Composição da embalagem"
                          dataIndex="composicaodaembalagem"
                          key="composicaodaembalagem"
                          align="left"
                          showSorterTooltip={false}
                          sorter={(a: any, b: any) =>
                            a.composicaodaembalagem - b.composicaodaembalagem
                          }
                        />
                        <Column
                          title="Mínimo"
                          dataIndex="minimo"
                          key="minimo"
                          align="left"
                          showSorterTooltip={false}
                          sorter={(a: any, b: any) => a.minimo - b.minimo}
                        />
                        <Column
                          title="Múltiplo"
                          dataIndex="multiplo"
                          key="multiplo"
                          align="left"
                          showSorterTooltip={false}
                          sorter={(a: any, b: any) => a.multiplo - b.multiplo}
                        />
                      </Table>
                    </CollapsePanel>
                  </Collapse>
                </ViceriFormSpacing>
              </ViceriForm>
            </TabPane>
            <TabPane tab="Entrega" key="entrega">
              <ViceriForm layout="vertical">
                <ViceriFormSpacing>
                  <Line01>
                    <ChaveDiv>
                      <RazaoSocial
                        label={
                          <Typography.Text ellipsis>
                            Chave / Razão social / Nome fantasia:
                          </Typography.Text>
                        }
                        name="razaosocial"
                      />
                      <InputRazaoSocial />
                    </ChaveDiv>
                  </Line01>
                  <Collapse defaultActiveKey={['1']} ghost>
                    <CollapsePanel header="Esquema de entregas" key="1">
                      <Table bordered dataSource={listDelivery}>
                        <Column
                          title="Data de criação"
                          dataIndex="datadacriacao"
                          key="datadacriacao"
                          align="left"
                          showSorterTooltip={false}
                          sorter={(a: any, b: any) =>
                            a.datadacriacao - b.datadacriacao
                          }
                        />
                        <Column
                          title="Ações"
                          key="acoes"
                          width="100px"
                          align="center"
                          render={(text, record: any) => (
                            <Space>
                              <a href="/">
                                <EditOutlined
                                  style={{
                                    color: '#262626',
                                    marginRight: 10,
                                  }}
                                />
                              </a>
                              <a href="/">
                                <DeleteOutlined style={{ color: '#262626' }} />
                              </a>
                            </Space>
                          )}
                        />
                        <Column
                          title="Descrição da entrega"
                          dataIndex="descricaodaentrega"
                          key="descricaodaentrega"
                          align="left"
                          showSorterTooltip={false}
                          sorter={(a: any, b: any) =>
                            a.descricaodaentrega - b.descricaodaentrega
                          }
                        />
                        <Column
                          title="Favorito"
                          dataIndex="favorito"
                          key="favorito"
                          align="center"
                          width="120px"
                          showSorterTooltip={false}
                          sorter={(a: any, b: any) => a.favorito - b.favorito}
                        />
                      </Table>
                    </CollapsePanel>
                  </Collapse>
                </ViceriFormSpacing>
              </ViceriForm>
            </TabPane>
          </Tabs>
        </Body>
      </Card>
    </PreferenciasdoProduto>
  );
};

export default PreferenciadeProdutosPage;
