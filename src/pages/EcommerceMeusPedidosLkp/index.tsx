import React, { useState, useEffect } from 'react';

import { LeftOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Table, Space } from 'antd';

import {
  EcommerceMeusPedidosVol,
  Contentarea,
  PageheaderWrapper,
  Pageheader,
  MainInfo,
  PageHeaderTitle,
  Title,
  Subtitle,
  PageHeaderTitleSpacing,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BottomInfo,
  KeepBuying,
  PageheaderSpacing,
  TabBody,
  ContentareaSpacing,
  BreadcrumbText,
} from './styles';

const { Column } = Table;

const EcommerceMeusPedidosLkpPage = () => {
  function handleKeepBuying() {
    console.log('handleKeepBuying');
  }

  const listPedidoVol = [{}];

  return (
    <EcommerceMeusPedidosVol>
      <Contentarea>
        <ContentareaSpacing>
          <PageheaderWrapper>
            <Pageheader>
              <PageheaderSpacing>
                <MainInfo>
                  <PageHeaderTitle>
                    <PageHeaderTitleSpacing>
                      <Title>Meus pedidos</Title>
                      <Subtitle>
                        Aqui você encontra os resumos das suas compras
                        realizadas
                      </Subtitle>
                    </PageHeaderTitleSpacing>
                  </PageHeaderTitle>
                  {/* <BreadcrumbLink />
                  <BreadcrumbSeparator>foo</BreadcrumbSeparator>
                  <BreadcrumbLink>
                    <BreadcrumbLink>Meus pedidos</BreadcrumbLink>
                  </BreadcrumbLink> */}
                </MainInfo>
                <BottomInfo>
                  <KeepBuying
                    type="primary"
                    icon={<LeftOutlined />}
                    size="small"
                    onClick={handleKeepBuying}
                  >
                    Continuar comprando
                  </KeepBuying>
                </BottomInfo>
              </PageheaderSpacing>
            </Pageheader>
          </PageheaderWrapper>
          <TabBody>
            {/* <Table bordered dataSource={listPedidoVol}>
              <Column
                title=""
                dataIndex="check"
                key="check"
                align="left"
                showSorterTooltip={false}
                sorter={(a: any, b: any) => a.check - b.check}
              />
              <Column
                title="Data do Pedido"
                dataIndex="dataPedido"
                key="dataPedido"
                width="150px"
                align="left"
                showSorterTooltip={false}
                sorter={(a: any, b: any) => a.dataPedido - b.dataPedido}
              />
              <Column
                title="Data da Entrega"
                dataIndex="dataEntrega"
                key="dataEntrega"
                width="150px"
                align="left"
                showSorterTooltip={false}
                sorter={(a: any, b: any) => a.dataEntrega - b.dataEntrega}
              />
              <Column
                title="Pedido"
                dataIndex="pedido"
                key="pedido"
                width="800px"
                align="left"
                showSorterTooltip={false}
                sorter={(a: any, b: any) => a.pedido - b.pedido}
              />
              <Column
                title="Valor Total"
                dataIndex="valorTotal"
                key="valorTotal"
                width="122px"
                align="left"
                showSorterTooltip={false}
                sorter={(a: any, b: any) => a.valorTotal - b.valorTotal}
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
                        style={{ color: '#262626', marginRight: 10 }}
                      />
                    </a>
                    <a href="/">
                      <DeleteOutlined style={{ color: '#262626' }} />
                    </a>
                  </Space>
                )}
              />
            </Table> */}
            <Table bordered dataSource={listPedidoVol}>
              <Column
                title="Data de faturamento"
                dataIndex="dataDeFaturamento"
                key="dataDeFaturamento"
                align="left"
                showSorterTooltip={false}
                sorter={(a: any, b: any) => a.check - b.check}
              />
              <Column
                title="Produto"
                dataIndex="produto"
                key="produto"
                width="150px"
                align="left"
                showSorterTooltip={false}
                sorter={(a: any, b: any) => a.produto - b.produto}
              />
              <Column
                title="Qualidade"
                dataIndex="qualidade"
                key="qualidade"
                width="150px"
                align="left"
                showSorterTooltip={false}
                sorter={(a: any, b: any) => a.qualidade - b.qualidade}
              />
              <Column
                title="Produto"
                dataIndex="produto"
                key="produto"
                width="800px"
                align="left"
                showSorterTooltip={false}
                sorter={(a: any, b: any) => a.produto - b.produto}
              />
              <Column
                title="Embalagem"
                dataIndex="embalagem"
                key="embalagem"
                width="122px"
                align="left"
                showSorterTooltip={false}
                sorter={(a: any, b: any) => a.embalagem - b.embalagem}
              />
              <Column
                title="QE"
                dataIndex="qe"
                key="qe"
                width="122px"
                align="left"
                showSorterTooltip={false}
                sorter={(a: any, b: any) => a.qe - b.qe}
              />
              <Column
                title="QPE"
                dataIndex="qpe"
                key="qpe"
                width="122px"
                align="left"
                showSorterTooltip={false}
                sorter={(a: any, b: any) => a.qpe - b.qpe}
              />
              <Column
                title="Total Unidades"
                dataIndex="totalUnidades"
                key="totalUnidades"
                width="122px"
                align="left"
                showSorterTooltip={false}
                sorter={(a: any, b: any) => a.totalUnidades - b.totalUnidades}
              />
              <Column
                title="Valor da Emb."
                dataIndex="valorDaEmbalagem"
                key="valorDaEmbalagem"
                width="122px"
                align="left"
                showSorterTooltip={false}
                sorter={(a: any, b: any) =>
                  a.valorDaEmbalagem - b.valorDaEmbalagem
                }
              />
              <Column
                title="Valor Unitario"
                dataIndex="ValorUnitario"
                key="ValorUnitario"
                width="122px"
                align="left"
                showSorterTooltip={false}
                sorter={(a: any, b: any) => a.ValorUnitario - b.ValorUnitario}
              />
              <Column
                title="Embalagem"
                dataIndex="embalagem"
                key="embalagem"
                width="122px"
                align="left"
                showSorterTooltip={false}
                sorter={(a: any, b: any) => a.embalagem - b.embalagem}
              />
              <Column
                title="Status"
                dataIndex="status"
                key="status"
                width="122px"
                align="left"
                showSorterTooltip={false}
                sorter={(a: any, b: any) => a.status - b.status}
              />
              <Column
                title="Usuário"
                dataIndex="usuario"
                key="usuario"
                width="122px"
                align="left"
                showSorterTooltip={false}
                sorter={(a: any, b: any) => a.usuario - b.usuario}
              />
              <Column
                title="Observação"
                dataIndex="observacao"
                key="observacao"
                width="122px"
                align="left"
                showSorterTooltip={false}
                sorter={(a: any, b: any) => a.observacao - b.observacao}
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
                        style={{ color: '#262626', marginRight: 10 }}
                      />
                    </a>
                    <a href="/">
                      <DeleteOutlined style={{ color: '#262626' }} />
                    </a>
                  </Space>
                )}
              />
            </Table>
          </TabBody>
        </ContentareaSpacing>
      </Contentarea>
    </EcommerceMeusPedidosVol>
  );
};

export default EcommerceMeusPedidosLkpPage;
