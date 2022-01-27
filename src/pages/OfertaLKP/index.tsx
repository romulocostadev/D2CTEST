import React, { useState, useEffect } from 'react';

import { Typography, Table, Space } from 'antd';
import {
  FilterOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

import {
  OfertaLKP,
  Card,
  ViceriForm,
  ChaveDiv,
  ChaveRazaosocialNomefantasia,
  InputEnterpriseName,
  SemanaDiv,
  SemanaAno,
  PeekWeekYear,
  ActionsDiv,
  FilterButton,
  TableBody,
  CardSpacing,
  FormWrapper,
} from './styles';

const { Column } = Table;

const OfertaLKPPage = () => {
  function handleFilterButton() {
    console.log('oi');
  }

  const listLkp = [{}];

  return (
    <OfertaLKP>
      <Card>
        <CardSpacing>
          <ViceriForm layout="vertical">
            <FormWrapper>
              <ChaveDiv>
                <ChaveRazaosocialNomefantasia
                  label={
                    <Typography.Text ellipsis>
                      Chave / Razão social / Nome fantasia:
                    </Typography.Text>
                  }
                  name="chaverazaosocialnomefantasia"
                  rules={[{ required: true, message: 'Campo obrigatório' }]}
                >
                  <InputEnterpriseName />
                </ChaveRazaosocialNomefantasia>
              </ChaveDiv>
              <SemanaDiv>
                <SemanaAno
                  label={
                    <Typography.Text ellipsis>Semana/Ano:</Typography.Text>
                  }
                  name="semanaano"
                  rules={[{ required: true, message: 'Campo obrigatório' }]}
                >
                  <PeekWeekYear format="DD/MM/YYYY" size="middle" />
                </SemanaAno>
              </SemanaDiv>
              <ActionsDiv>
                <FilterButton
                  type="default"
                  icon={<FilterOutlined />}
                  onClick={handleFilterButton}
                />
              </ActionsDiv>
            </FormWrapper>
          </ViceriForm>

          <TableBody>
            <Table bordered dataSource={listLkp}>
              <Column
                title="Descrição do produto"
                dataIndex="productDescription"
                key="productDescription"
                width="289px"
                align="left"
                showSorterTooltip={false}
                sorter={(a: any, b: any) =>
                  a.productDescription - b.productDescription
                }
              />
              <Column
                title="Qtd"
                dataIndex="quantity"
                key="quantity"
                width="54px"
                align="left"
                showSorterTooltip={false}
                sorter={(a: any, b: any) => a.quantity - b.quantity}
              />
              <Column
                title="Valor un. (R$)"
                dataIndex="value"
                key="value"
                align="left"
                showSorterTooltip={false}
                sorter={(a: any, b: any) => a.value - b.value}
              />
              <Column
                title="Percentual"
                dataIndex="percentage"
                key="percentage"
                align="left"
                showSorterTooltip={false}
                sorter={(a: any, b: any) => a.percentage - b.percentage}
              />
              <Column
                title="Vigência"
                dataIndex="validity"
                key="validity"
                align="left"
                showSorterTooltip={false}
                sorter={(a: any, b: any) => a.validity - b.validity}
              />
              <Column
                title="Observações"
                dataIndex="obs"
                key="obs"
                align="left"
                showSorterTooltip={false}
                sorter={(a: any, b: any) => a.obs - b.obs}
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
          </TableBody>
        </CardSpacing>
      </Card>
    </OfertaLKP>
  );
};

export default OfertaLKPPage;
